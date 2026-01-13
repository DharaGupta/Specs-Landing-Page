import React from 'react';
import useScrollReveal from "./useScrollReveal";

const Hero = () => {
    return(
    <section className="Hero">
     <div className="hero-inner">
        <div className= "hero-top-row" className= "hero-top-row fade-up">
         <div className="hero-Topcontent">

            <div className = "hero-icons" >
              <div className="hero-icon1"><img src="/image/Logo 1.svg" /></div>
              <div className="hero-icon2"> <img src="/image/Logo 2.svg" /></div>
            </div>  

          </div>
          <h1 className="hero-title">SHAPING THE NEXT GEN OF VISION</h1>

        </div>
       
        <div className="hero-Bottomcontent" className= "hero-Bottomcontent fade-up">

            <div className="bottomLeft">
                <div><img src="/image/copywright.svg" sizes='16px'/></div>
                <div className="hero-copy">ELEVATE YOUR PERSONAL STYLE WITH A DYNAMIC BRIDGE BETWEEN HIGH-END FASHION AND SEAMLESS AR TECHNOLOGY. </div>
            </div>

            <div className="bottomRight">
                <div className="hero-copy">SCROLL DOWN</div>
                <div className="hero-icon3"><img src="/image/arrow.svg"/></div>
            </div>
        </div>
    </div>

    </section>
    );
   

}

export default Hero;