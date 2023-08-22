import React from 'react';

const Footer = () => {
  return (
    <footer className="footer_section" style={{ backgroundColor: '#000', height:'500px', color: '#fff', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
               
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span className='text-white'>Location: Nazimabad</span>
               
                <br/>
                
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className='text-white'>Call us: +923182889***</span>
             
                <br/>
               
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className='text-white'>Rabi's_cafe@gmail.com</span>
               
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="" className="footer-logo" style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
                Rabi's Cafe
              </a>
              <p>
                Rabi's Cafe is a popular eatery located in the heart of downtown.
                Known for its cozy atmosphere and delicious Mediterranean-inspired sweetness.
                Rabi's Cafe is a must-visit spot for locals and tourists alike.
              </p>
              <div className="footer_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10:00 AM - 10:00 PM</p>
            <div className="footer-info" style={{ textAlign: 'center', marginTop: '100px' }}>
              <p>
                Made By Rabi_ur_Rehman 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
