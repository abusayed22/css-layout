"use client"
import Link from "next/link";
import React, { useState } from "react"
import { FaAppleWhole, FaArrowLeftLong, FaArrowRightLong, FaArrowsSpin, FaBacterium, FaBandcamp, FaHatCowboy } from "react-icons/fa6";

const Sidebar = (props) => {
  const [isCollpas,setIsCollpas] = useState(false)
  const menuData= [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHatCowboy size={30} style={{padding:'2px'}}/>
  },
  {
    name: "About",
    path: "/",
    icon: <FaBacterium size={30} style={{padding:'2px'}}/>
  },
  {
    name: "Sales",
    path: "/",
    icon: <FaBandcamp size={30} style={{padding:'2px'}}/>
  },
  {
    name: "Customer",
    path: "/",
    icon: <FaArrowsSpin size={30} style={{padding:'2px'}}/>
  },
  {
    name: "Products",
    path: "/",
    icon: <FaAppleWhole size={30} style={{padding:'2px'}}/>
  },
  ];

  const sidbarToggled = () => {
    setIsCollpas((prev) => !prev)
  }


  return (
    <div className={`sidebar ${isCollpas ? "collapse" : ""}`}>
      <div className="main_logo">
        <img src="/next.svg" alt="logo" />
      </div>
      <div className="sub_sidebar">
      {
        menuData.map(item => (
          <Link className="menu_item" key={item.name} href={item.path}>
            {item.icon}
            {isCollpas ? "" : item.name }
          </Link>
        ))
      }
      </div>
      <div className="collphas_btn" onClick={sidbarToggled}>
        {
          isCollpas? <FaArrowRightLong color="gray"/> : <FaArrowLeftLong color="gray"/>
        }
      </div>
    </div>
  )
};

export default Sidebar;
