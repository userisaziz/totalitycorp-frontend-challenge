import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-all">
      <div className="footer-one">
        <ol className="ol">
          <li className="footnotes pad-left">
            {" "}
            1. iPhone 8 or later users may subscribe without an Apple Watch
            later this fall.
          </li>
          <li className="footnotes pad-left">
            {" "}
            2. Qualified Purchasers receive an Apple Gift Card when they
            purchase an eligible Mac or iPad at a Qualifying Location. Only one
            Promotion Product per eligible Mac or eligible iPad per Qualified
            Purchaser. Offer subject to availability. While stocks last. View
            full terms and conditions of offer here.
          </li>
        </ol>
        <ul className="ul">
          <li className="footnotes">
            A subscription is required for Apple Fitness+.
          </li>
          <li className="footnotes">
            Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later,
            watchOS 7.2 or later, and tvOS 14.3 or later.
          </li>
          <li className="footnotes">
            To get the newest features, make sure your devices are using the
            latest software versions.
          </li>
        </ul>
      </div>
      <div className="footer-two">
        <div className="column1">
          <h3 className="h3">Shop and Learn</h3>
          <ul className="list">
            <li className="li">Store</li>
            <li className="li">Mac</li>
            <li className="li">iPad</li>
            <li className="li">iPhone</li>
            <li className="li">Watch</li>
            <li className="li">AirPods</li>
            <li className="li">TV &amp; Home</li>
            <li className="li">AirTag</li>
            <li className="li">Accessories</li>
            <li className="li">Gift Cards</li>
          </ul>
        </div>
        <div className="column2">
          <div className="column2-1">
            <h3 className="h3">Services</h3>
            <ul className="list">
              <li className="li">Apple Music</li>
              <li className="li">Apple TV+</li>
              <li className="li">Apple Fitness+</li>
              <li className="li">Apple News+</li>
              <li className="li">Apple Arcade</li>
              <li className="li">iCloud</li>
              <li className="li">Apple One</li>
              <li className="li">Apple Card</li>
              <li className="li">Apple Books</li>
              <li className="li">Apple Podcasts</li>
              <li className="li">App Store</li>
            </ul>
          </div>
          <div className="column2-2">
            <h3 className="h3">Account</h3>
            <ul className="list">
              <li className="li">Manage Your Apple ID</li>
              <li className="li">Apple Store Account</li>
              <li className="li">iCloud.com</li>
            </ul>
          </div>
        </div>
        <div className="column3">
          <h3 className="h3">Apple Store</h3>
          <ul className="list">
            <li className="li">Find a Store</li>
            <li className="li">Genius Bar</li>
            <li className="li">Today at Apple</li>
            <li className="li">Apple Camp</li>
            <li className="li">Apple Store App</li>
            <li className="li">Refurbished and Clearance</li>
            <li className="li">Financing</li>
            <li className="li">Apple Trade In</li>
            <li className="li">Order Status</li>
            <li className="li">Shopping Help</li>
          </ul>
        </div>
        <div className="column4">
          <div className="column4-1">
            <h3 className="h3">For Business</h3>
            <ul className="list">
              <li className="li">Apple and Business</li>
              <li className="li">Shop for Business</li>
            </ul>
          </div>
          <div className="column4-2">
            <h3 className="h3">For Education</h3>
            <ul className="list">
              <li className="li">Apple and Education</li>
              <li className="li">Shop for K-12</li>
              <li className="li">Shop for College</li>
            </ul>
          </div>
          <div className="column4-3">
            <h3 className="h3">For Healthcare</h3>
            <ul className="list">
              <li className="li">Apple in Healthcare</li>
              <li className="li">Health on Apple Watch</li>
              <li className="li">Health Records on iPhone</li>
            </ul>
          </div>
        </div>
        <div className="column5">
          <div className="column5-1">
            <h3 className="h3">Apple Values</h3>
            <ul className="list">
              <li className="li">Accessibility</li>
              <li className="li">Education</li>
              <li className="li">Environment</li>
              <li className="li">Inclusion and Diversity</li>
              <li className="li">Privacy</li>
              <li className="li">Racial Equity and Justice</li>
              <li className="li">Supplier Responsibility</li>
            </ul>
          </div>
          <div className="column5-2">
            <h3 className="h3">About Apple</h3>
            <ul className="list">
              <li className="li">Newsroom</li>
              <li className="li">Apple Leadership</li>
              <li className="li">Career Opportunities</li>
              <li className="li">Investors</li>
              <li className="li">Events</li>
              <li className="li">Contact Apple</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-three">
        More ways to shop:{" "}
        <a href="" className="a">
          find an Apple Store
        </a>{" "}
        or{" "}
        <a href="" className="a">
          other retailer
        </a>{" "}
        near you. Or call 0800 048 0408.
      </div>
      <div className="footer-four">
        <div className="extra-margin">
          Copyright © 2022 Apple Inc. All rights reserved.
        </div>
        <div>Privacy Policy</div>
        <div> Use of Cookies</div>
        <div>Terms of Use</div>
        <div>Sales and Refunds</div>
        <div>Legal</div>
        <div>Site Map</div>
        <div className="extra-left">United Kingdom</div>
      </div>
    </div>
  );
};
export default Footer;
