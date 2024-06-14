/** @format */

import { useState } from "react";
import "./App.css";
import MDEditor from "@uiw/react-md-editor";
import Note from "./Note.jsx";
import { IoMdAddCircle } from "react-icons/io";

function App() {
  const [note, setNote] = useState("");
  const [notesArr, setNotesArr] = useState([
    {
      title: "Enter Title Here",
      content: "Enter Content Here",
    },
  ]);

  function addNote() {
    setNotesArr([
      ...notesArr,
      {
        title: "# Enter Title Here",
        content: "Enter content here",
      },
    ]);
  }

  function deleteNote(idx) {
    let tm = [...notesArr];
    tm.slice(idx, 1);
    setNotesArr(tm);
  }

  return (
    <div className='container min-h-100dvh'>
      <section className='flex'>
        <div className="w-72">
          <div>
            <h1>Notes</h1>
            <button>
              <IoMdAddCircle />
            </button>
          </div>{" "}
          <div>
            {notesArr.map((ele, index) => {
              <Note
                data={ele}
                key={index}
                index={index}
                deleteNote={deleteNote}
              />;
            })}
          </div>
        </div>

        <div>
          <MDEditor onChange={setNote} value={note} height="100%"/>
        </div>
      </section>
    </div>
  );
}

export default App;
