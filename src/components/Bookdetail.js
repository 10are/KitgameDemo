import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini içe aktarın

function Bookdetail() {
  const book = {
    title: "Siyah Güneş",
    author: "Onur Yılmaz",
    rating: 5,
    image: "/images/indir2.jpeg",
    description: "Kitap detayları buraya gelebilir."
  };

  return (
    <div className="bg-black text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">{book.title}</h2>
          <p className="text-gray-400">Yazar: {book.author}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">
              {Array.from({ length: book.rating }, (_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </span>
            <span className="text-gray-400 ml-2">({book.rating})</span>
          </div>
          <p className="mt-4">{book.description}</p>
          <Link to="/Detailss">
            <button
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
            >
              İzlemeye Başla
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bookdetail;
