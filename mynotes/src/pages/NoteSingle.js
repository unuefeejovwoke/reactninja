import React, { useEffect, useState } from "react";
import notesData from "../assets/data.js";

const NoteSingle = ({ match }) => {
  const [note, setNote] = useState(null);
  const noteId = match.params.id;

  useEffect(() => {
    // Find the note with the matching ID from data.json
    const selectedNote = notesData.find((n) => n.id === parseInt(noteId));

    if (selectedNote) {
      setNote(selectedNote);
    }
  }, [noteId]);

  return (
    <div>
      <h2>Note Details</h2>
      {note ? (
        <div className="note-details">
          <h3>{note.body}</h3>
          <p>Last Updated: {note.updated}</p>
        </div>
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

export default NoteSingle;
