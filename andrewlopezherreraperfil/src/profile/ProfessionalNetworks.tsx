import { Card, Col, Row } from "antd";
import ModuleImagePlatforms from "./ModuleImagePlatforms";
import Meta from "antd/es/card/Meta";

const ProfessionalNetworks : React.FC = () => {
    return (
        <section>
         <h2 className="profileTittles">Redes Profesionales</h2>
         <Row justify={"space-around"} gutter={[48, 24]} className="rowSocials">
            <Col span={9} xs={24} sm={24} md={12} lg={12} xl={12}>
               <Card
                  className="cardSocials"
                  cover={
                     <div className="containerImageSocials">
                        <img
                           src={ModuleImagePlatforms.github}
                           alt="Github Logo"
                           className="imageSocials"
                        />
                     </div>
                  }
                  actions={[
                     <a href="">
                        Ir a Github
                     </a>
                  ]}
               >
                  <Meta
                     title="AndrewLopezHerrera"
                     description="Puedes observar los repositorios de los diferentes proyectos que he hecho en la carrera."
                  />
               </Card>
            </Col>
            <Col span={9} xs={24} sm={24} md={12} lg={12} xl={12}>
               <Card
                  className="cardSocials"
                  cover={
                     <div className="containerImageSocials">
                        <img
                           src={ModuleImagePlatforms.linkedin}
                           alt="LinkedIn Logo"
                           className="imageSocials"
                        />
                     </div>
                  }
                  actions={[
                     <a href="www.linkedin.com/in/andrew-lopez-herrera-6630ab2a3">
                        Ir a LinkedIn
                     </a>
                  ]}
               >
                  <Meta
                     title="Andrew Lopez Herrera"
                     description="Se puede ver el perfil profesional de LinkedIn, así como las habilidades que manejo."
                  />
               </Card>
            </Col>
         </Row>
      </section>
    );
}

export default ProfessionalNetworks;