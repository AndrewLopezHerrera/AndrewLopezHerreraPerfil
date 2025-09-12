import { FilePdfOutlined } from "@ant-design/icons";
import { Button } from "antd";

const CurriculumVitae: React.FC = () => {
    return (
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
    );
}

export default CurriculumVitae;
