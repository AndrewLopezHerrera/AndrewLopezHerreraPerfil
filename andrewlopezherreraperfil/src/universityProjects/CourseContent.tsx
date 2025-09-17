import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button, Collapse, List } from "antd";
import { useEffect, useState } from "react";
import i18n from "../i18n/i18n";
import { EyeOutlined } from "@ant-design/icons";
import "./CourseContent.css";

const CourseContent: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const [projectsData, setProjectsData] = useState<{ key: string, label: string, children: React.ReactNode}[]>([]);

    const tranformData = (arrayProjects: [string, any][]) => {
            const aux : { key: string, label: string, children: React.ReactNode}[] = [];
            arrayProjects.forEach(([element, value]) => {
                console.log(element, value);
                aux.push({
                    key: element,
                    label: value.name,
                    children:
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={value.projects}
                        >
                            <List.Item>
                                <List.Item.Meta
                                    title={t("universityProjects.type")}
                                    description={value.type}
                                />
                                <List.Item.Meta
                                    title={t("universityProjects.dueDate")}
                                    description={value.dueDate}
                                />
                                <List.Item.Meta
                                    title={t("universityProjects.projectDescription")}
                                    description={value.description}
                                />
                                <List.Item.Meta
                                    title={t("universityProjects.technologies")}
                                    description={value.technologies.join(", ")}
                                />
                                {value.git && <Button
                                    icon={<EyeOutlined />}
                                    color="volcano"
                                    variant="link"
                                    href={value.git}>
                                        {t("universityProjects.viewRepository")}
                                    </Button>}
                                {value.functionality && <List.Item.Meta
                                    title={t("universityProjects.functionality")}
                                    description={value.functionality}
                                />}
                            </List.Item>
                        </List>
                });
            });
            return aux;
        }

    useEffect(() => {
        const projects = t("universityProjects.courses." + id + ".projects", { returnObjects: true });
        const arrayProjects = Object.entries(projects);
        const projectsDataAux = tranformData(arrayProjects);
        console.log(projectsDataAux);
        setProjectsData(projectsDataAux);
    }, [i18n.language]);

    return (
        <section style={{ width: "100%" }} className="containerCourseContent">
            <h1>{t('universityProjects.courses.' + id + '.name')}</h1>
            <Collapse accordion items={projectsData}/>
        </section>
    );
};

export default CourseContent;
