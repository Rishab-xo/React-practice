import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  
  const sbumitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);
    
    setTitle("");
    setDetails("");
  };
  
  const deleteNotes = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen w-full lg:flex bg-black text-white ">
      <form
        action=""
        onSubmit={(e) => {
          sbumitHandler(e);
        }}
        className="flex lg:w-1/2 items-start p-10 gap-6 flex-col"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* First Input for heading */}
        <input
          type="text"
          className="p-5 w-4/5 border border-cyan-400 shadow-[0_0_20px_#22d3ee] px-8 py-3 rounded-2xl pt-4 pl-6 text-white"
          placeholder="Enter notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* Detailed vala input */}
        <textarea
          type="text"
          className=" h-40 p-7 w-4/5 border border-cyan-200 shadow-[0_0_20px_#22d3ee] placeholder:text-zinc-500 rounded-2xl pt-4 pl-6"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white w-4/5 text-black px-3 py-2 rounded-b-full active:bg-gray-400 active:scale-95">
          Add Note
        </button>
      </form>

      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between items-start flex-col relative h-40 w-40 bg-cover bg-centerr px-3 py-5 pb-1 rounded-2xl text-black bg-[url('https://simg.nicepng.com/png/small/93-938738_note-paper-png-download-handwriting.png')]"
              >
                <h3 className="leading-tight text-xl font-bold text-black">
                  {elem.title}
                </h3>
                <p className="mb-4 leading-tight font-medium text-gray-700">
                  {elem.details}
                </p>
                <button onClick={()=>{
                  deleteNotes(idx)
                }} className="w-full bg-red-600 text-xs rounded py-1 font-bold active:scale-95 text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
