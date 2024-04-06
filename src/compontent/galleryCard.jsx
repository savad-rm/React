
import React, { useState, useEffect } from 'react';
import '../style/gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [setCurrentIndex] = useState(0);

  const data = [
    {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event/3.jpg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    },
    {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event/1.jpg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    },
    {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event/4.jpg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    },
    {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event/2.jpg',
      description: 'Description for Image 4',
    },
    {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event6.jpeg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    },
    {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event5.jpeg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    }, {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event3.jpeg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    }, {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event1.jpeg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    }, {
      imageUrl: 'https://www.jdtislamnewhope.com/img/event2.jpeg',
      description: 'JDT ISLAM COLLEGES GRADUATION CEREMONY-2023, Ms. TIFFANY BRAR',
    },
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'scroll'; 
  };
  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 2000); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, data.length]);

  return (
    <div className="gallery-main">
      <section className='gallery-card'>
      <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="image-container" onClick={() => openLightbox(index)}>
              <img src={item.imageUrl} alt={item.name} className="gallery-image" />
              <div className="image-info">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </section>
      {selectedImage !== null && (
        <div className="lightbox">
          <span className="close-button" onClick={closeLightbox}>×</span>
          <img src={data[selectedImage].imageUrl} alt={{selectedImage}} className="lightbox-image" />
          <div className="lightbox-info">
            {/* Add lightbox information here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;