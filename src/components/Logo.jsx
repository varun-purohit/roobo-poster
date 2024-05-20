import logo from "../assets/Astrix_logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-x-3 items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="text-[#FFCA5F]">
        <h1 className="font-bold text-[40px]">Astrix.</h1>
      </div>
    </div>
  );
};

export default Logo;
