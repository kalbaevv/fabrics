"use client";
import React from "react";

import s from "./SecondaryHeader.module.scss";
import { useRouter } from "next/navigation";

const SecondaryHeader = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/");
  };
  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleButtonClick}>
        <img alt="icon-left" src={"/icons/arrow-left.svg"} />
      </button>
      <h3 className={s.title}>Learning</h3>
    </div>
  );
};

export default SecondaryHeader;
