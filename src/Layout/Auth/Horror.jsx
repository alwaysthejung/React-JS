import  { useEffect, useState } from 'react';
import apiService from '../../services/horror.service'; // Pastikan ini mengarah ke file yang benar
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const App = () => {
  const [movies, setMovies] = useState([]); // Inisialisasi movies sebagai array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.fetchData()
      .then(data => {
        if (data && data.result) {
          console.log("Data from API:", data.result);
          setMovies(data.result); // Memperbarui state movies
          setLoading(false); // Mengubah state loading menjadi false setelah data diterima
        }
      })
      .catch(error => {
        console.error("API call failed:", error);
        setError(error.toString()); // Menampilkan pesan error
        setLoading(false); // Mengubah state loading menjadi false ketika ada error
      });
  }, []); // Dependensi kosong berarti efek ini hanya berjalan sekali setelah komponen ter-mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>HORROR</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg max-w-xs mx-auto flex flex-col items-center">
            <img
              src={movie.imageUrl || '/path/to/default/image.jpeg'}
              alt={`Movie Poster ${movie.title}`}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold text-white mt-2 truncate text-center">{movie.title}</h3>
            <p className="text-sm text-gray-400 truncate text-center">{movie.genres?.join(', ') || 'No genres available'}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
