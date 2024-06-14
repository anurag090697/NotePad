/** @format */
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Note(props) {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <button>
        <MdDelete />
      </button>
      <button>
        <FaRegEdit />
      </button>
    </div>
  );
}

export default Note;
