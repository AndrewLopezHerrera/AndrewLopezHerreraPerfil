import React, { useEffect, useState } from "react";
import "./PersonalProjectsContent.css";
import { useTranslation } from "react-i18next";
import { Button, Card, Col, List, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import type { PersonalProject } from "./PersonalProject";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n/i18n";

const PersonalProjectsContent: React.FC = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState<PersonalProject[]>(t("personalProjects.projects", { returnObjects: true }) as PersonalProject[]);
    const navigate = useNavigate();

    useEffect(() => {
        setProjects(t("personalProjects.projects", { returnObjects: true }) as PersonalProject[]);
        console.log(projects);
    }, [i18n.language]);

    const navigateToProject = (project: PersonalProject) => {
        navigate(`/personal-project/${project.name}`);
    };

    return (
        <div className="mainContainerPersonalProjects">
            <h1>{t("personalProjects.title")}</h1>
            <Row className="rowProjects" gutter={[32, 32]} justify={'center'} style={{ width: "100%", margin: 0 }}>
                {projects.map((project, index) => (
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={8}
                        key={project.name}
                    >
                        <Card
                            hoverable
                            key={index}
                            style={{
                                minHeight: 570,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                            cover={
                                <h2 style={{ textAlign: "center", marginTop: 16 }}>
                                    {project.name}
                                </h2>
                            }
                            actions={[
                                <Button 
                                    icon={<EyeOutlined />}
                                    color="volcano"
                                    variant="link"
                                    onClick={() => navigateToProject(project)}
                                >
                                    {t("personalProjects.viewProject")}
                                </Button>    
                            ]}
                        >
                            <List itemLayout="vertical">
                                <List.Item>
                                    <List.Item.Meta
                                        title={t("personalProjects.descriptionProject")}
                                        description={project.smallDescription}
                                    />
                                    <List.Item.Meta
                                        title={t("personalProjects.technologiesUsed")}
                                        description={project.technologies.join(", ")}
                                    />
                                </List.Item>
                            </List>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PersonalProjectsContent;