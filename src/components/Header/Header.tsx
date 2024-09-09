import React from "react";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.header}>
      <h2 className={s.headerTitle}>Ray Driving Theory</h2>
      <div className={s.iconsWrapper}>
        <div className={s.iconsWrapperItem}>
          <img alt="icon" src="/icons/crown.svg" />
        </div>
        <div className={s.iconsWrapperItem}>
          <img alt="icon" src={"/icons/fire.svg"} />
          <span>13</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
