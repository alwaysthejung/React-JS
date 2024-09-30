import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PilihGenre() {
  return (
    <div>
    <Navbar/>
      <h1 className="text-center text-3xl font-bold mt-10 text-white">Genre</h1>
      
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 p-4">
      <Link to="/genre/adventure" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Adventure</Link>
      <Link to="/genre/fantasy" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Fantasy</Link>
      <Link to="/genre/animation" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Animation</Link>
      <Link to="/genre/drama" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Drama</Link>
      <Link to="/genre/horror" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Horror</Link>
      <Link to="/genre/action" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Action</Link>
      <Link to="/genre/comedy" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Comedy</Link>
      <Link to="/genre/history" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">History</Link>
      <Link to="/genre/western" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Western</Link>
      <Link to="/genre/thriller" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Thriller</Link>
      <Link to="/genre/crime" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Crime</Link>
      <Link to="/genre/documentary" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Documentary</Link>
      <Link to="/genre/scienceFiction" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Science Fiction</Link>
      <Link to="/genre/mystery" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Mystery</Link>
      <Link to="/genre/music" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Music</Link>
      <Link to="/genre/romance" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Romance</Link>
      <Link to="/genre/family" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Family</Link>
      <Link to="/genre/war" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">War</Link>
      <Link to="/genre/news" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">News</Link>
      <Link to="/genre/reality" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Reality</Link>
      <Link to="/genre/talkShow" className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-lg text-white">Talk Show</Link>
      </div>


      <Footer/>
    </div>
  );
}
