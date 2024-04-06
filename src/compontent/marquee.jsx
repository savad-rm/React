import React, { useState, useEffect, useRef } from 'react';
function Marquee() {
          
const marqueeContentArray = [
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis unde cumque vitae?", link: "#" },
    { text: "Suspendisse potenti. Nam sit amet placerat lectus.", link: "#" },
    { text: "Vestibulum ut posuere turpis. Cras at elit et nisi condimentum volutpat.", link: "#" },
    { text: "Fusce aliquam mauris ac velit porta, sed facilisis elit feugiat.", link: "#" }
  ];

  const [isPlaying] = useState(true);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (isPlaying) {
      marqueeElement.start();
    } else {
      marqueeElement.stop();
    }
    return () => {
      marqueeElement.stop();
    };
  }, [isPlaying]);
  return (
    <div>
<div className="marquee-top d-flex">
        <marquee className="marquee align-items-center" ref={marqueeRef} direction="left">
          {marqueeContentArray.map((content, index) => (
            <a key={index} href={content.link} style={{ marginRight: '10px' }}>{content.text}</a>
          ))}
        </marquee>
      </div>
    </div>
  )
}

export default Marquee
