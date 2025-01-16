"use client"
import React from "react";
import FilterButtons from "./sectionBtn";
import { sectionMath } from "./sectionMath";
import { sectionPhysics } from "./sectionPhysics";
import '../../styles/main/filter_section.scss'
import { usePathname } from "next/navigation";

const Filter: React.FC = () => {

    const pathname = usePathname(); // Получение текущего адреса
  const isMathPath = pathname.includes("math");
  const isPhysicsPath = pathname.includes("physics");

  const sections = isMathPath
  ? sectionMath
  : isPhysicsPath
  ? sectionPhysics
  : [];


  return (
    <div className="section-filter_wrapper">
       <FilterButtons
        sections={sections}/>
      </div>
  );
};

export default Filter;
