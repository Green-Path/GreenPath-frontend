import React from 'react';
import '../css/contactus.css';
import { useParams, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ContactUs({ username }) {
  const { profileId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <Button onClick={(e) => { navigate('/') }} style={{}}>
            <Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
              GreenPath
            </Typography>
          </Button>
          <Button color="inherit" onClick={(e) => { navigate('/aboutus') }}>
            <Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
              About Us
            </Typography>
          </Button>
          <Button color="inherit" onClick={(e) => { navigate('/contactus') }}><Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            Contact Us
          </Typography></Button>
        </Toolbar>
      </AppBar>
      <div className="main" sx={{ backgroundColor: "#B4F1C1" }}>
        <section className="contact" id="contact">
          <div className="container">
            <div className="heading text-center">
              <h2>Contact Us</h2>

              <p>Have questions or need assistance? We're here to help! Feel free to reach out to us via email at greenPath@gmail.com. Our support team strives to respond to all inquiries promptly and ensure that your concerns are addressed effectively.

                Thank you for choosing Green Path, for your online learning needs. We look forward to supporting you on your Eco-friendly journey!


              </p>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="title">
                  <h3>Contact detail</h3>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p> */}
                </div>
                <div className="content">
                  {/* Info-1 */}
                  <div className="info">
                    <i className="fas fa-mobile-alt" />
                    <h4 className="d-inline-block">PHONE :
                      <br />
                      <span>+91987xxxxxxx , +9172xxxxxxxx</span></h4>
                  </div>
                  {/* Info-2 */}
                  <div className="info">
                    <i className="far fa-envelope" />
                    <h4 className="d-inline-block">EMAIL :
                      <br />
                      <span> greenPath@gmail.com</span></h4>
                  </div>
                  {/* Info-3 */}
                  <div className="info">
                    <i className="fas fa-map-marker-alt" />
                    <h4 className="d-inline-block">ADDRESS :<br /></h4>
                    <h4> Dhirubhai Ambani Institute of Information and Communication Technology, Near Indroda Circle, Gandhinagar - 382 007, Gujarat (India)</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-7">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4972641895024!2d72.6263405749077!3d23.18854191011498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1699774054316!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: "0" }} allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}