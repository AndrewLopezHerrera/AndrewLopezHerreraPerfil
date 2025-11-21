import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import type { PersonalProject } from "./PersonalProject";
import { Button } from "antd";
import i18n from "../i18n/i18n";

const ViewPersonalProject: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { t } = useTranslation();
  const [project, setProject] = useState<PersonalProject | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const projects = t("personalProjects.projects", { returnObjects: true }) as PersonalProject[];
    const foundProject = projects.find(proj => proj.name === name);
    setProject(foundProject || null);
  }, [name, t]);
  
  if (!project) {
    return <div>{t("personalProjects.projectNotFound")}</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.fullDescription}</p>
      <p>{t("personalProjects.technologiesUsed")}: {project.technologies.join(", ")}</p>
      <Button onClick={() => navigate(-1)}>{t("personalProjects.back")}</Button>
    </div>
  );
};

export default ViewPersonalProject;