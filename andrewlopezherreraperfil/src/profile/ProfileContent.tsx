import "./ProfileContent.css"
import Presentation from "./Presentation";
import Certificates from "./Certificates";
import TechnicalKnowledge from "./TechnicalKnowledge";
import ProfessionalNetworks from "./ProfessionalNetworks";
import TechnicalInterests from "./TechnicalInterests";
import CurriculumVitae from "./CurriculumVitae";

const ProfileContent : React.FC = () => {

 return (
      <section className="mainContainerProfile">
         <Presentation />
         <TechnicalKnowledge />
         <Certificates />
         <ProfessionalNetworks />
         <TechnicalInterests />
         <CurriculumVitae />
      </section>
 )
}

export default ProfileContent;