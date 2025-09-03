import { Avatar, Button, Card, Col, Divider, List, Progress, Row } from "antd";
import imageProfile from "../assets/profile/profile_image.jpg"
import "./Profile.css"
import ModuleImageProgrammingLanguages from "./ModuleImageProgrammingLanguages";
import ModuleImageDataBases from "./ModuleImageDataBases";
import ModuleImageDevelopmentBoards from "./ModuleImageDevelopmentBoards";
import ModuleImageFrameworks from "./ModuleImageFrameworks";
import ModuleImageInstitutes from "./ModuleImageInstitutes";
import Meta from "antd/es/card/Meta";
import { FilePdfOutlined } from "@ant-design/icons";
import ModuleImagePlatforms from "./ModuleImagePlatforms";

const Profile : React.FC = () => {

 return (
    <section className="mainContainerProfile">
      <div className="containerPresentationBar">
         <div className="presentationBar">
            <div className="spacePresentationBar"/>
            <div className="containerPresentationImage">
               <img
                  src={imageProfile}
                  className="presentationImage"
               />
            </div>
            <div className="containerPresentationName">
               <label className="presentationName">
                  Andrew Denilson López Herrera
               </label>
            </div>
         </div>
      </div>
      <section>
         <h2>Biografía</h2>
         <p>Hola, soy Andrew Denilson López Herrera, un apasionado por la tecnología y el desarrollo de software. Me encanta aprender sobre nuevas herramientas y lenguajes de programación, y siempre estoy buscando mejorar mis habilidades.</p>
      </section>
      <section>
         <h2 className="profileTittles">Conocimiento técnico</h2>
         <section>
            <h3>Lenguajes de programación</h3>
            <List
               itemLayout="horizontal"
            >
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.python} />}
                     title={<label>Python</label>}
                     description={
                       <div>
                         <p>Un lenguaje de programación interpretado, de alto nivel y con semántica dinámica.</p>
                         <div>
                           <label><strong>Experiencia:</strong></label>
                           <Progress percent={90} showInfo={true} strokeColor="#e05809" />
                         </div>
                       </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.java} />}
                     title={<label>Java</label>}
                     description={
                        <div>
                           <p>"Un lenguaje de programación de alto nivel, orientado a objetos y diseñado para tener la menor cantidad de dependencias de implementación."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={85} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.typescript} />}
                     title={<label>TypeScript</label>}
                     description={
                        <div>
                           <p>"Un superconjunto tipado de JavaScript que compila a JavaScript puro."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={75} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.javascript} />}
                     title={<label>JavaScript</label>}
                     description={
                        <div>
                           <p>"Un lenguaje de programación interpretado, de alto nivel y con tipado dinámico."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={80} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.asm} />}
                     title={<label>Assembly</label>}
                     description={
                        <div>
                           <p>"Utilizado en para crear compiladores y programas en Raspberry Pi."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={70} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.prolog} />}
                     title={<label>Prolog</label>}
                     description={
                        <div>
                           <p>"Un lenguaje de programación lógica asociado con la inteligencia artificial y la lingüística computacional."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={60} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.c} />}
                     title={<label>C</label>}
                     description={
                        <div>
                           <p>"Un lenguaje de programación de propósito general que es extremadamente popular en el desarrollo de sistemas."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={85} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageProgrammingLanguages.cpp} />}
                     title={<label>C++</label>}
                     description={
                        <div>
                           <p>"Un lenguaje de programación de propósito general que es una extensión de C y que incluye programación orientada a objetos."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={80} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
            </List>
         </section>
         <Divider />
         <section>
            <h3>Frameworks</h3>
            <List
               itemLayout="horizontal"
            >
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageFrameworks.react} />}
                     title={<label>React</label>}
                     description={
                        <div>
                           <p>"Una biblioteca de JavaScript para construir interfaces de usuario."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={75} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageFrameworks.deno} />}
                     title={<label>Deno</label>}
                     description={
                        <div>
                           <p>"Un entorno de ejecución para JavaScript y TypeScript."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={70} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageFrameworks.tauri} />}
                     title={<label>Tauri</label>}
                     description={
                        <div>
                           <p>"Un marco para construir aplicaciones de escritorio utilizando tecnologías web."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={60} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageFrameworks.node} />}
                     title={<label>Node.js</label>}
                     description={
                        <div>
                           <p>"Un entorno de ejecución para JavaScript en el lado del servidor."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={85} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageFrameworks.next} />}
                     title={<label>Next.js</label>}
                     description={
                        <div>
                           <p>"Un marco de trabajo para aplicaciones web basado en React."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={80} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
            </List>
         </section>
         <Divider />
         <section>
            <h3>Bases de Datos</h3>
            <List
               itemLayout="horizontal"
            >
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageDataBases.postgresql} />}
                     title={<label>PostgreSQL</label>}
                     description={
                        <div>
                           <p>"Un sistema de gestión de bases de datos objeto-relacional."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={75} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageDataBases.sqlserver} />}
                     title={<label>SQL Server</label>}
                     description={
                        <div>
                           <p>"Un sistema de gestión de bases de datos relacional desarrollado por Microsoft."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={70} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
            </List>
         </section>
         <Divider />
         <section>
            <h3>Placas de desarrollo</h3>
            <List
               itemLayout="horizontal"
            >
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageDevelopmentBoards.raspberrypi} />}
                     title={<label>Raspberry Pi</label>}
                     description={
                        <div>
                           <p>"Una placa de desarrollo de bajo costo y tamaño reducido."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={85} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageDevelopmentBoards.arduino} />}
                     title={<label>Arduino</label>}
                     description={
                        <div>
                           <p>"Una plataforma de hardware libre para la creación de proyectos interactivos."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={90} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageDevelopmentBoards.espressif} />}
                     title={<label>ESP32</label>}
                     description={
                        <div>
                           <p>"Un microcontrolador de bajo costo con capacidades Wi-Fi y Bluetooth."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={80} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={ModuleImageDevelopmentBoards.orangepi} />}
                     title={<label>Orange Pi</label>}
                     description={
                        <div>
                           <p>"Una placa de desarrollo de bajo costo y tamaño reducido."</p>
                           <div>
                              <label><strong>Experiencia:</strong></label>
                              <Progress percent={75} showInfo={true} strokeColor="#e05809" />
                           </div>
                        </div>
                     }
                  />
               </List.Item>
            </List>
         </section>
      </section>
      <section>
         <h2 className="profileTittles">Certificados</h2>
         <List
            itemLayout="horizontal"
         >
            <List.Item>
               <List.Item.Meta
                  avatar={<Avatar src={ModuleImageInstitutes.tecLogo} />}
                  title={<label>Instituto Tecnológico de Costa Rica - Introducción a la Programación</label>}
                  description={
                     <div>
                        <p>Certificado por ofrecer tutorías de Introducción a la Programación.</p>
                       <Button
                          type="primary"
                          shape="round"
                          href="Certificado_Tutorías_Introducción_Programación.pdf"
                          icon={<FilePdfOutlined />}
                       >
                          Ver certificado
                       </Button>
                     </div>
                  }
               />
            </List.Item>
            <List.Item>
               <List.Item.Meta
                  avatar={<Avatar src={ModuleImageInstitutes.tecLogo} />}
                  title={<label>Instituto Tecnológico de Costa Rica - Taller de Programación</label>}
                  description={
                     <div>
                        <p>Certificado por ofrecer tutorías de Taller a la Programación.</p>
                       <Button
                          type="primary"
                          shape="round"
                          href="Certificado_Tutorías_Taller_Programación.pdf"
                          icon={<FilePdfOutlined />}
                       >
                          Ver certificado
                       </Button>
                     </div>
                  }
               />
            </List.Item>
            <List.Item>
               <List.Item.Meta
                  avatar={<Avatar src={ModuleImageInstitutes.tecLogo} />}
                  title={<label>Instituto Tecnológico de Costa Rica - Elementos de Computación</label>}
                  description={
                     <div>
                        <p>Certificado por ofrecer tutorías de Elementos de Computación.</p>
                       <Button
                          type="primary"
                          shape="round"
                          href="Certificado_Tutorías_Elementos_Computación.pdf"
                          icon={<FilePdfOutlined />}
                       >
                          Ver certificado
                       </Button>
                     </div>
                  }
               />
            </List.Item>
            <List.Item>
               <List.Item.Meta
                  avatar={<Avatar src={ModuleImageInstitutes.tecLogo} />}
                  title={<label>Instituto Tecnológico de Costa Rica - Atención de Necesidades Emocionales y Académicas</label>}
                  description={
                     <div>
                        <p>Certificado por capacitarme Atención de Necesidades Emocionales y Académicas</p>
                       <Button
                          type="primary"
                          shape="round"
                          href="Certificado_Capacitación_Tutorías.pdf"
                          icon={<FilePdfOutlined />}
                       >
                          Ver certificado
                       </Button>
                     </div>
                  }
               />
            </List.Item>
         </List>
      </section>
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
      <section>
         <h2 className="profileTittles">Intereses técnicos</h2>
         <ul>
            <li>Robótica en el ámbito de la medicina para mejorar la atención al paciente.</li>
            <li>Creación de lenguajes de programación como una forma de conservar lenguas indígenas.</li>
            <li>Inteligencia artificial como herramienta para la busqueda de nidos de tortugas para su preservación.</li>
            <li>Internet de las cosas para automatizar procesos de los hogares así como proporcionarles información en tiempo real.</li>
         </ul>
      </section>
      <section id="downloadCVSection" className="sectionDownloadCV">
         <Button
            icon={
               <FilePdfOutlined />
            }
            size="large"
            type="primary"
         >
            Descargar CV
         </Button>
      </section>
   </section>
 )
}

export default Profile;