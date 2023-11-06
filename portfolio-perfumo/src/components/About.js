import React, { useTransition, useState, useEffect } from "react";
import about from "../static/img/about.gif";
import TabButton from "./TabButton";
import "../static/css/about.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="paragraph">
        <li>Premier</li>
        <li>After Effects</li>
        <li>Ilustrator</li>
        <li>Photoshop</li>
      </ul>
    ),
  },
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className="paragraph">
        <li>Estudiando la carrera de Diseño Multimedial en la Escuela DaVinci</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className="paragraph">
        <li> En proceso</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [showImage, setShowImage] = useState(false);

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
            alt="Descripcion"
            className="about-image"
            style={{
              opacity: showImage ? 1 : 0,
              transform: showImage ? "scale(1)" : "scale(0.9)",
              transition: "opacity 4s, transform 4s",
            }}
          />
        </div>
      </div>
      <div className="text-container">
        <div>
          <h2 className="title-about">Sobre Mi</h2>
          <p className="paragraph">
          Como editor de videos, mi pasión radica en la creación de contenido visualmente cautivador y significativo. Tengo experiencia sólida en el uso de herramientas como Adobe Premiere, After Effects, Ilustrator, entre otros. Mi enfoque se centra en la narrativa visual, la edición creativa y la producción de videos impactantes. Estoy constantemente buscando mejorar mis habilidades, explorando nuevas técnicas y tendencias para ofrecer resultados innovadores. Colaborar en equipo es una de mis fortalezas; estoy emocionado por trabajar con vos para lograr un gran crecimiento en tus redes sociales. </p>
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
            Educacion
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certificaciones")}
            active={tab === "certificaciones"}
          >
            Certificaciones
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
