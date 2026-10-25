import { memo } from "react";

// Title:   Top header element
/*
 ^TEST:  It contains several elements, including the main icon, 
 ^ pages with login and registration options.

 TODO: Icon + Page Link + Button 

*/

const Header = () => {
  return (
    <header className="header flex justify-between items-center !px-4 !py-4">
      {" "}
      {/* Icons */}
      <div
        style={{ boxShadow: "0 0 4px inset rgba(0 0 0 / 20%)" }}
        className="header_icon bg-orange-800 flex flex-col items-end gap-0.5 cursor-pointer  !p-2 inset-shadow-2xs rounded-lg">
        <div
          style={{ borderRadius: "0 3px 0 5px" }}
          className="first w-[25px] h-[7px] bg-orange-200"></div>
        <div
          style={{ borderRadius: "5px 0 3px 0" }}
          className="scend w-[25px] h-[7px] bg-orange-200"></div>
        <div style={{
          borderRadius: "0 4px 0 4px"
        }} className="therd w-[60%] h-[7px] bg-orange-200 flex justify-end items-end ml-auto"></div>
      </div>
      {/* Pages - Link */}
      <ul className="header_pages flex justify-center items-center gap-10 font-medium text-lg capitalize bg-slate-950 !px-8 !py-2 rounded-4xl shadow-xs ">
        <li>
          <a href="#">product</a>
        </li>
        <li>
          <a href="#">pricing</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">privacy policy</a>
        </li>
        {/* <li>
          <a href="#">Contact us</a>
        </li> */}
      </ul>
      <div className="header_btn flex gap-3 text-lg font-medium">
        <button>sgin in</button>
        <button>Contact</button>


      
      </div>
    </header>
  );
};

export default memo(Header);
