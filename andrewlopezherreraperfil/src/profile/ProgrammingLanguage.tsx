import { Card, Col, Progress, Row } from "antd";
import { useTranslation } from "react-i18next";
import programmingLanguageJSON from "../information/programmingLanguages.json";
import Meta from "antd/es/card/Meta";

const ProgrammingLanguage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ width: "100%" }}>
      <h3>{t("profile.technicalknowledge.programmingLanguages.title")}</h3>
      <Row gutter={[32, 32]} justify="center" style={{ width: "100%", margin: 0 }}>
        {programmingLanguageJSON.map((programmingLanguage) => (
          <Col
            key={programmingLanguage.name}
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
                  alt={programmingLanguage.name}
                  src={programmingLanguage.image}
                  style={{ width: "100%", height: 180, objectFit: "contain" }}
                />
              }
            >
              <Meta
                title={programmingLanguage.name}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProgrammingLanguage;