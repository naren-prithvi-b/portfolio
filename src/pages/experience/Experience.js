import React from "react";
import { experience } from "../../portfolio";
import { Fade } from "react-reveal";

function Experience(props) {
  const theme = props.theme;

  return (
    <div className="main" id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div>
          <h1 style={{ color: theme.text }}>{experience.title}</h1>
          <p style={{ color: theme.secondaryText }}>{experience.description}</p>
        </div>
      </Fade>

      <div style={{ marginTop: "30px" }}>
        {experience.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: "40px" }}>
            <h2 style={{ color: theme.accentColor }}>{section.title}</h2>
            {section.experiences.map((work, i) => (
              <Fade bottom duration={1000} distance="20px" key={i}>
                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ color: theme.text }}>{work.title}</h3>
                  <h4 style={{ color: theme.secondaryText }}>{work.company}</h4>
                  <p style={{ color: theme.accentColor }}>
                    {work.duration} | {work.location}
                  </p>
                  <p style={{ color: theme.secondaryText }}>
                    {work.description}
                  </p>
                  {work.company_url && (
                    <a
                      href={work.company_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: theme.accentColor,
                        textDecoration: "underline",
                        display: "inline-block",
                        marginTop: "5px",
                      }}
                    >
                      Visit Company
                    </a>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
