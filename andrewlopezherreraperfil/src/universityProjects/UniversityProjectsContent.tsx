import { Button, Card, Col, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import coursesJSON from "../information/courses.json";
import Meta from "antd/es/card/Meta";
import "./UniversityProjects.css"

const UniversityProjectsContent : React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="containerUniversityProjects">
            <h1>{t('universityProjects.title')}</h1>
            <Row className="rowProjects" gutter={[48, 24]} justify={'space-around'}>
                {coursesJSON.map((course, index) => (
                    <Col key={index} className="colProject">
                        <Card
                            hoverable
                            key={index}
                            style={{
                                width: "100%",
                                maxWidth: 300,
                                minHeight: 380,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderColor: "#011528"
                            }}
                            cover={
                                <h2 style={{textAlign: "center"}}>
                                    {t("universityProjects.courses." + course.name + ".name")}
                                </h2>
                            }
                            actions={[
                                <Button 
                                    icon={<EyeOutlined />}
                                    color="volcano"
                                    variant="link"
                                >
                                    {t("universityProjects.viewProjects")}
                                </Button>    
                            ]}
                        >
                            <Meta
                                title={t("universityProjects.courses." + course.name + ".courseCode")}
                                description={t("universityProjects.courses." + course.name + ".description")}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default UniversityProjectsContent;
