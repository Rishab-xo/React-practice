import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1)

  const clickHandler = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setData(response.data);
    console.log(response.data);
  };
  
  useEffect(() => {
    clickHandler()
  }, [index])
  

  let printData = "No data available";

  if (data.length > 0) {
    printData = data.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url}>
            <div className="h-50 w-50 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">
      <h1 className="flex items-center justify-center font-bold text-4xl">images are Loading...</h1>
      <div className="flex flex-wrap gap-10 p-7 mt-10">{printData}</div>
      <div className="flex justify-center gap-10 mb-15 mt-15 ">
        <button className="bg-amber-600 text-white font-bold text-2xl rounded cursor-pointer px-4 py-1 active:scale-95"
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}>
        Prev</button>
        <h4 className="text-2xl">Page {index}</h4>
        <button className="bg-amber-600 text-white font-bold text-2xl rounded cursor-pointer px-4 py-1 active:scale-95"
        onClick={()=>{
          setIndex(index+1)
        }}>
        Next</button>
      </div>
    </div>
  );
};

export default App;
