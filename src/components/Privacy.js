import React, { useState, useRef, useEffect } from 'react';
import "./css/Head.css";

function Head() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      
window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div className="App" style={{ marginTop: sticky.offset }}>
      <div className="header69">
       
      </div>

      <div id="sticky-header" className={`head${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
      <h1 className="gradient-text"style={{ fontSize: '60px' }}>PRIVACY POLICY</h1>
      </div>
      <div className='container'>
        <h2>PRIVACY POLICY</h2>
        <p>
        At Adymize, accessible from https://adymize.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Adymize and how we use it.If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Adymize. This policy is not applicable to any information collected offline or via channels other than this website.
       </p>
       <h1> CONSENT</h1>
        <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
        <h1>Information we collect</h1>
        <p>
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
        </p>
        <h1>How we use your information</h1>
        <p>
        We use the information we collect in various ways, including to:
        <ul>
          <li>Provide, operate, and maintain our website</li>
       <li>mprove, personalize, and expand our website</li>
       </ul>

        </p>
        <h1></h1>
        <p>
          <strong>Information Collection and Use</strong>
        </p>
        <p>
          For a better experience, while using our Service, I may require you to provide us with certain
          personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
        </p>
        <p>
          The app does use third party services that may collect information used to identify you.
        </p>
       
        <p>
          <strong>Log Data</strong>
        </p>
        <p>
          I want to inform you that whenever you use my Service, in a case of
          an error in the app I collect data and information (through third party products) on your phone
          called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app when utilizing my Service,
          the time and date of your use of the Service, and other statistics.
        </p>
        <p>
          <strong>Cookies</strong>
        </p>
        <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.
          These are sent to your browser from the websites that you visit and are stored on your device's internal
          memory.
        </p>
        <p>
          This Service does not use these “cookies” explicitly. However, the app may use third party code and
          libraries that use “cookies” to collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose
          to refuse our cookies, you may not be able to use some portions of this Service.
        </p>
        <p>
          <strong>Service Providers</strong>
        </p>
        <p>
          This Service does not use these “cookies” explicitly. However, the app may use third party code and
          libraries that use “cookies” to collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose
          to refuse our cookies, you may not be able to use some portions of this Service.
        </p>
        </div>
       </div>
       
  );
}

export default Head;