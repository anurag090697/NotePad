/** @format */
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Note(props) {
  return (
    <>
      <div className={`w-full m-auto overflow-hidden flex items-center gap-3 justify-between p-4 ${props.isActive ? "bg-green-200" : ""}`}>
        <h2 className='text-3xl'>{props.data.title}</h2>
        <div className='flex gap-2'>
          <button
            onClick={() => props.deleteNote(props.index)}
            className='text-2xl text-gray-700 hover:text-red-600'
          >
            <MdDelete />
          </button>
          <button
            onClick={() => props.changeCurrent(props.index)}
            className='text-2xl text-gray-700 hover:text-green-600'
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <hr className='border-black' />
    </>
  );
}

export default Note;
