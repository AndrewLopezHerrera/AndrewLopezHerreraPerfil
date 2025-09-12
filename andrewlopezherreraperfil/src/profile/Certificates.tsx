import { Avatar, Button, List } from "antd"
import ModuleImageInstitutes from "./ModuleImageInstitutes"
import { FilePdfOutlined } from "@ant-design/icons"

const Certificates : React.FC = () => {
 return (
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
 )
}

export default Certificates;