/* eslint-disable react/prop-types */
const ToggleButton = ({ clicked, setClicked }) => {
  //   const [clicked, setClicked] = useState("eventClicked");

  return (
    <div className="bg-[#282B30]  max-w-80 w-full rounded-[30px] mt-16 z-20 ">
      <div className=" relative ">
        <div
          className={`absolute h-full  transiton-all duration-700 bg-[#484E56] rounded-[30px] ${
            clicked === "eventClicked"
              ? "left-0 w-[42%]"
              : "left-[41.5%] w-[58%]"
          } `}
        ></div>
        <button
          onClick={() => {
            console.log("events");
            setClicked("eventClicked");
          }}
          className="px-10 py-3 text-center relative"
        >
          Events
        </button>
        <button
          onClick={() => setClicked("collectionClicked")}
          className="px-10 py-3 text-center relative"
        >
          Collections
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
