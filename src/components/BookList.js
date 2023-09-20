import React from 'react';
import { Link } from 'react-router-dom'; 
import books from './books.json';

function BookList() {
  return (
    <div className="bg-black text-white p-4">
      <h2 className="text-1xl font-semibold">Kitap Listesi</h2>
      <div className="mt-8">
        {Object.entries(books).map(([category, booksInCategory]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {booksInCategory.map((book) => (
                <Link to={`/detail/${book.id}`} key={book.id}> 
                  <div className="bg-black rounded-md overflow-hidden shadow-md relative transform transition-transform hover:scale-110">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-32 sm:h-40 object-cover"
                    />
                    <div className="p-4 absolute inset-x-0 bottom-0 opacity-0 hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300 ease-in-out">
                      <h4 className="text-lg font-semibold mb-2 hover:text-blue-500 transition duration-300 ease-in-out">
                        {book.title}
                      </h4>
                      <p className="text-sm text-gray-400">Yazar: {book.author}</p>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-400 mr-2">
                          Puan:
                        </span>
                        {Array.from({ length: book.rating }, (_, i) => (
                          <i
                            key={i}
                            className="fas fa-star text-yellow-400"
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
