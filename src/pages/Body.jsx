import { useState } from "react";
import Crousel from "../components/Crousel";
import Poster from "../components/Poster";

const Body = () => {
  const [clicked, setClicked] = useState("eventClicked");
  return (
    <div className="h-screen">
      <Poster clicked={clicked} setClicked={setClicked} />
      <Crousel />
    </div>
  );
};

export default Body;
