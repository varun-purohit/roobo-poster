import { useState, useEffect, useRef } from "react";
import Crousel1 from "../assets/Event_Crousel_1.svg";
import Crousel2 from "../assets/Event_Crousel_2.svg";
import Crousel3 from "../assets/Event_Crousel_3.svg";
import Crousel4 from "../assets/Event_Crousel_4.svg";

const Carousel = () => {
  const images = [
    { id: "img1", symbol: `${Crousel1}` },
    { id: "img2", symbol: `${Crousel2}` },
    { id: "img3", symbol: `${Crousel3}` },
    { id: "img4", symbol: `${Crousel4}` },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlideShow();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startSlideShow = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);
  };

  return (
    <>
      <section className="fixed top-44 h-auto ">
        <div className="overflow-hidden flex justify-center items-center  ">
          <div
            className=" flex transition-transform duration-300 ease-in-out mr-[700px]  "
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${images.length * 5.5}%`,
            }}
          >
            {images.map((image, idx) => (
              <div
                key={idx}
                className={` min-w-[100%] w-3/4 h-3/4 flex-shrink-0 text-9xl   ${
                  idx === index
                    ? "opacity-100 brightness-100"
                    : "opacity-50 brightness-50 "
                } `}
              >
                <img src={image.symbol} alt="" className=" px-2  " />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
