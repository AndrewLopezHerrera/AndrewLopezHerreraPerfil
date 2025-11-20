import { Collapse } from "antd";
import ProgrammingLanguage from "./ProgrammingLanguage";
import Frameworks from "./Frameworks";
import DataBases from "./DataBases";
import DevelopmentBoards from "./DevelopmentBoards";
import { useTranslation } from "react-i18next";

const TechnicalKnowledge: React.FC = () => {
    const { t } = useTranslation();
    const items = [
    {
      key: '1',
      label: t("profile.technicalknowledge.programmingLanguages.title"),
      children: <ProgrammingLanguage />,
    },
    {
      key: '2',
      label: t("profile.technicalknowledge.frameworks.title"),
      children: <Frameworks />,
    },
    {
      key: '3',
      label: t("profile.technicalknowledge.databases.title"),
      children: <DataBases />,
    },
    {
      key: '4',
      label: t("profile.technicalknowledge.developmentBoards.title"),
      children: <DevelopmentBoards />,
    },
  ];

  return (
    <section style={{ width: "98%"}}>
      <h2 className="profileTittles">{t("profile.technicalknowledge.title")}</h2>
      <Collapse accordion items={items}/>
    </section>
  );
};

export default TechnicalKnowledge;