import React, { useEffect, useState } from "react";

import "./Note.scss";

const Note = ({ id, text, time, color, deleteNote, updateNoteText }) => {
  const [noteText, setNoteText] = useState("");
  useEffect(() => {
    setNoteText(text);
  }, [text]); 

  const formatDate = (value) => {
    const date = new Date(value);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate(); 
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  }

  return (
    <div
      className={`w-full h-96 flex flex-col justify-between dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 note`}
      style={{
        backgroundColor: color.includes("#") ? color.toLowerCase() : color,
      }}
    >
      <textarea
        className="peer block min-h-[auto] w-full h-[90%] rounded bg-transparent px-4 py-[0.48rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 note_text"
        id="exampleFormControlTextarea1"
        rows="3"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
        onMouseLeave={() => {
          updateNoteText(id, noteText);
        }}
      ></textarea>
      <div className="px-4 py-2">
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm h-8 flex items-center">{formatDate(time)}</p>
          <div className="note_delete_icon">
            <div
              className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center cursor-pointer"
              onClick={() => {
                deleteNote(id);
              }}
            >
              <svg
                width="359"
                height="362"
                viewBox="0 0 359 362"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M359 181C359 280.964 278.635 362 179.5 362C80.3649 362 0 280.964 0 181C0 81.0365 80.3649 0 179.5 0C278.635 0 359 81.0365 359 181Z"
                  fill="black"
                />
                <path
                  d="M209 103V84C209 78.4772 204.523 74 199 74H148C142.477 74 138 78.4772 138 84V103"
                  stroke="white"
                  strokeWidth="10"
                />
                <path
                  d="M95 108H263C268.523 108 273 112.477 273 118V124C273 129.523 268.523 134 263 134H179H95C89.4772 134 85 129.523 85 124V118C85 112.477 89.4772 108 95 108Z"
                  stroke="white"
                  strokeWidth="10"
                />
                <path
                  d="M95 139L110.898 274.86C111.841 282.922 118.672 289 126.789 289H230.643C238.735 289 245.553 282.958 246.527 274.925L263 139"
                  stroke="white"
                  strokeWidth="10"
                />
                <rect
                  x="0.558224"
                  y="0.451059"
                  width="4.92444"
                  height="83.8714"
                  rx="2.46222"
                  transform="matrix(0.995888 -0.090588 0.120559 0.992706 132.6 165.083)"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="175.5"
                  y="166.5"
                  width="5"
                  height="83"
                  rx="2.5"
                  fill="white"
                  stroke="white"
                />
                <rect
                  x="0.437664"
                  y="0.541647"
                  width="4.92444"
                  height="83.8714"
                  rx="2.46222"
                  transform="matrix(0.995888 0.090588 -0.120559 0.992706 219.333 165.099)"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
