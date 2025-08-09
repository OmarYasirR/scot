
import { IoIosCreate } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import styles from "../styles/whyUs.module.css";

function whyUs() {
  const data = [
    {
      q: "ho to download and register",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet reprehenderit, assumenda distinctio quos et debitis, voluptas nemo velit a provident consequuntur sit sapiente alias omnis, expedita labore mollitia deleniti.",
      icon: <GiArchiveRegister />
    },
    {
      q: "ho to create your paypal account",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet reprehenderit, assumenda distinctio quos et debitis, voluptas nemo velit a provident consequuntur sit sapiente alias omnis, expedita labore mollitia deleniti.",
      icon: <IoIosCreate />

    },
    {
      q: "ho to link your paypal account and bank account",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet reprehenderit, assumenda distinctio quos et debitis, voluptas nemo velit a provident consequuntur sit sapiente alias omnis, expedita labore mollitia deleniti.",
      icon: <FaLink />
    },
    {
      q: "ho to subscribe to your newsletterl",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet reprehenderit, assumenda distinctio quos et debitis, voluptas nemo velit a provident consequuntur sit sapiente alias omnis, expedita labore mollitia deleniti.",
      icon: <MdSubscriptions />
    },
  ];
  const imgs = [
    "./images/office_1.jpg",
    "./images/office_2.jpg",
    "./images/office_4.jpg",
    "./images/office_5.jpg",
  ];
  const [active, setActive] = useState(0)
  const classHandler = (i) => {
    if (i == active) {
      return "active";
    }
    if (i == imgs.length - 1 && active == 0) {
      return "prev";
    }

    if ((i > active) || (active == imgs.length - 1 && i == 0)) {
      return "next";
    }
    if ((active == 0 && i == imgs.length - 1) || (i < active)) {
      return "prev";
    }
  }
  let handler
  const navHandler = (i) => {
    setActive(i);
    clearTimeout(handler);
  };
  useEffect(() => {
    handler = setTimeout(() => {
      setActive((prev) => prev + 1);
      active < imgs.length - 1 ? false : setActive(0);
    }, 2000);
  }, [active]);


  return (
    <div className="container">
      <div className="heading">
        <h3>why us</h3>
        <h2>Far far away, behind the word mountains, far from the countries</h2>
      </div>
      <div className={styles.cont}>
        <div className={styles.text}>
          {data.map((item, i) => (
          <div
            className={styles.box}
            onClick={() => {navHandler(i)}}
            style={{
              background: i == active ? '#9c27b0' : undefined,
              color: i == active ? '#f1e9e9' : undefined ,
              boxShadow: i == active?'0 15px 30px -10px rgb(0 0 0 / 20%)': undefined,
            }}
          >
            <div className={styles.q}>
              <span
              style={{
                color: i == active ? 'white' : undefined ,
              }}
              className={styles.icon}>
              {item.icon}
              </span>
              <h4>{item.q}</h4>
            </div>
            <p style={{
              transform: i == active? 'translateY(0)': 'translateY(-156px)',
              display:  i == active? 'block': 'none',
              // transition: '0.7s'
            }}
            >{item.a}</p>
          </div>
          ))}
        </div>
        <div className={styles.imgs}>
          {imgs.map((img, i) => (
            <img className={`${styles.img} ${classHandler(i)}`} src={img} alt="" />
          ))}
          <div className={styles.bullets}>
            {imgs.map((_, i) => (
              <div onClick={() => {navHandler(i)}} style={{background: i ==active? 'var(--secondry)': ''}} className={styles.bullet}></div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .active{
          transform: translateX(0);
        }
        .prev{
          transform: translateX(-100%);
          opacity: 0;
        }
        .next{
          transform: translateX(100%);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default whyUs;
