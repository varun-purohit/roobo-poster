/* eslint-disable react/prop-types */

import { MdOutlineLocationOn } from "react-icons/md";
import { collectionsData, eventsData } from "../Data/data";
import { LuAlarmClock } from "react-icons/lu";

import CollectibleCard from "./CollectibleCard";
import Logo from "./Logo";
import Background from "./Background";
import ToggleButton from "./ToggleButton";
import MiddleStrip from "./MiddleStrip";
import ArtistCard from "./ArtistCard";

const Poster = ({ clicked, setClicked }) => {
  const { mainHeading, eventName, eventDesc, artistHeading, qr, eventButton } =
    eventsData;

  const {
    collectionMainHeading,
    collectionName,
    collectiblesImg,
    collectionDesc,
    collectionButton,
  } = collectionsData;

  return (
    <div className="h-screen font-lexend flex w-full ">
      {/* Left Column */}
      <div className="col-span-7 min-w-[57.5%] text-white px-4 pt-2">
        <Logo />
        <Background />
        <ToggleButton clicked={clicked} setClicked={setClicked} />
      </div>

      {/* Middle Column */}
      <div className="min-w-[6.5%] text-black z-10 bg-[#B9A0FF] h-[100%] overflow-y-auto">
        <MiddleStrip />
      </div>

      {/* Right Column */}

      <div
        className={`min-w-[36%] relative text-white pt-10 ${
          clicked === "eventClicked" ? "px-9" : "px-14"
        } z-10 h-full bg-black transition-all duration-700`}
      >
        <div className="font-bold text-[26px] max-w-72">
          <h2 className="">
            {" "}
            {clicked === "eventClicked"
              ? `${mainHeading}`
              : `${collectionMainHeading}`}
          </h2>
        </div>
        <div className="pt-8">
          <h1 className="font-bold text-[54px]">
            {clicked === "eventClicked" ? `${eventName}` : `${collectionName}`}
          </h1>
        </div>
        <div className="pt-3">
          <p className="font-semibold text-[22px] flex items-center">
            {clicked === "eventClicked" ? (
              <>
                <MdOutlineLocationOn className="h-7 w-7 mr-3" />
                Venue
                <LuAlarmClock className="h-7 w-7 ml-4 mr-2" />
                04/3/2024 @19:00
              </>
            ) : (
              "Live in Astrix"
            )}
          </p>
        </div>
        <div className="pt-1">
          <p className="font-semibold text-base max-w-80">
            {" "}
            {clicked === "eventClicked" ? `${eventDesc}` : `${collectionDesc}`}
          </p>
        </div>
        {clicked === "eventClicked" ? (
          <>
            {" "}
            <div className="pt-3">
              <h1 className="font-semibold text-[26px]">{artistHeading}</h1>
            </div>
            <ArtistCard />
          </>
        ) : (
          <>
            <div className="pt-5 flex items-center ">
              <div className="flex  ">
                {collectiblesImg.map((img, index) => (
                  <img
                    key={index}
                    className="h-10 w-10 rounded-[100%] "
                    src={img.symbol}
                    alt="image"
                  />
                ))}
              </div>
              <div className="ml-5">
                <p>22k people interested</p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <CollectibleCard />
              <CollectibleCard />
            </div>
          </>
        )}

        <div className="mt-8 flex justify-between">
          {clicked === "eventClicked" ? (
            <div>
              <img src={qr.symbol} alt="QR Image" />
            </div>
          ) : (
            <div></div>
          )}
          <div className="self-end text-2xl font-semibold">
            <button className="bg-[#FFCA5F] rounded-full px-4 py-2 text-black">
              {clicked === "eventClicked"
                ? `${eventButton}`
                : `${collectionButton}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
