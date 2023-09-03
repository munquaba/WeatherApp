import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [location,setlocation]=useState("")
  const[weather,setWeather] =useState("")
  const getWeather = async() => {
    const api_key='20521ed14d64401ab73232152232808';
   const api_url=' http://api.weatherapi.com/v1/current.json?key='+api_key+'&q='+location
  if(location)
  {
    try{
   const res=await fetch(api_url)
   const data=await res.json()
   if(data)
   {
    console.log(data);
    const api_data={
      state:data.location.name,
      tempf:data.current.temp_f,
      tempc:data.current.temp_c,
    }
    setWeather(<div className="font-bold text-7xl">
    <div>
     {api_data.state}
    </div>
    <div class="degree">
     {api_data.tempf}°F
    </div>
    <div class="degree">  
     {api_data.tempc}<span><sup>°</sup></span>C
    </div>
    </div>)

   }
    }
    catch(err)
    {
      alert("Location not found")
    }
  }
  else{

  }
  }
   

  return (<div>
    <nav className="flex items-center justify-center py-4  w-full m-0 opacity-90">
      <div className="relative">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

        </div> */}
        <input
          className="block text-black rounded-lg opacity-60 pl-10 p-4"
          onChange={(e) => setlocation(e.target.value)}
          value={location}
          type="text"
          id="location"
          placeholder="Search"
        />
      </div>
      <button
        className=" block bg-transparent hover:bg-gray-200 text-white font-bold m-2 p-2.5 rounded-lg"
        onClick={getWeather}
        id="search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
</svg>
      </button>
    </nav>
    <div className="flex w-full p-20 justify-center">
<div className="w-full max-w-xs">
  <div className="mb-4">
    <div className="px-8 pt-6 pb-8 mb-4 text-white opacity-100">
{weather}
    </div>
  </div>
</div>
    </div>
    </div>
  );
}
