import React, { useTransition, useState, useEffect } from "react";
import about from "../static/img/about.gif";
import TabButton from "./TabButton";
import "../static/css/about.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="">
        <li>Node.js</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className="">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className="">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [showImage, setShowImage] = useState(false); // Agregar estado para la animación de la imagen

  useEffect(() => {
    setShowImage(true);
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white about-section" id="about">
      <div className="image-container">
        <div>
          <img
            src={about}
            alt="Description"
            className="about-image"
            style={{
              maxWidth: "70%",
              height: "auto",
              borderRadius: "10%",
              opacity: showImage ? 1 : 0,
              transform: showImage ? "scale(1)" : "scale(0.9)",
              transition: "opacity 4s, transform 4s",
            }}
          />
        </div>
      </div>
      <div className="text-container">
        <div>
          <h2 className="">Sobre Mi</h2>
          <p className="">
          Soy un desarrollador web full stack con pasión por crear aplicaciones web interactivas y receptivas. Tengo experiencia trabajando con JavaScript, React, Node.js, Express, Sequelize, HTML, CSS y Git. Aprendo rápido y siempre busco expandir mi conocimiento y conjunto de habilidades. Soy un jugador de equipo y estoy emocionado de trabajar con otros para crear aplicaciones increíbles.          </p>
        </div>
        <div>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("educacion")}
            active={tab === "educacion"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certificaciones")}
            active={tab === "certificaciones"}
          >
            Certifications
          </TabButton>
        </div>
        <div>
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
