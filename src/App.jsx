/** @format */

import { useState } from "react";
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

  const [nowEditing, setNowEditing] = useState(0);
  const changeCurrent = (index) => {
    setNowEditing(index);
  };
  const modifyCurrentNote = (str) => {
    let tm = [...notesArr];
    tm[nowEditing].content = str;
    tm[nowEditing].title = str.split("\n")[0];
    setNotesArr(tm);
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
    console.log("hii");
    let tm = [...notesArr];
    tm.splice(idx, 1);
    setNotesArr(tm);
  };

  return (
    <div className='container bg-gray-700'>
      <section className='flex h-dvh gap-2'>
        <div className='w-96 bg-blue-200 flex flex-col gap-4 items-center '>
          <div className='flex justify-around items-end p-2 w-full'>
            <h1 className='text-4xl font-medium'>Notes</h1>
            <button
              className='text-3xl text-green-600 hover:text-green-500'
              onClick={addNote}
            >
              <IoMdAddCircle />
            </button>
          </div>
          <div className='w-full px-4'>
            {notesArr.map((ele, index) => (
              <>
                <Note
                  data={ele}
                  key={index}
                  index={index}
                  deleteNote={deleteNote}
                  changeCurrent={changeCurrent}
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
              notesArr[nowEditing].content}
            height='100%'
          />
        </div>
      </section>
    </div>
  );
}

export default App;
