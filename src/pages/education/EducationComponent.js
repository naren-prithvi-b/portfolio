import React from "react";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function EducationComponent(props) {
  const theme = props.theme;

  return (
    <div className="main" id="education">
      <div className="basic-education">
        <Fade bottom duration={1000} distance="20px">
          <h1 style={{ color: theme.text }}>Education</h1>
        </Fade>
        {degrees.degrees.map((degree, index) => (
          <Fade bottom duration={1000} distance="20px" key={index}>
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: theme.text }}>{degree.title}</h2>
              <h4 style={{ color: theme.secondaryText }}>{degree.subtitle}</h4>
              <p style={{ color: theme.accentColor }}>{degree.duration}</p>
              <ul>
                {degree.descriptions.map((desc, i) => (
                  <li key={i} style={{ color: theme.secondaryText }}>
                    {desc}
                  </li>
                ))}
              </ul>
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.accentColor, fontWeight: "bold" }}
                >
                  Visit Website
                </a>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default EducationComponent;
