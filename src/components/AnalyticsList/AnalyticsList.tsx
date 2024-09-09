import React from "react";
import s from "./AnalyticsList.module.scss";
import AnalyticsItem from "@/components/AnalyticsList/AnalyticsItem/AnalyticsItem";
import { analyticsList } from "@/data";

const AnalyticsList = () => {
  return (
    <div className={s.wrapper}>
      {analyticsList.map((item) => (
        <AnalyticsItem img={item.img} title={item.title} key={item.id} />
      ))}
    </div>
  );
};

export default AnalyticsList;
