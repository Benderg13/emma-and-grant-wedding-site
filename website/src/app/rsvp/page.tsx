'use client'; 
import React, { useState, FormEvent } from 'react';

export default function RSVP() {
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const CORRECT_INVITE_HASH: string = 'af6a876628659c668fb400bf8bf4aa7a373534b6189ed3b7e2ce5532b950e737'

    // Function to hash a string using SHA-256
    const hashString = async (str: string) => {
        const textEncoder = new TextEncoder();
        const data = textEncoder.encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hexHash;
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmittedMessage('');
        setErrorMessage('');
        setIsLoading(true);

        const formData = new FormData(event.currentTarget)
        const name: string | null  = formData.get('name') as string | null;;
        const email: string | null  = formData.get('email') as string | null;;
        const extras: string | null  = formData.get('extras') as string | null;
        const inviteCode: string | null = formData.get('invite_code') as string | null;

        // Basic validation for required fields
        if (!name || !email || !inviteCode) {
            setErrorMessage('Name, Email, and Invite Code are required.');
            setIsLoading(false);
            return;
        }

        try{
            const hashedInviteCode: string = await hashString(inviteCode);
            if (hashedInviteCode !== CORRECT_INVITE_HASH) {
                console.log('error, wrong invite code')
                setErrorMessage('Invalid invite code. Please check again.');
                setIsLoading(false);
                return; // Stop execution if invite code is wrong
            }
            const response: Response = await fetch('https://script.google.com/macros/s/AKfycbxncVnSagKk21nqTn_TxEmq54-QbQU2fHpLEGjzZzDB4Bzl5B2pT1NBZPhTQXr8-5ZbuA/exec', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                const result: any = await response.json();
                setSubmittedMessage('Form submitted successfully!');
                console.log('Server response:', result);
                //(event.currentTarget as HTMLFormElement).reset();
            } else {
                const errorData: string = await response.text(); // Get error response body
                setErrorMessage(`Submission failed: ${response.status} - ${errorData || 'Unknown error'}`);
                console.error('Submission failed:', response.status, errorData);
            }
            
        } catch (error: any) {
            setErrorMessage(`An error occurred: ${error.message}`);
            console.error('Error during form submission:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <main>
            <div className='min-h-screen flex items-center justify-center '>
                <div className="bg-navy-blue p-8 rounded-lg max-w-md w-full"> 
                <h1 className="text-4xl font-bold mb-6 text-center ">RSVP</h1>
                    {errorMessage && (
                        <p className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
                            {errorMessage}
                        </p>
                    )}
                        {submittedMessage && (
                        <p className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
                            {submittedMessage}
                        </p>
                    )}
                <form onSubmit={onSubmit} className="space-y-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                    <div>
                        <label>Your Email</label>
                        <input 
                            required 
                            type="text" 
                            name="email" 
                            placeholder='Your Email' 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm"/>
                    </div>
                    <div>
                        <label>Your Name</label>
                        <input 
                            required 
                            type="text" 
                            name="name" 
                            placeholder='Your Name'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm"/>
                    </div>
                    <div>
                        <label>Will you be able to join us at our wedding?</label>
                        <select 
                        required 
                        name="attending"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm">
                            <option value="accept">Joyfully Accept</option>
                            <option value="decline">Regretfully Decline</option>
                        </select>
                    </div>
                    <div>
                        <label>Total Number Attending?</label>
                        <input  
                            type="number" 
                            name="extras" 
                            placeholder='Spouse and Children if applicable'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm"/>
                    </div>
                    <div>
                        <label>Dietary Restrictions</label>
                        <input  
                            type="text" 
                            name="diet" 
                            placeholder='list all that apply'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm"/>
                    </div>
                    <div>
                        <label>Invite Code</label>
                        <input 
                            required 
                            id="invite_code" 
                            type="text" 
                            name="invite_code" 
                            placeholder='Invite Code'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm"/>
                    </div>
                    <button 
                        type="submit"
                        className={`bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue ${
                        isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-darker-pink hover:bg-darker-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lighter-pink'
                        }`}
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? 'Submitting...' : 'Submit RSVP'}
                    </button>
                </form>
                </div>
            </div>
        </main>
    );
}