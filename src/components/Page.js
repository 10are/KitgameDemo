import React from 'react';

const Page = ({ content, options, handleOptionClick }) => {
  return (
    <div>
      <p>{content}</p>
      {options && options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option.target)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Page;