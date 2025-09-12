import { Avatar, List, Progress } from "antd";
import ModuleImageProgrammingLanguages from "./ModuleImageProgrammingLanguages";

const ProgrammingLanguage : React.FC = () => {
    return (
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
    );
}

export default ProgrammingLanguage;