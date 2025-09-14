import imageProfile from "../assets/profile/profile_image.jpg"
import { useTranslation } from "react-i18next";

const Presentation : React.FC = () => {

   const { t } = useTranslation();

    return (
      <section style={{ width: "98%" }}>
         <section className="containerPresentationBar">
            <div className="presentationBar">
               <div className="spacePresentationBar"/>
               <div className="containerPresentationImage">
                  <img
                     src={imageProfile}
                     className="presentationImage"
                  />
               </div>
               <div className="containerPresentationName">
                  <label className="presentationName">
                     {t("profile.presentation.name")}
                  </label>
               </div>
            </div>
         </section>
         <section>
            <h2>{t("profile.presentation.title")}</h2>
            <p>{t("profile.presentation.biography")}</p>
         </section>
      </section>
    );
}

export default Presentation;