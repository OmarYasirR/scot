import React from 'react'
import styles from '../styles/mainComp.module.css'

const mainComp = ({head}) => {
  return (
    <div className='container'>
      <div className={styles.cont}>
        {head? <div className={styles.text}>
          <h2>{head}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet et, obcaecati sapiente cumque in minima accusantium, autem consequuntur cum illum voluptatum modi officia hic aut soluta animi maxime laborum?</p>
          <div className="btn" style={{marginLeft: 0}}>get in touch</div>
        </div>: <div className={styles.text}>
          <h2>Always deliver more than expected</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet et, obcaecati sapiente cumque in minima accusantium, autem consequuntur cum illum voluptatum modi officia hic aut soluta animi maxime laborum?</p>
          <div className={styles.stat}>
            <div className={styles.box}>
              <div className={styles.num}>250</div>
              <span className={styles.dis}>Porject<br/> Bulid</span>
            </div>
            <div className={styles.box}>
              <div className={styles.num}>700+</div>
              <span className={styles.dis}>Happy<br/> Customers</span>
            </div>
            <div className={styles.box}>
              <div className={styles.num}>22</div>
              <span className={styles.dis}>Years<br/> Of Experience</span>
            </div>
          </div>
        </div>}
        
        <div className={styles.img}>
        <img style={{width: '100%'}} src="./images/gal_1.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default mainComp