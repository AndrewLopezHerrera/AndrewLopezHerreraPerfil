import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button, Collapse, Input, List, Row } from "antd";
import { useEffect, useState } from "react";
import i18n from "../i18n/i18n";
import { EyeOutlined } from "@ant-design/icons";
import "./CourseContent.css";

const CourseContent: React.FC = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const [projectsData, setProjectsData] = useState<{ key: string, label: string, children: React.ReactNode}[]>([]);
    const [searchType, setSearchType] = useState<string>("");
    const [searchTech, setSearchTech] = useState<string>("");

    const tranformData = (arrayProjects: [string, any][]) => {
            const aux : { key: string, label: string, children: React.ReactNode}[] = [];
            arrayProjects.forEach(([element, value]) => {
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
                                {value.website && <Button
                                    icon={<EyeOutlined />}
                                    color="volcano"
                                    variant="link"
                                    href={value.website}>
                                        {t("universityProjects.viewWebsite")}
                                    </Button>}
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
        setProjectsData(projectsDataAux);
    }, [i18n.language]);

    useEffect(() => {
        const projects = t("universityProjects.courses." + id + ".projects", { returnObjects: true });
        const arrayProjects = Object.entries(projects);
        let filteredProjects = arrayProjects;
        if (searchType) {
            filteredProjects = filteredProjects.filter(([_, value]) =>
                value.type.toLowerCase().includes(searchType.toLowerCase())
            );
        }
        if (searchTech) {
            filteredProjects = filteredProjects.filter(([_, value]) =>
                value.technologies.some((tech: string) =>
                    tech.toLowerCase().includes(searchTech.toLowerCase())
                )
            );
        }
        const projectsDataAux = tranformData(filteredProjects);
        setProjectsData(projectsDataAux);
    }, [i18n.language, searchType, searchTech]);

    return (
        <section style={{ width: "100%" }} className="containerCourseContent">
            <h1>{t('universityProjects.courses.' + id + '.name')}</h1>
            <Row className="rowProjects" gutter={[32, 32]} justify={'space-around'} style={{ width: "100%", margin: 0 }}>
                <Input
                    placeholder={t("universityProjects.searchType")} style={{ maxWidth: 400, marginBottom: 16 }}
                    value={searchType}
                    onChange={e => setSearchType(e.target.value)}
                />
                <Input
                    placeholder={t("universityProjects.searchTechnologies")} style={{ maxWidth: 400, marginBottom: 16 }}
                    value={searchTech}
                    onChange={e => setSearchTech(e.target.value)}
                />
            </Row>
            <Collapse accordion items={projectsData}/>
        </section>
    );
};

export default CourseContent;
