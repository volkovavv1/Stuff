import React from 'react'
import { Link } from 'react-router-dom'

import styles from "../../styles/Footer.module.css"
import { ROUTES } from "../../utils/routes"

import LOGO from "../../images/logo.svg"

const Footer = () => (
    <section className={styles.footer}>
      <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Stuff"/>
            </Link>
        </div>

        <div className={styles.rights}>
          Developed by {" "} 
          <a 
            href="https://github.com/volkovavv1"
            target='_blank'
            rel='noreferrer'
          >
            Volkova V.
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://instagram.com" target='_blank' rel='noreferrer'>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}></use>
            </svg>
          </a>

          <a href="https://facebook.com" target='_blank' rel='noreferrer'>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}></use>
            </svg>
          </a>

          <a href="https://youtube.com" target='_blank' rel='noreferrer'>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
            </svg>
          </a>
          
        </div>
    </section>
  )

export default Footer