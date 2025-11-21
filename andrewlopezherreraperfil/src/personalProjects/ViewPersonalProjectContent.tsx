import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import type { PersonalProject } from "./PersonalProject";
import { Carousel, Image } from 'antd';
import i18n from "../i18n/i18n";
import mediaRoutes from "../information/personalProjectsInfo.json"
import "./ViewPersonalProjectContent.css"

const ViewPersonalProjectContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [project, setProject] = useState<PersonalProject | null>(null);
  const [images] = useState<string[]>(mediaRoutes.roboticArmWebSockets.images);
  const [videos] = useState<string[]>(mediaRoutes.roboticArmWebSockets.videos);

  useEffect(() => {
    const projects = t("personalProjects.projects", { returnObjects: true }) as PersonalProject[];
    const foundProject = projects.find(proj => proj.id === id);
    setProject(foundProject || null);
  }, [id, t, i18n.language]);
  
  if (!project) {
    return <div>{t("personalProjects.projectNotFound")}</div>;
  }

  return (
    <div className="mainContainerPersonalProjectContent">
      <h1>{project.name}</h1>
      <div className="sectionInfoVideo">
        <p className="descriptionPersonalProjectContent">{project.fullDescription}</p>
        <div className="videosPersonalProjectContent">
          {videos.map((video) => (
            <video width="100%" height="100%" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
      <div className="carouselPersonalProjectContent">
        <Carousel autoplay >
          {images.map((image, index) => (
            <div key={index} className="divImagesCarousel">
              <Image src={image} alt={`Project Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="containerTechnologiesUsed">
        <h2>{t("personalProjects.technologiesUsed")}</h2>
        <div>
          {project.technologies.map((tech, index) => (
            <div className="technologyItem" key={index}>{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPersonalProjectContent;