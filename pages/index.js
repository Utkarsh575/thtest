import Satelite from "../components/Satelite";

export default function Home() {
  return (
    <div>
      <div className="grid  md:grid-cols-3  ">
        <div className="col-span-2 bg-yellow-200 text-3xl font-carattere ">
          SOME TEXT 
        </div>
        <div>
          <Satelite />
        </div>
      </div>
    </div>
  );
}
