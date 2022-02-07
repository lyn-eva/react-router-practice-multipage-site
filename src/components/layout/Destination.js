import React from "react";
import { destinations } from "../../Data";

function Destination() {
  return (
    <div className="text-white text-center text-2xl font-barlow-condensed mb-16 mt-8">
      <h1>
        <span className="text-fog mr-4">01</span> PICK YOUR DESTINATION
      </h1>
      <div className="mt-16 w-10/12 mx-auto">
        <div className="w-4/5 mx-auto">
          <img src={destinations[0].images.webp} alt={destinations[0].name} />
        </div>
        <div className="mt-10">
          <nav>
            <ul className="flex justify-between gap-3 text-[1.2rem] tracking-widest">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </nav>
          <h2 className="font-bellefair text-6xl mt-8">
            {destinations[0].name}
          </h2>
          <p className='font-barlow text-[1.1rem] text-fog mt-8'>{destinations[0].description}</p>
        </div>
        <hr className='my-8'/>
        <div className=''>
          <div>
            <p className='text-fog font-light text-[1.2rem] mb-3 tracking-wider'>AVG. DISTANCE</p>
            <span className='font-bellefair text-4xl'>{destinations[0].distance}</span>
          </div>
          <div className='mt-8'>
            <p className='text-fog font-light text-[1.2rem] mb-3 tracking-wider'>EST. TRAVEL TIME</p>
            <span className='font-bellefair text-4xl'>{destinations[0].travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
