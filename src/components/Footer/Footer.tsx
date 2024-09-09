import React from "react";
import { footerList } from "@/data";
import FooterItem from "@/components/Footer/FooterItem/FooterItem";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      {footerList.map((item) => (
        <FooterItem title={item.title} img={item.img} />
      ))}
    </div>
  );
};

export default Footer;
