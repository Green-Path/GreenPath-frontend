import React , { useState } from 'react'
import '../css/aboutus.css';
import img1 from './profile.jpeg'
import img2 from './profile.jpeg'
import img3 from './profile.jpeg'
import img4 from './profile.jpeg'
import img5 from './profile.jpeg'
import img6 from './profile.jpeg'
import img7 from './profile.jpeg'
import img8 from './profile.jpeg'
import img9 from './profile.jpeg'
import img10 from './profile.jpeg'
import img11 from './profile.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './ProfileCard';
import { useParams, useHistory } from "react-router-dom";


const AboutUs = ({username}) => {
  const [index, set] = useState(0);
  const { profileId } = useParams();

  const profiles = [
    {
      name: 'ANJALI JILARIYA',
      username: 'Anjali Jilariya',
      imageSrc: img1,
      socialLinks: [
        {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a/' },
      ],
    },
    {
        name: 'KAVYA KUMAR',
        username: 'Kavya Kumar',
        imageSrc: img2,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: ' AADITYA MAKWANA',
        username: ' Aaditya Makwana',
        imageSrc: img3,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: 'SHAH SAUMYA',
        username: 'Shah Saumya',
        imageSrc: img4,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: ' GUPTA SHEKHAR',
        username: ' Gupta Shekhar',
        imageSrc: img5,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: ' HIMANI SINGH',
        username: ' Himani Singh',
        imageSrc: img6,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: 'PATEL DEV',
        username: 'Patel Dev',
        imageSrc: img7,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: 'SOYANTAR DHRUVA',
        username: 'Soyantar Dhruva',
        imageSrc: img8,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
        name: 'KACHA SHIVANG',
        username: 'Kacha Shivang',
        imageSrc: img9,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    },
    {
      name: 'DOBARIYA JAY',
      username: 'Dobariya Jay',
      imageSrc: img10,
      socialLinks: [
        {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
      ],
    },
    {
        name: 'HARSH PARMAR',
        username: 'Harsh Parmar',
        imageSrc: img11,
        socialLinks: [
          {url: 'https://www.linkedin.com/in/anjali-jilariya-8b119727a' },
        ],
    }
  ];


  return (

    <div className='main2' style={{backgroundColor: 'rgb(223, 248, 239)'}}>
    <div>
    <div class="main-content">
      <h2 className="Aboutheading" style={{backgroundColor: "rgb(197 239 225)"}}>About GreenPath</h2>
      <p className="contentinaboutus">Welcome to GreenPath, an eco-friendly platform dedicated to bringing you the latest environmental news and insightful blogs on sustainable living. Our goal is to empower you with knowledge and resources to make environmentally conscious choices in your everyday life.</p>

      <p className="contentinaboutus">Stay updated with the latest environmental news, from climate action initiatives to wildlife conservation efforts and sustainable technology advancements. Our curated blogs cover a wide range of topics, including eco-friendly lifestyle tips, green innovations, and ways to reduce your carbon footprint.</p>

      <p className="contentinaboutus">Looking for zero waste products? Explore our comprehensive database featuring a wide range of eco-friendly and zero waste products. From reusable bags and compostable packaging to sustainable fashion and home essentials, we've got you covered.</p>

      <p className="contentinaboutus">In search of energy-efficient appliances? Our platform provides a convenient tool to help you find energy-efficient appliances for your home. Discover products that save energy, reduce utility bills, and contribute to a greener future.</p>

      <p className="contentinaboutus">Join our community of eco-conscious individuals and businesses committed to preserving the planet for future generations. Together, we can make a positive impact on the environment and create a more sustainable world.</p>

      <p className="contentinaboutus">Start your journey towards a greener lifestyle today with GreenPath!</p>

     </div>
      <div className='g' style={{backgroundColor: "rgb(197 239 225)"}}>
        Our Team Members
        </div>


      <div className='h'>

      <section className="vh-400">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
      </section>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
