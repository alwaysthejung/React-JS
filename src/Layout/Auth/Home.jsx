import { useEffect, useState } from "react";
import { getProducts } from "../../services/product.service";
import Navbar from "../../components/Navbar";
import { Video } from "../../services/video.service";
import { tvs as tvshow } from "../../services/tvshow.service";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  const [tvs, setTVs] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setMovies(data);
    });
  }, []);

  useEffect(() => {
    tvshow((data) => {
      setTVs(data);
    });
  }, []);

  useEffect(() => {
    Video((data) => {
      setVideos(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 space-y-12 bg-gray-950 pt-10">
        <div>
          <h1 className="font-bold text-white">Popular Movies</h1>
          <div className="flex gap-5 mt-2 overflow-auto no-scrollbar rounded-xl">
            {movies.map((video) => (
              <CardVideo key={video.id} props={video} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-white">TV Show</h1>
          <div className="flex gap-5 mt-2 overflow-auto no-scrollbar rounded-xl">
            {tvs.map((video) => (
              <CardTv key={video.id} props={video} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-white">Trending</h1>
          <div className="flex gap-5 mt-2 overflow-auto no-scrollbar rounded-xl">
            {videos.map((video) => (
              <CardVideo key={video.id} props={video} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const CardVideo = ({ props }) => {
  const { overview, title, poster_path, original_title, popularity, release_date } = props;
  return (
    <Link
      to={`/videos/preview/${original_title}`}
      state={{ poster_path, overview, popularity, release_date }}
      className="relative flex flex-col"
    >
      <div className="absolute inset-0 bg-center rounded-xl dark:bg-black"></div>
      <div className="group relative m-0 flex w-44 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 mt-5 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="text-xl font-bold text-white shadow-xl">{original_title}</h1>
        </div>
      </div>
    </Link>
  );
};

const CardTv = ({ props }) => {
  const { overview, title, poster_path, original_name, popularity } = props;
  return (
    <Link
      to={`/videos/preview/${original_name}`}
      state={{ poster_path, overview, popularity }}
      className="relative flex flex-col"
    >
      <div className="absolute inset-0 bg-center rounded-xl dark:bg-black"></div>
      <div className="group relative m-0 flex w-44 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 mt-5 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="text-xl font-bold text-white shadow-xl">{original_name}</h1>
        </div>
      </div>
    </Link>
  );
};
