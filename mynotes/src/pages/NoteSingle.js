import notes from "../assets/data";

const NoteSingle = ({match}) => {
    let noteId = match.params.id

    let note = notes.find(note => note.id == noteId)
    return ( 
        <div>
            <p>{note?.body}</p>
        </div>
     );
}
 
export default NoteSingle;