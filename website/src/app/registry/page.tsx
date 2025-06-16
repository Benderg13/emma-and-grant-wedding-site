import Link from "next/link"

export default function Page() {
    return(
        <main>
            <div className='min-h-screen flex items-center justify-center '>
                <div className="bg-navy-blue p-8 rounded-lg max-w-md w-full"> 
                <h1 className="text-2xl font-bold mb-6 text-center ">Registry</h1>
                <ul>
                    <li className="m-2">
                    <a href="https://www.amazon.com/wedding/registry/1AOXE3YE8RW04" target="_blank">
                    <button 
                        type="button"
                        className="hover:bg-white bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue">
                        Amazon
                    </button></a>
                    </li>
                    <li className="m-2">
                    <a href="https://www.macys.com/registry/Emma-Belair-Grant-Bender/1118082" target="_blank">
                    <button 
                        type="button"
                        className="hover:bg-white bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue">
                        Macy's
                    </button></a>
                    </li>
                </ul>
                
                </div>
                </div>
        </main>
    );
}