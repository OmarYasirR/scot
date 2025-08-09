import Head from 'next/head';
import React from 'react'
import Price from '../Components/price'
import Talk from '../Components/Talk';
import features from '../styles/Features.module.css'
import Home from "../styles/Home.module.css";
import { FaInbox } from "react-icons/fa";
import { BsFillDisplayFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { FaFileArchive } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { SiShopee } from "react-icons/si";
import { RiGalleryFill } from "react-icons/ri";






const Pricing = () => {
  const data = [
    {icon: <FaInbox /> , h3: 'Out of The Box'},
    {icon: <BsFillDisplayFill />, h3: 'Great Display'},
    {icon: <FaVideo /> , h3: 'Video'},
    {icon: <RiGalleryFill />, h3: 'Gallery'},
    {icon: <HiMiniPresentationChartLine /> , h3: 'Presentaton'},
    {icon: <FaFileArchive /> , h3: 'Archiving'},
    {icon: <RiGuideFill /> , h3: 'Guidelines'},
    {icon: <SiShopee />, h3: 'Shope'}
  ]
  return (
    <div>
      <Head>
        <title>Pricing</title>
      </Head>
      <Price />
      <div className="container">
        <div className="heading">
          <h3>more features</h3>
          <h2>Far far away, behind the word mountains, far from the countries</h2>
        </div>
        <div className={features.feat_cont}>
          {data.map(item => (
            <div className={Home.box} style={{textAlign: 'center'}}>
            <div className={Home.icon} style={{alignSelf: 'center'}}>{item.icon}</div>
            <h3>{item.h3}</h3>
            <p className={Home.p}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          ))}
        </div>
      </div>
      <Talk />
    </div>
  )
}

export default Pricing