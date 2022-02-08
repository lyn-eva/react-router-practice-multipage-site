import { useParams } from "react-router";
import { crew } from "../Data";

function Biography() {
  const { id } = useParams();

  return (
    <main className="mx-auto mt-8 w-11/12">
      <div className="mx-auto w-11/12 max-w-sm">
        <img className="w-full" src={crew[id].images.webp} alt="astronant" />
        <hr />
      </div>
      <div className="mt-8 mb-8">
        <div className="font-bellefair">
          <h3 className="text-[1rem] text-fog">{crew[id].role}</h3>
          <h2 className="text-lg">{crew[id].name}</h2>
        </div>
        <p className="mt-3 text-[1rem] font-light leading-7">{crew[id].bio}</p>
      </div>
    </main>
  );
}

export default Biography;
