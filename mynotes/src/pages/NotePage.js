import React, { useState, useEffect } from "react";
import ListItems from "../components/ListItems";
import notesData from "../assets/data.js";

const NotePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Set the notes data from data.json when the component mounts
    setNotes(notesData);
  }, []);

  return (
    <div>
      <h3>Note page</h3>
      {notes.map((note) => (
        <ListItems key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotePage;
