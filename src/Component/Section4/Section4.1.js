import React from "react";
import "./Section4.1.css";
const Section4x = () => {
  return (
    <>
      {/* Part 1/2 Start */}
      <div className="flex">
        <div className="section-black-one">
          <div className="section-six">
            <h2 className="six-head"> </h2>
            <h3 className="six-sub">A healthy leap ahead.</h3>
            <div className="links">
              <a
                className="links-one"
                href="https://www.apple.com/uk/iphone-14-pro/"
              >
                Learn more &gt;
              </a>
              <a
                className="links-one links-padding"
                href="https://www.apple.com/uk/shop/buy-iphone/iphone-14-pro"
              >
                Buy &gt;
              </a>
            </div>
          </div>
        </div>
        {/*    Part 1/2 End        */}
        {/*    Part 2/2 Start       */}
        <div className="section-black-two">
          <div className="section-seven">
            <h2 className="seven-head">Airpods&nbsp;Pro&nbsp;</h2>
            <h3 className="seven-sub">Rebuilt from the sound up.</h3>
            <div className="links">
              <a
                className="links-one"
                href="https://www.apple.com/uk/iphone-14-pro/"
              >
                Learn more &gt;
              </a>
              <a
                className="links-one links-padding"
                href="https://www.apple.com/uk/shop/buy-iphone/iphone-14-pro"
              >
                Buy &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section4x;
