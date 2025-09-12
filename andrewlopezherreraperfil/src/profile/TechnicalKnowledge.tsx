import { Divider } from "antd";
import ProgrammingLanguage from "./ProgrammingLanguage";
import Frameworks from "./Frameworks";
import DataBases from "./DataBases";
import DevelopmentBoards from "./DevelopmentBoards";

const TechnicalKnowledge: React.FC = () => {
    return (
        <section>
         <h2 className="profileTittles">Conocimiento técnico</h2>
         <ProgrammingLanguage />
         <Divider />
         <Frameworks />
         <Divider />
         <DataBases />
         <Divider />
         <DevelopmentBoards />
      </section>
    )
}

export default TechnicalKnowledge;