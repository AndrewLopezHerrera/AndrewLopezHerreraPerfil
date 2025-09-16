import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./UniversityProjects.css";
import { Collapse } from "antd";
import { useEffect, useState } from "react";

const CourseContent: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const [projectsData, setProjectsData] = useState<{ key: string, label: string}[]>([]);

    useEffect(() => {
        const projects = t("universityProjects.courses." + id + ".projects", { returnObjects: true });
        const arrayProjects = Object.entries(projects);
        const projectsDataAux : { key: string, label: string}[] = arrayProjects.map(
            ([, array], index) => ({ key: index.toString(), label: array.name })
        );
        setProjectsData(projectsDataAux);
    }, []);

    return (
        <section style={{ width: "100%" }}>
            <h1>{t('universityProjects.courses.' + id + '.name')}</h1>
            <Collapse accordion items={projectsData}/>
        </section>
    );
};

export default CourseContent;
