import React, { useState, useEffect } from 'react';
import Page from './Page';
import ReactAudioPlayer from 'react-audio-player';
import '../style/bookreader.css';

const importAll = (r) => {
  let files = {};
  r.keys().forEach((item) => {
    files[item.replace('./', '')] = r(item);
  });
  return files;
};

const importedBooks = importAll(require.context('../data', false, /\.json$/));

const musicLibrary = {
  music1: '/music/rain.mp3',
  music2: '/music/test.mp3',
};

const BookReader = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const [currentBook, setCurrentBook] = useState(importedBooks['book1.json']);
  const [currentMusic, setCurrentMusic] = useState(musicLibrary[currentBook.pages.backgroundMusic]);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleOptionClick = (target) => {
    if (target.endsWith('.json') && importedBooks[target]) {
      const newBook = importedBooks[target];
      setCurrentBook(newBook);
      setCurrentPage('1');
      setCurrentMusic(musicLibrary[newBook.pages.backgroundMusic]);
      setMusicPlaying(false);
    } else {
      setCurrentPage(target);
    }
  };

  const { content, options } = currentBook.pages[currentPage];

  const playMusic = () => {
    if (currentMusic) {
      const audioElement = new Audio(currentMusic);
      audioElement.play();
      setMusicPlaying(true);
    }
  };

  return (
    <div className="book-reader">
      <div className="text-box">
        <Page
          content={content}
          options={options}
          handleOptionClick={handleOptionClick}
        />
      </div>
      {!musicPlaying && (
        <div className="music-button" onClick={playMusic}>
          Müziği Başlat
        </div>
      )}
      {currentMusic && musicPlaying && (
        <ReactAudioPlayer
          id="audio-player"
          src={currentMusic}
          autoPlay
        />
      )}
    </div>
  );
};

export default BookReader;
