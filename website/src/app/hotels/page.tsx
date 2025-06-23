
export default function Page() {
    return(
        <main>
            <div className='min-h-screen flex items-center justify-center '>
                <div className="bg-navy-blue p-8 rounded-lg max-w-xl w-full"> 
                <h1 className="text-4xl font-bold mb-6 text-center ">Hotels in the Area</h1>
                <ul>
                    <li className="m-2">
                        <h2 className="text-2xl">Fairfield Inn & Suites Columbus Grove City</h2>
                        <p>Address: 1722 Buckeye Pl, Grove City, OH 43123</p>
                        <p>Phone: (614) 808-8200</p>
                    <a href="https://www.marriott.com/en-us/hotels/cmhfg-fairfield-inn-and-suites-columbus-grove-city/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target="_blank">
                    <button 
                        type="button"
                        className="hover:bg-white bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue">
                        Fairfield Inn & Suites
                    </button></a>
                    </li>
                    <li className="m-2">
                        <h2 className="text-2xl">Courtyard Columbus Grove City</h2>
                        <p>Address: 1668 Buckeye Pl, Grove City, OH 43123</p>
                        <p>Phone: (614) 782-8292</p>
                    <a href="https://www.marriott.com/en-us/hotels/cmhcg-courtyard-columbus-grove-city/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" target="_blank">
                    <button 
                        type="button"
                        className="hover:bg-white bg-lighter-pink w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-navy-blue">
                        Courtyard
                    </button></a>
                    </li>
                </ul>
            </div>
            </div>
        </main>
    );
}