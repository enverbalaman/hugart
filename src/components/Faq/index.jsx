import SectionHeading from "../SectionHeading"
import React from 'react';
import './MediaGallery.css';
import {
  Hugold10,
  Hugold20,
  Hugold30,
  Hugold40,
  gold,
  holdisgold,
  hugoldVideo
} from '../../utils/allImgs'
const Faq = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      url: Hugold40,
      title: 'Normal',
      darkBackground: true
    },
    {
      id: 2,
      type: 'video',
      url: 'https://www.youtube.com/embed/gtx6RVq8IPw', // Replace with your YouTube video ID
      title: 'Hugold (Episode1)',
      
    },
    {
      id: 3,
      type: 'image',
      url: Hugold20,
      title: 'Shocked',
      darkBackground: true
    },
    {
      id: 4,
      type: 'image',
      url: Hugold30,
      title: 'Angry',
    },
    {
      id: 5,
      type: 'image',
      url: Hugold10,
      title: 'Gold',
    }
    // Daha fazla medya ekleyebilirsiniz
  ];
  
  const renderMedia = (item) => {
    if (item.type === 'video') {
      return (
        <iframe
          className="media-content"
          width="560"
          height="315"
          src={`${item.url}`}
          title={item.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    }
    return <img className="media-content" src={item.url} alt={item.title} />;
  };

  return (
    <section className="section-back" id='art'>

      <h2 className="media-art" data-aos="fade-up">ART</h2>
      <div className="gallery-container">
        <div className="media-grid">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className={`media-card ${item.darkBackground ? 'dark-background' : ''} ${item.isVideo ? 'video-card' : ''}`}
            >
              <div className="media-wrapper">
                {renderMedia(item)}
              </div>
              <div className="media-title">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Faq