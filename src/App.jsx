import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";
import { useEffect, useState } from "react";
import useWindowSize from "./hooks/usewindowSize";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const windowSize = useWindowSize();

  console.log(notes);

  const addNote = (color) => {
    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 45),
      text: "",
      time: Date.now(),
      color,
    };

    setNotes([...notes, newNote]);
  };

  const updateNoteText = (id, text) => {
    // find the note with the id
    const note = notes.find((note) => note.id === id);

    // update the note
    note.text = text;

    // update the notes array
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          text,
        };
      } else {
        return note;
      }
    });

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      {windowSize.width < 768 && (
        <div className="flex justify-center items-center flex-col w-full">
          <h1 className="text-5xl font-bold my-8">Your Notes</h1>
          <div className="App w-full h-[80vh] flex justify-center">
            <NoteContainer
              notes={notes}
              deleteNote={deleteNote}
              updateNoteText={updateNoteText}
            />
            <Sidebar addNote={addNote} />
          </div>
        </div>
      )}
      {windowSize.width >= 768 && (
        <div className="App flex flex-col px-10">
          <h1 className="text-5xl font-bold mt-8">Your Notes</h1>
          <div className="App h-[100vh] flex justify-center">
            <Sidebar addNote={addNote} />
            <NoteContainer
              notes={notes}
              deleteNote={deleteNote}
              updateNoteText={updateNoteText}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
