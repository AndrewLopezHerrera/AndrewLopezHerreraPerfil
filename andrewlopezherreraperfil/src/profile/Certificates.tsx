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
                     xs={24}   // 1 card por fila en celular
                     sm={12}   // 2 cards por fila en tablets
                     md={8}    // 3 cards por fila en PC y pantallas grandes
                     lg={8}
                     xl={8}
                     xxl={8}
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
                              shape="round"
                              href={certificate.pdf}
                              icon={<FilePdfOutlined />}
                              className="buttonViewCertificate"
                           >
                              {t("profile.certificates.viewCertificate")}
                           </Button>
                        ]}
                     >
                        <Meta
                           title={t("profile.certificates.courses." + certificate.name + ".title")}
                           description={t("profile.certificates.courses." + certificate.name + ".description")}
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