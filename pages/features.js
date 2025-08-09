import React from "react";
import MainComp from "../Components/mainComp";
import Home from "../styles/Home.module.css";

import styles from "../styles/Features.module.css";
import Testimonial from "../Components/Testimonial";
import Head from "next/head";
import { MdNotificationsActive } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { IoLayers } from "react-icons/io5";
import { FaHourglassStart } from "react-icons/fa6";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { FaFileArchive } from "react-icons/fa";
import { SiGuilded } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";

const features = () => {
  const data = [
    { icon: <MdNotificationsActive />, h3: "Notificatons" },
    { icon: <SiGooglemessages />, h3: "Messeging" },
    { icon: <IoLayers />, h3: "Layers" },
    { icon: <FaHourglassStart />, h3: "Startup" },
    { icon: <HiMiniPresentationChartBar />, h3: "Presentaton" },
    { icon: <FaFileArchive />, h3: "Archiving" },
    { icon: <SiGuilded />, h3: "Guidelines" },
    { icon: <FaShoppingCart />, h3: "Shope" },
  ];
  return (
    <div>
      <Head>
        <title>Features</title>
      </Head>
      <MainComp head={"Features"} />
      <div className="container">
        <div className={styles.feat_cont}>
          {data.map((item, i) => (
            <div className={Home.box} key={i}>
              <div className={Home.icon}>{item.icon}</div>
              <h3>{item.h3}</h3>
              <p className={Home.p}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          ))}
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default features;
