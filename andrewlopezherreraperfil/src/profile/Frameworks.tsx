import { Avatar, List, Progress } from "antd";
import ModuleImageFrameworks from "./ModuleImageFrameworks";

const Frameworks : React.FC = () => {
    return (
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
    )
}

export default Frameworks;