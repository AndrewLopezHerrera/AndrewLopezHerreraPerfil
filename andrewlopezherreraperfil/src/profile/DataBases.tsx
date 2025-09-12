import { Avatar, List, Progress } from "antd";
import ModuleImageDataBases from "./ModuleImageDataBases";

const DataBases : React.FC = () => {
    return (
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
    )
}
  
export default DataBases;