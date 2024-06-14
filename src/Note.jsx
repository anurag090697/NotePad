/** @format */
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Note(props) {
  return (
    <>
      <div className='w-full m-auto overflow-hidden flex items-center gap-3'>
        <h2 className='text-3xl'>{props.data.title}</h2>
        <button onClick={() => props.deleteNote(props.index)}>
          <MdDelete />
        </button>
        <button
          onClick={() => props.changeCurrent(props.index)}
          className='text-2xl text-'
        >
          <FaRegEdit />
        </button>
      </div>
      <hr />
    </>
  );
}

export default Note;
