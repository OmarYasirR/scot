import Head from "next/head";
import MainComp from "../Components/mainComp";
import WhyUs from "../Components/whyUs";
import Price from "../Components/price";
import styles from "../styles/Home.module.css";
import Testimonial from "../Components/Testimonial";
import Talk from "../Components/Talk";
import { FaMessage } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa";
import { FaAward } from "react-icons/fa";







export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <MainComp />
      <div className={`${styles.solution} container`}>
        <h2>Better solutionsfor your business</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className={styles.cont}>
          <div className={styles.box}>
          <FaMessage className={styles.icon} />
            <h3>Messaging</h3>
            <p className={styles.p}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.box}>
          <FaLayerGroup className={styles.icon} />
            <h3>Layers</h3>
            <p className={styles.p}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.box}>
          <FaHourglassStart className={styles.icon} />
            <h3>Startup</h3>
            <p className={styles.p}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <Price />
      <div className={`${styles.about} container`}>
        <div className="text">
          <div className={`${styles.heading} heading`}>
            <h3>about us</h3>
            <h2>
              Far far away, behind the word mountains, far from the countries{" "}
            </h2>
          </div>
          <div className={styles.imgs}>
            <div className={styles.box}>
            <FaAddressBook  className={styles.icon} />

              <h3>productivity</h3>
              <p className={styles.p}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className={styles.box}>
              <FaAward className={styles.icon} />
              <h3>Professional</h3>
              <p className={styles.p}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.imgs}`}>
          <div className={`${styles.img}`} style={{position: 'relative', top: '35px'}}>
            <img src="./images/gal_2.jpg" alt="" style={{width: '100%'}}/>
            <img src="./images/gal_3.jpg" alt="" style={{width: '100%'}}/>
          </div>
          <div className={`${styles.img}`}>
            <img src="./images/gal_4.jpg" alt="" style={{width: '100%'}}/>
            <img src="./images/gal_5.jpg" alt="" style={{width: '100%'}}/>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        <div className={styles.img_co}>
          <div className={styles.overLeay}></div>
          <img src="./images/person_2.jpg" style={{width: '100%',width: '100%'}} alt="" />
        </div>
        <div className={styles.q}>
          <p className={styles.qp}>“Quisque tristique varius sapien vitae tempor. Etiam at malesuada nisl, in varius mi. Integer vel sapien quis elit gravida ultrices. Proin volutpat sem ligula, eu pharetra justo pulvinar a. Donec eget laoreet tellus. Vestibulum sagittis dignissim nulla ut lacinia.”</p>
          <div className={styles.person}>
            <img className={styles.avatar} src="./images/person_2.jpg" alt="" />
            <span>
              <h3>Riley Collis</h3>
              <p>CEO, Co-Founder</p>
            </span>
          </div>
        </div>
      </div>
      <WhyUs />
      <Testimonial />
      <Talk />
    </div>
  );
}
