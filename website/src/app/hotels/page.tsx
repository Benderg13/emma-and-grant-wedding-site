
export default function Page() {
    return(
        <main>
            <div className='min-h-screen flex items-center justify-center '>
                <div className="bg-navy-blue p-8 rounded-lg max-w-md w-full"> 
                <h1 className="text-2xl font-bold mb-6 text-center ">Hotels in the Area</h1>
                <ul>
                    <li className="m-2">
                    <a href="" target="_blank">
                    <button 
                        type="button"
                        className="hover:bg-white bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue">
                        Hotel 1
                    </button></a>
                    </li>
                    <li className="m-2">
                    <a href="" target="_blank">
                    <button 
                        type="button"
                        className="hover:bg-white bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue">
                        hotel 2
                    </button></a>
                    </li>
                </ul>
            </div>
            </div>
        </main>
    );
}