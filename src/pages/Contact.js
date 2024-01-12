import React from 'react';
import './Contact.css';
import adarshImage from './images/passport-photo-adarsh.jpg';
import aditiImage from './images/passport-photo-aditi.jpg';
import dhruviImage from './images/passport-photo-dhruvi.jpg';
import yashImage from './images/passport-photo-yash.jpg';
import stutiImage from './images/passport-photo-stuti.jpg';
import nirbhayImage from './images/passport-photo-nirbhay.jpg';

const Person = ({ name, role, mobile, email, imageSrc }) => {
  return (
    <div className="person">
      <div className="image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="details">
        <b>{name}</b>
        <p>
          {role}
          <br />
          Mobile Number: {mobile}
          <br />
          Email ID: {email}
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>

      <div className="person-container">
        <Person
          name="ADARSH SHARMA"
          role="FOUNDER"
          mobile="7487089739"
          email="devduttadarsh6@gmail.com"
          imageSrc={adarshImage}
        />
        <Person
          name="ADITI PARMAR"
          role="CO-FOUNDER"
          mobile="9106921908"
          email="adiparmar16@gmail.com"
          imageSrc={aditiImage}
        />
        <Person
          name="NIRBHAY CHADUDHARI"
          role="CO-FOUNDER"
          mobile="9106642851"
          email="nirbhaychaudhari07@gmail.com"
          imageSrc={nirbhayImage}
        />
        <Person
          name="DHRUVI PRAJAPATI"
          role="CO-FOUNDER"
          mobile="9724218079"
          email="prajapatidhruvi1103@gmail.com"
          imageSrc={dhruviImage}
        />
        <Person
          name="STUTI PRAJAPATI"
          role="CO-FOUNDER"
          mobile="9023960615"
          email="prajapatistuti1212@gmail.com"
          imageSrc={stutiImage}
        />
        <Person
          name="YASH PANCHAL"
          role="CO-FOUNDER"
          mobile="8849652909"
          email="yashatmiya36@gmail.com"
          imageSrc={yashImage}
        />
      </div>
    </div>
  );
};

export default Contact;
