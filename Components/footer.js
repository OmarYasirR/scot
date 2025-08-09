import React from 'react'
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <footer className='container'>
      <div className={styles.cont}>
        <ul className={styles.ul}>
          <li className={styles.head}><h4>help</h4></li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Web Design</li>
          <li>Pricing</li>
          <li>FAG</li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.head}><h4>About</h4></li>
          <li>About Us</li>
          <li>Services</li>
          <li>Solutions</li>
          <li>Team</li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.head}><h4>Support</h4></li>
          <li>Knowledge base</li>
          <li>Forum</li>
          <li>Contact</li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.head}><h4>help</h4></li>
          <div className={styles.in_cont}>
            <input className={styles.in} type="text" placeholder='Email address' />
            <button className={styles.sb}>subscribse</button>
          </div>
        </ul>
      </div>
      <div className={styles.copy}>Copyright ©2023. All Rights Reserved. — Designed with love by <span className={styles.name}>Omer Yasir</span></div>
      <style jsx>{`
        ul li {
          list-style: none
        }
      `}</style>
    </footer>
  )
}

export default Footer