import React, { useState, useEffect } from 'react';

const Features = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      setTimeout(() => {
        setNumber1(123);
        setNumber2(12);
        setNumber3(12);
        setNumber4(123);
      }, 5000);
    };

    animateNumbers();
  }, []);


  return (
 


    <div className='features-section'>
      <div className='features'>
        <div className='feature'>
          <span>Lorem ipsum</span>
          <span>{number1}+</span>
          
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
        </div>
        <div className='feature'>
          <span>Lorem ipsum</span>
          <span>{number2}+</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
        </div>
        <div className='feature'>
          <span>Lorem ipsum</span>
          <span>{number3}+</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
        </div>
        <div className='feature'>
          <span>Lorem ipsum</span>
          <span>{number4}</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
        </div>
      </div>
    </div>

  );
};

export default Features;