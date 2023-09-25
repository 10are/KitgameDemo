import React, { useState, useEffect } from 'react';
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
  music2: '/music/tren.mp3',
};
const StartButton = ({ onStart }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300"
        onClick={onStart}
      >
        Hikayeye Başla
      </button>
    </div>
  );
};

const ReadingBooks = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const [currentBook, setCurrentBook] = useState(importedBooks['book1.json']);
  const [currentMusic, setCurrentMusic] = useState(musicLibrary[currentBook.pages.backgroundMusic]);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);
  const [musicPermissionGiven, setMusicPermissionGiven] = useState(false);

  useEffect(() => {
    if (musicPermissionGiven && !musicPlaying) {
      playMusic();
    }
  }, [currentPage, musicPermissionGiven]);

  const handleStartButtonClick = () => {
    if (!musicPermissionGiven) {
      setMusicPermissionGiven(true);
    }
  };

  const handleOptionClick = (target) => {
    if (target.endsWith('.json') && importedBooks[target]) {
      const newBook = importedBooks[target];
      setCurrentBook(newBook);
      setCurrentPage('1');
      setCurrentMusic(musicLibrary[newBook.pages.backgroundMusic]);
      
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
        setMusicPlaying(false);
        setAudioElement(null);
      }
    } else {
      setCurrentPage(target);
    }
  };

  const currentPageData = currentBook.pages[currentPage];
  const backgroundImagePath = currentPageData.backgroundImage || "";

  const playMusic = () => {
    if (currentMusic) {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
      
      const newAudioElement = new Audio(currentMusic);
      newAudioElement.play();
      setAudioElement(newAudioElement);
      setMusicPlaying(true);
    }
  };

  return (
    <div className="book-reader" style={{ backgroundImage: `url(${backgroundImagePath})` }}>
      {!musicPermissionGiven && (
        <StartButton onStart={handleStartButtonClick} />
      )}
      {musicPermissionGiven && (
        <div className="text-box">
          <p>{currentPageData.content}</p>
          {currentPageData.options && currentPageData.options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option.target)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
      {musicPermissionGiven && currentMusic && musicPlaying && (
        <ReactAudioPlayer
          id="audio-player"
          src={currentMusic}
          autoPlay
        />
      )}
    </div>
  );
};

export default ReadingBooks;
