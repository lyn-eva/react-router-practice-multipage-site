import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { destinations } from "../Data";

function Planet() {
  const parem = useParams()

  return (
    <div className="mt-16 w-10/12 mx-auto text-white text-center text-2xl font-barlow-condensed mb-16">
      <div className="w-4/5 mx-auto">
        <img src={destinations[parem.id].images.webp} alt={destinations[parem.id].name} />
      </div>

      <div className="mt-12">
        <h2 className="font-bellefair text-6xl mt-8">{destinations[parem.id].name}</h2>
        <p className="font-barlow text-[1.1rem] text-fog mt-8">
          {destinations[parem.id].description}
        </p>
      </div>
      <hr className="my-8" />
      <div className="">
        <div>
          <p className="text-fog font-light text-[1.2rem] mb-3 tracking-wider">
            AVG. DISTANCE
          </p>
          <span className="font-bellefair text-4xl">
            {destinations[parem.id].distance}
          </span>
        </div>
        <div className="mt-8">
          <p className="text-fog font-light text-[1.2rem] mb-3 tracking-wider">
            EST. TRAVEL TIME
          </p>
          <span className="font-bellefair text-4xl">
            {destinations[parem.id].travel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Planet;
