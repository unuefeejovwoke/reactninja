const ListItems = ({note}) => {
    return ( 
        <div className="notes-list-item">

            <h2>
              {note.body}
            </h2>
        </div>
     );
}
 
export default ListItems;