import React from "react";
import { RiMailCheckFill, RiArrowRightLine, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import './css/Footer.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="main">
        <div className="logo row">
          <div className="footer-header">
           
          </div>
          <div className="logo-des">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <a href="#" className="btn-know">Know More</a>
          </div>
        </div>
        <div className="office row">
          <div className="footer-header">
            <h3>Office</h3>
          </div>
          <div className="office-des">
            <p>here are <br /> many variations of passages<br />of Lorem Ipsum<br />available</p>
            <a href="#">manikmaity.haker2003@gmail.com</a>
            <p className="num">+91-9999999999</p>
          </div>
        </div>
        <div className="link row">
          <div className="footer-header">
            <h3>Links</h3>
          </div>
          <div className="link-des">
      <a href="./Privacy.js" target="blank">Privacy</a>
       
          </div>
        </div>
        <div className="newsletter row">
          <div className="footer-header">
            <h3>Newsletter</h3>
          </div>
          <div className="newsletter-des">
            <div className="subcribe"><i className="sub-icon"><RiMailCheckFill /></i>
              <input type="mail" placeholder="Enter Email ID" required />
              <i className="sub-icon"><RiArrowRightLine /></i>
            </div>
            <div className="icons">
              <a href="#"><i className="social-icon"><RiFacebookFill /></i></a>
              <a href="#"><i className="social-icon"><RiInstagramLine /></i></a>
              <a href="#"><i className="social-icon"><RiLinkedinFill /></i></a>
              <a href="#"><i className="social-icon"><RiGithubLine /></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>© Copyright 2022 Manik Maity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
