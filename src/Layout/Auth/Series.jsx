import React from 'react';
import Navbar from '../../components/Navbar';




const App = () => {


    return (
        <>
        <Navbar/>
    <section>
                    <h2 className="text-xl font-semibold text-white mb-4 border-l-4 border-red-600 pl-2 inline-block tracking-wide">
                        Drama Korea
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Movie Cards */}
                        {[...Array(11).keys()].map((index) => (
                            <div key={index} className="bg-gray-700 p-4 rounded-lg max-w-xs mx-auto flex flex-col items-center">
                                <img
                                    src={`/images/snowdrop.jpeg${index + 1}.jpeg`}
                                    alt={`Movie Poster ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-lg mb-2"
                               />
                                <h3 className="text-lg font-semibold text-white mt-2 truncate text-center">Title {index + 1}</h3>
                                <p className="text-sm text-gray-400 truncate text-center">(Genres)</p>
                            </div>
                        ))}
                    </div>
    </section>


        </>
        
    );
};

export default App;