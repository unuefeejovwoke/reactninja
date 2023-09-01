import notes from "../assets/data";
import ListItems from "../components/ListItems";

const NotePage = () => {
    return ( 
        <div>
            <h3>Note page</h3>
            {notes.map((note, index) =>(
                <ListItems key={index} note={note}/>
            ))}
        </div>
     );
}
 
export default NotePage;