import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { details } from '../../services/searchbytitle.service';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from '../../components/partials/button';

export default function Preview() {

  const { original_title } = useParams();
  const location = useLocation();
  const { poster_path, overview, popularity, release_date } = location.state || {};

useEffect(() => {
  if(original_title){
        details(original_title, (data) => {
    console.log(data);
    });
  }
}, [original_title]);

return (
<>
    <Navbar />

    <div style={{ fontFamily: 'Merriweather' }}>
    <main className="container mx-auto py-10 bg-gray-950 text-white">
        <section className="flex flex-col md:flex-row gap-10  ">
            <div className="movie-poster w-full md:w-1/4">
            <img
                src={ `https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title || 'poster'}
              />
            </div>
            <div className="movie-info w-full md:w-2/3">
                <h2 className="text-4xl font-bold mb-4">{original_title}</h2>
                <p className="text-lg mb-2">{popularity} | {release_date} | 17+</p>
                <div className="tabs mb-4 space-x-4">
                    <Button text="Overview" color="bg-neutral-600"></Button>
                    <Button text="Trailers & More" color="bg-neutral-600"></Button>
                    <Button text="More Like This" color="bg-neutral-600"></Button>
                    <Button text="Details" color="bg-neutral-600"></Button>
                </div>
                <p className="mb-4">
                    {overview}
                </p>
                <ul className="list-none space-y-2">
                    <li><strong>Pemeran:</strong> Lee Min-ki, Kim Ji-won, Lee El, Son Seok-koo, dan Lee Ki-woo</li>
                    <li><strong>Penulis:</strong> Park Hae-young</li>
                    <li><strong>Genre:</strong> Roman, Drama, Melodrama, Biografi, Penggalan Kehidupan</li>
                </ul>
                <div className="flex mr-5 mt-5">
                    <a className="group relative inline-flex items-center overflow-hidden rounded bg-red-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                        href="/home">
                        <span className="absolute -start-full transition-all group-hover:start-4">
                            <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </span>
                        <span className="text-sm font-medium transition-all group-hover:ms-4"> Back </span>
                    </a>
                </div>
            </div>
        </section>
    </main>
    </div>

    <Footer />
</>
)
}
