import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/header.module.css";
import {AiOutlineSearch, AiOutlineTwitter} from 'react-icons/ai'
import {MdFacebook} from 'react-icons/md'
import { MdOutlineCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";



const Header = () => {
  const links = [
    {
      route: "Home",
      link: "/",
    },
    {
      route: "Features",
      link: "/features",
    },
    {
      route: "Pricing",
      link: "/pricing",
    },
    {
      route: "Contact Us",
      link: "/contact",
    },
  ];
  const [showVer, setShowVer] = useState(false);
  const router = useRouter().asPath;
  return (
    <div className={styles.header}>
      <div className={`${styles.cont} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <h2>Scout</h2>
          </Link>
        </div>
        <nav className={styles.horis}>
          {links.map((link, i) => (
            <Link href={link.link} key={i}>
              <a className={link.link == router ? styles.active: undefined}>
                {link.route}
              </a>
            </Link>
          ))}
        </nav>
        <nav
          className={styles.vertical}
          style={{ transform: showVer ? "translateX(0)": undefined }}
        >
          {links.map((link, i) => (
            <Link href={link.link} key={i}>
              <a className={link.link == router ? styles.active : undefined}>
                {link.route}
              </a>
            </Link>
          ))}
          <div
            className={styles.icon_ver}
            onClick={() => {setShowVer(false)}}
          >
            <MdOutlineCancel />
          </div>
        </nav>
        <div className={styles.social}>
          <div className={styles.icon}>
            <AiOutlineSearch />
          </div>
          <div className={styles.icon}>
            <AiOutlineTwitter />
          </div>
          <div className={styles.icon}>
          <MdFacebook />
          </div>
          <div
            onClick={() => {setShowVer(true)}}
          >
            <FaBars className={styles.icon_hors}/>
          </div>
        </div>
      </div>
      <div
        className="over-lay"
        style={{display:  showVer ?'block': 'none'}}
        onClick={() => {setShowVer(false)}}
      ></div>
    </div>
  );
};

export default Header;
