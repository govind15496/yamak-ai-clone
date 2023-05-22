import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer1__about">
          <h3>Yamak.ai</h3>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut
            <br /> labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="footer__product">
          <ul>
            <li className="heading">Product</li>
            <li>
              <p>Social Media</p>
            </li>
            <li>
              <p>Marketing</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Others</p>
            </li>
          </ul>
        </div>
        <div className="footer__Support">
          <ul>
            <li className="heading">Support</li>
            <li>
              <p>FAQs</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
        <div className="footer__Company">
          <ul>
            <li className="heading">Company</li>
            <li>
              <p>Privacy</p>
            </li>
            <li>
              <p>Terms of Service</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer2">
        <div className="footer2__copyright">
          <p className="footer2__copyrightTxt">
            Copyright 2023-2024 | Yamak.ai . All rights reserved.
          </p>
        </div>
        <div className="footer2__social">
          <ul className="footer2__socialList">
            <li>
              <img src="./images/facebook.png" alt="" />
            </li>
            <li>
              <img src="./images/instagram.png" alt="" />
            </li>
            <li>
              <img src="./images/linkedin.png" alt="" />
            </li>
            <li>
              <img src="./images/vector.png" alt="" />
            </li>
            <li>
              <img src="./images/discard.png" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="respons">
        <div className="respons__social">
          <ul className="respons__socialList">
            <li>
              <img src="./images/facebook.png" alt="" />
            </li>
            <li>
              <img src="./images/instagram.png" alt="" />
            </li>
            <li>
              <img src="./images/linkedin.png" alt="" />
            </li>
            <li>
              <img src="./images/vector.png" alt="" />
            </li>
            <li>
              <img src="./images/discard.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="respons__copyright">
          <p className="respons__copyrightTxt">
            Copyright 2023-2024 | Yamak.ai . All rights <br />
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
