import Head from 'next/head';
import React from 'react'
import MainComp from '../Components/mainComp';
import Testimonial from '../Components/Testimonial';

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <MainComp head={'Contact Us'} />
      <Testimonial />
    </div>
  )
}

export default contact