import React from "react";
import home from "../styles/Home.module.css";
import styles from "../styles/price.module.css";

const price = () => {
  return (
    <div className='price'>
      <div className="container">
          <div className="heading">
            <h3>The Price For All</h3>
            <h2>The Right Plan For Your Business</h2>
          </div>
        <div className={[home.cont]}>
          <div className={`${home.box} box`}>
            <h2>Standard</h2>
            <h3>$28.00</h3>
            <ul>
              <li>
                <span className={home.icon}></span>
                <span>Basic Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Migration Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Dedicated Technical Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Services</span>
              </li>
            </ul>
            <div className='btn'>get started</div>
          </div>
          <div className={`${home.box} box`}>
            <h2>Business</h2>
            <h3>$99.00</h3>
            <ul>
              <li>
                <span className={home.icon}></span>
                <span>Basic Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Migration Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Dedicated Technical Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Services</span>
              </li>
            </ul>
            <div className='btn'>get started</div>
          </div>
          <div className={`${home.box} box`}>
            <h2>Enterprise</h2>
            <h3>$180.00</h3>
            <ul>
              <li>
                <span className={home.icon}></span>
                <span>Basic Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Migration Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Dedicated Technical Support</span>
              </li>
              <li>
                <span className={home.icon}></span>
                <span>Services</span>
              </li>
            </ul>
            <div className='btn'>get started</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .price{
          padding: 70px 0;
          background: #eee;
        }
        li{
          list-style: none;
          margin-bottom: 10px
        }
        .box{
          padding: 15px;
          transition: 0.5s;
        }
        .box:hover{
          background: var(--secondry);
          border-radius: 10px;
          transform: translatey(-15px);
          color: #fff
        }
        .box:hover .btn{
          background: #eee;
          color: var(--secondry)
        }
        
      `}</style>
    </div>
  );
};

export default price;
