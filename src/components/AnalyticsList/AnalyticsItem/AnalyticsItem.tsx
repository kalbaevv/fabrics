import React from "react";
import s from "./AnalyticsItem.module.scss";
import { IAnalyticsItem } from "@/types/types";

const AnalyticsItem = ({ img, title }: IAnalyticsItem) => {
  return (
    <div className={s.wrapper}>
      <img className={s.img} alt={title} src={img} />
      <span className={s.title}>{title}</span>
    </div>
  );
};

export default AnalyticsItem;
