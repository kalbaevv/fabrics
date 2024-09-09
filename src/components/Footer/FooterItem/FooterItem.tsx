import React from "react";
import s from "./FooterItem.module.scss";
import { HomeIcon } from "../../../../public/icons/HomeIcon";
import { IFooterItem } from "@/types/types";

const FooterItem = ({ img, title }: IFooterItem) => {
  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <HomeIcon />
      </div>
      <span className={s.title}>{title}</span>
    </div>
  );
};

export default FooterItem;
