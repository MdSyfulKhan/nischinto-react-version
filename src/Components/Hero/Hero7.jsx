import { React, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import TextTransition, { presets } from 'react-text-transition';
import Social from '../Social/Social';

const Hero7 = ({ data }) => {
  const bgImg = data.bgImg;
  const bgShape = data.bgShape;
  const videoSrc = data.videoSrc;
  const title = data.title;

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <div id='home' className="st-hero-wrap st-gray-bg st-dynamic-bg overflow-hidden youtube-bg st-white-overlay"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          id="bgndVideo"
          className="player"
          data-property={`videoURL:${videoSrc}, containment:'.youtube-bg',autoPlay:true, mute:true, startAt:1, opacity:1, showControls:false, loop:true`}
        />
        <div className="st-hero st-style1">
          <div className="container">
            <div className="st-hero-text">
              <div className="st-height-b40 st-height-lg-b40" />
              <h1 className="st-hero-title cd-headline slide">
                Take best quality <br />
                treatment for
                <span className="cd-words-wrapper">
                  <TextTransition springConfig={presets.wobbly}>
                    <span className="st-transition-title">
                      {title[index % title.length]}
                    </span>
                  </TextTransition>
                </span>
              </h1>
              <div className="st-hero-subtitle st-primary-color">
                The art of medicine consists in amusing the patient while nature cures
                the disease. <br />
                Treatment without prevention is simply unsustainable.
              </div>
              <div className="st-hero-btn">
                <ScrollLink
                  to="appointment"
                  className="st-btn st-style1 st-size-medium st-color1 st-smooth-move"
                >
                  Appointment
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="st-hero-social-group">
            <div className="container">
              <Social/>
            </div>
          </div>
        </div>
        <div className="st-hero-shape">
          <img src={bgShape} alt="hero shape" />
        </div>
      </div>

    </>
  )
}

export default Hero7;
