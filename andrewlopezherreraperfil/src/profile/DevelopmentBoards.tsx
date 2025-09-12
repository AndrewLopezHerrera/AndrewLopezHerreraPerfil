import { Avatar, List, Progress } from "antd";
import ModuleImageDevelopmentBoards from "./ModuleImageDevelopmentBoards";

const DevelopmentBoards : React.FC = () => {
    return (
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
    )
}
  
export default DevelopmentBoards;