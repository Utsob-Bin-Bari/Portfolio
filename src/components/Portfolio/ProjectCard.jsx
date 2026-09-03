import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const shotUrl = (slug, index) =>
  `${process.env.PUBLIC_URL}/projects/${slug}-${index}.png`;

const Shot = ({ slug, index, name, darkMode }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`pj-shot pj-shot-placeholder${
          darkMode ? " pj-shot-dark" : ""
        }`}
      >
        <span>{name}</span>
        <span>screenshot {index}</span>
      </div>
    );
  }

  return (
    <img
      className="pj-shot"
      src={shotUrl(slug, index)}
      alt={`${name} screenshot ${index}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const ProjectCard = ({ project, darkMode }) => {
  const { name, slug, tagline, company, status, shots, stack, points, links } =
    project;

  return (
    <div className="pj-card">
      <div className="pj-shots">
        {shots.length > 1 ? (
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            grabCursor={true}
          >
            {shots.map((index) => (
              <SwiperSlide key={index}>
                <Shot
                  slug={slug}
                  index={index}
                  name={name}
                  darkMode={darkMode}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Shot
            slug={slug}
            index={shots[0]}
            name={name}
            darkMode={darkMode}
          />
        )}
      </div>

      <div className="pj-body">
        <div className="pj-head">
          <span className="pj-name">{name}</span>
          <span className="pj-status">{status}</span>
        </div>
        <span className="pj-tagline" style={{ color: darkMode ? "white" : "" }}>
          {tagline}
        </span>
        <span className="pj-company">{company}</span>

        <ul className="pj-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="pj-stack">
          {stack.map((item) => (
            <span className="pj-chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="pj-links">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button pj-button">{link.label}</button>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
