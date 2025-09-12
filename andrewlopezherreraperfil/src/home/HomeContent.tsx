import { useTranslation } from "react-i18next";

const HomeContent : React.FC = () => {
    const { t } = useTranslation();
            
    return (
        <section>
            <h1>{t("home.title")}</h1>
            <p>{t("home.introduction")}</p>
        </section>
    );
}

export default HomeContent;