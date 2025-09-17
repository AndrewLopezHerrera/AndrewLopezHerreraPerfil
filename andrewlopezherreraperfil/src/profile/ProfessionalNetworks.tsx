import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import networksJSON from "../information/professionalnetworks.json";
import { Button } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const ProfessionalNetworks : React.FC = () => {
   const { t } = useTranslation();
   return (
      <section style={{ width: "98%"}}>
         <h2 className="profileTittles">{t("profile.professionalnetworks.title")}</h2>
         <Row gutter={[32, 32]} justify="center" style={{ width: "100%", margin: 0 }}>
            {
               networksJSON.map((network) => (
                  <Col
                     xs={24}   // 1 card por fila en móvil
                     sm={24}   // 1 card por fila en tablets pequeñas
                     md={12}   // 2 cards por fila en PC y tablets grandes
                     lg={12}
                     xl={12}
                     xxl={12}
                     key={network.name}
                  >
                     <Card
                        hoverable
                        style={{ width: "100%", margin: "0 auto" , paddingTop: 10}}
                        cover={
                           <img
                              alt="example"
                              src={network.icon}
                              style={{ width: "100%", height: 180, objectFit: "contain" }}
                           />
                        }
                        actions={[
                           <Button
                              icon={
                                 <FilePdfOutlined />
                              }
                              size="large"
                              color="volcano"
                              variant="link"
                              onClick={() => window.open(network.url, "_blank")}
                           >
                              {t("profile.professionalnetworks.viewNetwork")}
                           </Button>
                        ]}
                     >
                        <Meta
                           title={network.name}
                           description={t("profile.professionalnetworks." + network.name + ".description")}
                           style={{ color: "black"}}
                        />
                     </Card>
                  </Col>
               ))
            }
         </Row>
      </section>
    );
}

export default ProfessionalNetworks;