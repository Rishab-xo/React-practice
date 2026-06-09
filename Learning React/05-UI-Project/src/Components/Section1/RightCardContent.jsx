import React from 'react'
import Arrow from "./Arrow";

const RightCardContent = (props) => {
  return (
    <div>
            <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between">
              <h2 className="bg-white rounded-full w-10 h-10 flex justify-center items-center text-2xl font-bold">
                {props.id+1}
              </h2>
              <div className="">
                <p className="text-lg leading-5 text-white mb-10 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                  modi esse dolor dicta non numquam Lorem
                </p>
                <div className="flex flex-row justify-between items-center ">
                  <button className="bg-blue-600 text-white font-semibold px-2.5 py-1.5 rounded-full tracking-wide">
                    {props.tag}
                  </button>
                  <button className="bg-blue-600 text-white px-1 py-1 rounded-full">
                    <Arrow />
                  </button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default RightCardContent