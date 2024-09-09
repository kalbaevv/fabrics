import React from "react";
import s from "./ModesItem.module.scss";
import { IModesItem } from "@/types/types";

const ModesItem = ({ title, img }: IModesItem) => {
  return (
    <div className={s.wrapper}>
      <img alt={"mode-item"} src={img} />
      <span className={s.title}>{title}</span>
    </div>
  );
};

export default ModesItem;
