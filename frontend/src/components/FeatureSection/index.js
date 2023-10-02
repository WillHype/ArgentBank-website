import React from 'react';
import "./style.css";
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';
import Item from './item'; 

const featureItem = [
    {
      id: 1,
      img: iconChat,
      title: "You are our #1 priority",
      text: `Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes.`,
    },
    {
      id: 2,
      img: iconMoney,
      title: "More savings means higher rates",
      text: `The more you save with us, the higher your interest rate will be!`,
    },
    {
      id: 3,
      img: iconSecurity,
      title: "Security you can trust",
      text: ` We use top of the line encryption to make sure your data and money
      is always safe.`,
    },
];

const Feature = () => { 
    return (
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featureItem.map((featureItem) => (
            <Item 
              img={featureItem.img}
              title={featureItem.title}
              text={featureItem.text}
              key={featureItem.id}
            />
          ))}
        </section>
    );
}

export default Feature;
