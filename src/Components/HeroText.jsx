import { useState } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const HeroText = () => {
  const name = 'Sarah';
  const [animating, setAnimating] = useState(Array(name.length).fill(false));

  const startAnimation = (index) => {
    setAnimating((prev) => prev.map((val, i) => (i === index ? true : val)));
    setTimeout(() => {
      setAnimating((prev) => prev.map((val, i) => (i === index ? false : val)));
    }, 2000); // duration of the animation
  };

  return (
    <div className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]" id="repulse-div">
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: 'Aimeriga', fontSize: '160px' }}
        >
          <m.span initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.6, type: 'spring' }}>
            Hello I'm{' '}
          </m.span>
          <m.div initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 0.6, type: 'spring' }}>
            {name.split('').map((char, index) => (
                <span
                  key={index}
                  className={`text-primary-400 jump-flip ${animating[index] ? 'start-animation' : ''}`}
                  style={{ fontSize: '1.2em' }}
onMouseEnter={() => startAnimation(index)}
                >
                  {char}
                </span>
              ))}
          </m.div>
        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
