import React from "react";
import s from "./ModesList.module.scss";
import ModesItem from "@/components/ModesList/ModesItem/ModesItem";
import { modelsList } from "@/data";

const ModesList = () => {
  return (
    <div className={s.modesListContainer}>
      {modelsList.map((item) => (
        <ModesItem title={item.title} img={item.img} key={item.id} />
      ))}
    </div>
  );
};

export default ModesList;
