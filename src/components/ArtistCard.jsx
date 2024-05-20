import img1 from "../assets/events_img_1.svg";
import img2 from "../assets/events_img_2.svg";
import img3 from "../assets/events_img_3.svg";

const ArtistCard = () => {
  return (
    <div className="pt-2 flex items-center scale-75 lg:scale-100 ">
      <img className="" src={img1} alt="" />
      <img className="scale-x-110" src={img2} alt="" />
      <img className="" src={img3} alt="" />
    </div>
  );
};

export default ArtistCard;
