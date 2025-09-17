import { Button, Card, Col, Row } from "antd"
import { FilePdfOutlined } from "@ant-design/icons"
import Meta from "antd/es/card/Meta"
import certificatesJSON from "../information/certificates.json"
import { useTranslation } from "react-i18next"

const Certificates : React.FC = () => {
   const { t } = useTranslation();

 return (
    <section style={{ width: "98%"}}>
         <h2 className="profileTittles">{t("profile.certificates.title")}</h2>
         <Row gutter={[32, 32]} justify="center" style={{ width: "100%", margin: 0 }}>
            {
               certificatesJSON.map((certificate) => (
                  <Col
                     xs={24}   // 1 card por fila en móvil
                     sm={24}   // 1 card por fila en tablets pequeñas
                     md={12}   // 2 cards por fila en PC y tablets grandes
                     lg={12}
                     xl={12}
                     xxl={12}
                     key={certificate.name}
                  >
                     <Card
                        hoverable
                        style={{ width: "100%", margin: "0 auto" , paddingTop: 10}}
                        cover={
                           <img
                              alt="example"
                              src={certificate.instituteImage}
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
                              onClick={() => window.open(certificate.pdf, "_blank")}
                           >
                              {t("profile.certificates.viewCertificate")}
                           </Button>
                        ]}
                     >
                        <Meta
                           title={t("profile.certificates.courses." + certificate.name + ".title")}
                           description={t("profile.certificates.courses." + certificate.name + ".description")}
                           style={{ color: "black"}}
                        />
                     </Card>
                  </Col>
               ))
            }
         </Row>
      </section>
   )
}

export default Certificates;