import { Card, Col, Progress, Row } from "antd";
import frameworksJSON from "../information/frameworks.json";
import { useTranslation } from "react-i18next";
import Meta from "antd/es/card/Meta";

const Frameworks : React.FC = () => {
    const { t } = useTranslation();
    return (
      <section style={{ width: "100%" }}>
      <h3>{t("profile.technicalknowledge.frameworks.title")}</h3>
      <Row gutter={[32, 32]} justify="center" style={{ width: "100%", margin: 0 }}>
        {frameworksJSON.map((framework) => (
          <Col
            key={framework.name}
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
          >
            <Card
              hoverable
              style={{ width: "100%", margin: "0 auto" }}
              cover={
                <img
                  alt={framework.name}
                  src={framework.image}
                  style={{ width: "100%", height: 180, objectFit: "contain" }}
                />
              }
            >
              <Meta
                title={framework.name}
                description={
                  <Progress
                    percent={framework.experience}
                    showInfo={true}
                    strokeColor="#e05809"
                  />
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
    )
}

export default Frameworks;