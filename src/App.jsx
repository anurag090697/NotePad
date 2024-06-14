/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import MDEditor from "@uiw/react-md-editor";
import Note from "./Note.jsx";
import { IoMdAddCircle } from "react-icons/io";

function App() {
  // const [note, setNote] = useState("");
  const [notesArr, setNotesArr] = useState([
    {
      title: "# Enter Title Here",
      content: "** Enter Title here **",
    },
  ]);

  useEffect(() => {
    let tm = localStorage.getItem("notes");
    if (tm) {
      setNotesArr(JSON.parse(tm));
    }
  }, []);

  const [nowEditing, setNowEditing] = useState(0);
  const changeCurrent = (index) => {
    setNowEditing(index);
  };
  const modifyCurrentNote = (str) => {
    let tm = [...notesArr];
    tm[nowEditing].content = str;
    tm[nowEditing].title = str.split("\n")[0];
    setNotesArr(tm);
    localStorage.setItem("notes", JSON.stringify(tm));
  };

  const addNote = () => {
    // console.log("hiii");
    setNotesArr([
      ...notesArr,
      {
        title: "# Enter Title Here",
        content: "** Enter Title here **",
      },
    ]);
  };

  const deleteNote = (idx) => {
    if (notesArr.length > 1) {
      console.log("hii");
      let tm = [...notesArr];
      tm.splice(idx, 1);
      setNotesArr(tm);
      localStorage.setItem("notes", JSON.stringify(tm));
    }
  };

  return (
    <div className='container bg-gray-700'>
      <section className='flex h-dvh gap-2'>
        <div className='w-96 bg-blue-100 flex flex-col gap-4 items-center '>
          <hr className="border-gray-500 border-2 w-full"/>
          <div className='flex justify-around items-end px-2 py-1 w-full'>
            <h1 className='text-4xl font-medium text-indigo-700'>Notes</h1>
            <button
              className='text-4xl text-green-600 hover:text-green-500'
              onClick={addNote}
            >
              <IoMdAddCircle />
            </button>
          </div>
          <hr className="border-gray-500 border-2 w-full "/>
          <div className='w-full'>
            {notesArr.map((ele, index) => (
              <>
                <Note
                  data={ele}
                  key={index}
                  index={index}
                  deleteNote={deleteNote}
                  changeCurrent={changeCurrent}
                  isActive={nowEditing === index}
                />
              </>
            ))}
          </div>
        </div>

        <div className='grow '>
          <MDEditor
            onChange={(value) => modifyCurrentNote(value)}
            value={
              // notesArr[nowEditing].title + "\n" +
              notesArr[nowEditing].content
            }
            height='100%'
          />
        </div>
      </section>
    </div>
  );
}

export default App;
