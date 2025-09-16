import { FilePdfOutlined } from "@ant-design/icons";
import { Button } from "antd";

const CurriculumVitae: React.FC = () => {
    return (
         <section id="downloadCVSection" className="sectionDownloadCV">
         <Button
            icon={
               <FilePdfOutlined />
            }
            href=""
            type="primary"
            size="large"
            color="volcano"
            variant="solid"
         >
            Descargar CV
         </Button>
      </section>
    );
}

export default CurriculumVitae;
