import { Button, Card, Col, Input, List, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import coursesJSON from "../information/courses.json";
import { useNavigate } from "react-router-dom";
import "./UniversityProjects.css"
import React, { useEffect } from "react";

const UniversityProjectsContent : React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [courses, setCourses] = React.useState(coursesJSON);
    const [searchName, setSearchName] = React.useState<string>("");
    const [searchCode, setSearchCode] = React.useState<string>("");
    const [searchLine, setSearchLine] = React.useState<string>("");

    useEffect(() => {
        let filteredCourses = coursesJSON;
        if (searchName) {
            filteredCourses = filteredCourses.filter(course =>
                t("universityProjects.courses." + course.name + ".name").toLowerCase().includes(searchName.toLowerCase())
            );
        }
        if (searchCode) {
            filteredCourses = filteredCourses.filter(course =>
                t("universityProjects.courses." + course.name + ".courseCode").toLowerCase().includes(searchCode.toLowerCase())
            );
        }
        if (searchLine) {
            filteredCourses = filteredCourses.filter(course =>
                t("universityProjects.courses." + course.name + ".line").toLowerCase().includes(searchLine.toLowerCase())
            );
        }
        setCourses(filteredCourses);
    }, [searchName, searchCode, searchLine, t]);

    return (
        <section className="containerUniversityProjects">
            <h1>{t('universityProjects.title')}</h1>
            <Row className="rowProjects" gutter={[32, 32]} justify={'space-around'} style={{ width: "100%", margin: 0 }}>
                <Input
                    placeholder={t("universityProjects.searchName")} style={{ maxWidth: 400, marginBottom: 16 }}
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}
                />
                <Input
                    placeholder={t("universityProjects.searchCode")} style={{ maxWidth: 400, marginBottom: 16 }}
                    value={searchCode}
                    onChange={e => setSearchCode(e.target.value)}
                />
                <Input
                    placeholder={t("universityProjects.searchLine")} style={{ maxWidth: 400, marginBottom: 16 }}
                    value={searchLine}
                    onChange={e => setSearchLine(e.target.value)}
                />
            </Row>
            <Row className="rowProjects" gutter={[32, 32]} justify={'center'} style={{ width: "100%", margin: 0 }}>
                {courses.map((course, index) => (
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={8}
                        key={course.name}
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
                                    {t("universityProjects.courses." + course.name + ".name")}
                                </h2>
                            }
                            actions={[
                                <Button 
                                    icon={<EyeOutlined />}
                                    color="volcano"
                                    variant="link"
                                    onClick={() => navigate(`/course/${course.name}`)}
                                >
                                    {t("universityProjects.viewProjects")}
                                </Button>    
                            ]}
                        >
                            <List itemLayout="vertical">
                                <List.Item>
                                    <List.Item.Meta
                                        title={t("universityProjects.courseCode")}
                                        description={t("universityProjects.courses." + course.name + ".courseCode")}
                                    />
                                    <List.Item.Meta
                                        title={t("universityProjects.line")}
                                        description={t("universityProjects.courses." + course.name + ".line")}
                                    />
                                    <List.Item.Meta
                                        title={t("universityProjects.semester")}
                                        description={t("universityProjects.courses." + course.name + ".semester")}
                                    />
                                    <List.Item.Meta
                                        title={t("universityProjects.description")}
                                        description={t("universityProjects.courses." + course.name + ".description")}
                                    />
                                </List.Item>
                            </List>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default UniversityProjectsContent;
