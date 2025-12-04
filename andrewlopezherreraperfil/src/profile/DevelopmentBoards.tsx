import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import developmentBoards from "../information/developmentboards.json"
import Meta from "antd/es/card/Meta";

const DevelopmentBoards : React.FC = () => {
      const { t } = useTranslation();
    return (
      <section>
            <h3>{t("profile.technicalknowledge.developmentBoards.title")}</h3>
            <Row gutter={[32, 32]} justify="center" style={{ width: "100%", margin: 0 }}>
               {developmentBoards.map((developmentBoard) => (
                  <Col
                     key={developmentBoard.name}
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
                           alt={developmentBoard.name}
                           src={developmentBoard.image}
                           style={{ width: "100%", height: 180, objectFit: "contain" }}
                        />
                     }
                     >
                     <Meta
                        title={developmentBoard.name}
                     />
                     </Card>
                  </Col>
               ))}
               </Row>
         </section>
    )
}
  
export default DevelopmentBoards;