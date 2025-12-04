import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import dataBasesJSON from "../information/databases.json";
import Meta from "antd/es/card/Meta";

const DataBases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ width: "100%" }}>
      <h3>{t("profile.technicalknowledge.databases.title")}</h3>
      <Row gutter={[32, 32]} justify="center" style={{ width: "100%", margin: 0 }}>
        {dataBasesJSON.map((dataBase) => (
          <Col
            key={dataBase.name}
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
                  alt={dataBase.name}
                  src={dataBase.image}
                  style={{ width: "100%", height: 180, objectFit: "contain" }}
                />
              }
            >
              <Meta
                title={dataBase.name}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default DataBases;