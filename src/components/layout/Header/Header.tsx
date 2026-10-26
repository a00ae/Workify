import { memo, useRef, useState } from "react";
import { RiMenu3Line } from "@remixicon/react";
import { useOnClickOutSide } from "@/hooks/useOnClickOutSide";

// Title:   Top header element
/*
 ^TEST:  It contains several elements, including the main icon, 
 ^ pages with login and registration options.

 TODO: Icon + Page Link + Button 

*/

const List = ({
  className = "",
  child = "",
}: {
  className?: string;
  child?: string;
}) => {
  
  return (
    <ul className={`flex gap-20  font-medium text-md capitalize ${className}`}>
      <li className="w-full">
        <a className={child} href="#">
          product
        </a>
      </li>
      <li className="w-full">
        <a className={child} href="#">
          pricing
        </a>
      </li>
      <li className="w-full">
        <a className={child} href="#">
          services
        </a>
      </li>
      <li className="w-full">
        <a className={child} href="#">
          privacy
        </a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutSide({ ref: menuRef, setOpen: setIsOpen, visible: isOpen });

  return (
    <header
      ref={menuRef}
      className="header relative flex justify-between gap-2 items-center flex-wrap !px-2 !py-2  lg:!px-8 lg:!py-4">
      {" "}
      {/* Icons / Logo */}
      <div
        style={{ boxShadow: "0 0 4px inset rgba(0 0 0 / 20%)" }}
        className="header_icon bg-orange-800 flex flex-col items-end gap-0.5 cursor-pointer !p-2 rounded-lg">
        <div
          style={{ borderRadius: "0 3px 0 5px" }}
          className="first w-6 h-1.75 bg-orange-200"></div>

        <div
          style={{ borderRadius: "5px 0 3px 0" }}
          className="scend w-6 h-1.75 bg-orange-200"></div>

        <div
          style={{ borderRadius: "0 4px 0 4px" }}
          className="therd w-[60%] h-1.75 bg-orange-200 flex justify-end items-end ml-auto"></div>
      </div>
      {/* 1. قائمة الشاشات الكبيرة (تظهر كـ Row) */}
      <div className="hidden lg:block bg-slate-950 !px-10 !py-3 rounded-4xl shadow-(--shadow-white)">
        <List className="justify-center items-center text-white gap-10" />
      </div>
      <div className="header_btn flex items-center gap-3 text-md font-medium">
        <button>Sign in</button>
        <button className="bg-orange-800 !px-2 !py-1 rounded-md shadow-(--shadow-white)">
          Contact
        </button>

        {/* زر القائمة للموبايل */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="menu lg:hidden !p-2 bg-slate-950 rounded-md shadow-(--shadow-white) cursor-pointer">
          <RiMenu3Line className="text-white" />
        </div>
      </div>
      {/* 2. قائمة الموبايل المنسدلة مع الـ Transition */}
      <div
        className={`w-full grid transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}>
        {/* <div className="overflow-hidden"> */}
        <div className="py-4 bg-slate-950 rounded-md overflow-hidden  mt-2 flex flex-col items-center shadow-(--shadow-white)">
          {/* نفس مكون List يُعاد استخدامه هنا ولكن بترتيب Column للموبايل */}
          <List
            className="flex-col  justify-start items-center !gap-1 text-white  w-full"
            child="block w-full text-center !py-4 hover:bg-(--hover) transition-(--transition-normall) "
          />
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
