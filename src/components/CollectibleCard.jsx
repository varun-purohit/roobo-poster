import Crousel2 from "../assets/Event_Crousel_2.svg";

const CollectibleCard = () => {
  return (
    <div className="pt-5 text-black">
      <div className="bg-[#B9A0FF] w-44 h-56 rounded-lg px-2 py-2">
        <div className="flex justify-between  ">
          <div className="px-4 py-[1px] bg-black text-white rounded-[30px] text-[10px] vertical ">
            2024
          </div>
          <div className="text-[10px]">
            By <span>Pablo</span>
          </div>
        </div>
        <div className="text-center pt-3 text-sm ">
          <p>Collectible Name</p>
        </div>
        <div className="pt-3 ">
          <div className="">
            <img className=" w-full h-36 rounded-lg " src={Crousel2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectibleCard;
