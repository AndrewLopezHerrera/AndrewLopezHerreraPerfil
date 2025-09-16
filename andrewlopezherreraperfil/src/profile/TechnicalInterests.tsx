import { useTranslation } from "react-i18next";

const TechnicalInterests: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section style={{ width: '98%' }}>
            <h2 className="profileTittles">{t("profile.technicalInterests.title")}</h2>
            <ul>
                {
                    (t("profile.technicalInterests.list", { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </section>
    );
}

export default TechnicalInterests;