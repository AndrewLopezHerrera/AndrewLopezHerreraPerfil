import { FilePdfOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CurriculumPDF from "./CurriculumPDF";
import { useTranslation } from "react-i18next";

const CurriculumVitae: React.FC = () => {
    const { t } = useTranslation();
    return (
      <section id="downloadCVSection" className="sectionDownloadCV">
         <PDFDownloadLink document={<CurriculumPDF />} fileName="Curriculum_AndrewLopezHerrera.pdf">
            {({ loading }) => (
               <Button
                  icon={
                     <FilePdfOutlined />
                  }
                  type="primary"
                  size="large"
                  color="volcano"
                  variant="solid"
                  style={{ marginTop: 16 }}
               >
                  {loading ? t("profile.curriculumVitae.generating") : t("profile.curriculumVitae.viewCV")}
               </Button>
            )}
         </PDFDownloadLink>
      </section>
    );
}

export default CurriculumVitae;
