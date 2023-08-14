import "./NoteContainer.scss";
import Note from "../Note/Note";

import React from "react";
import useWindowSize from "../../hooks/usewindowSize";



const NoteContainer = ({ notes, deleteNote, updateNoteText }) => {
  const windowSize = useWindowSize();

  const reverseNotesArray = [...notes].reverse();
  return (
    <>
      {reverseNotesArray.length === 0 && windowSize.width >= 768 && (
        <div className="flex justify-center items-center flex-col w-full h-full mp-[18px]">
          <h1 className="text-8xl font-bold text-gray-400 text-center">No Notes found</h1>
          <p className="text-2xl font-bold text-gray-400">
            Click on the + icon to add a note
          </p>
        </div>
      )}
      {reverseNotesArray.length === 0 && windowSize.width < 768 && (
        <div className="flex justify-center items-center px-5 flex-col w-full h-full text-center">
          <h1 className="text-5xl font-bold text-gray-400 text-center">No Notes found</h1>
          <p className="text-2xl font-bold text-gray-400">
            Click on the + icon to add a note
          </p>
        </div>
      )}
      {reverseNotesArray.length > 0 && windowSize.width < 768 && (
        <div className="notes-container">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 notes-container_notes custom-scrollbar">
            {reverseNotesArray?.map((note, index) => {
              return (
                <Note
                  key={index + "" + notes.id + "" + notes.time}
                  id={note.id}
                  text={note.text}
                  time={note.time}
                  color={note.color}
                  deleteNote={deleteNote}
                  updateNoteText={updateNoteText}
                />
              );
            })}
          </div>
        </div>
      )}

      {reverseNotesArray.length > 0 && windowSize.width >= 768 && (
        <div className="container pb-20 pt-10 notes-container">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 notes-container_notes custom-scrollbar">
            {reverseNotesArray?.map((note, index) => {
              return (
                <Note
                  key={index + "" + notes.id + "" + notes.time}
                  id={note.id}
                  text={note.text}
                  time={note.time}
                  color={note.color}
                  deleteNote={deleteNote}
                  updateNoteText={updateNoteText}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default NoteContainer;
