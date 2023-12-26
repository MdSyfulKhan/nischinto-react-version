import React from 'react';
import parse from 'html-react-parser';

const SectionHeading = ({ data }) => {
  const title = data.title;
  const subTitle = data.subTitle;
  return (
    <div className="container">
      <div className="st-section-heading st-style1">
        <h2 className="st-section-heading-title">{parse(title)}</h2>
        <div className="st-seperator">
          <div className="st-seperator-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" />
          <div className="st-seperator-center">
            <img src="icons/4.png" alt="icon" />
          </div>
          <div className="st-seperator-right wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s" />
        </div>
        <div className="st-section-heading-subtitle">{parse(subTitle)}</div>
      </div>
      <div className="st-height-b40 st-height-lg-b40" />
    </div>
  )
}

export default SectionHeading
