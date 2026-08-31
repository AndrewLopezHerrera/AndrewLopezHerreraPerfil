import react from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import type PresentationsInterface from "./PresentationInterface";
import presentationsData from "../information/presentations.json";
import Base from "../base/Base";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FilePdfOutlined } from "@ant-design/icons";

const PresentationInformationAux: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const presentation = presentationsData.find((p) => p.id === id);

  if (!presentation) {
    return <div>{t("presentations.presentationNotFound")}</div>;
  }
  const presentationInfo: PresentationsInterface = {
    title: t(`presentations.presentations.${presentation.id}.title`),
    description: t(`presentations.presentations.${presentation.id}.description`),
    completeDescription: t(`presentations.presentations.${presentation.id}.completeDescription`),
    image: presentation.image,
    id: presentation.id,
    video: presentation.video,
    documentPDF: presentation.documentPDF,
    documentPresentation: presentation.documentPresentation,
    photoEvent: presentation.photoEvent,
  };

  return (
    <div className="mainContainerPresentationSelected">
      <div className="containerTitleDescriptionPresentations">
        <h1 className="titleDescriptionPresentation">{presentationInfo.title}</h1>
      </div>
      <div>
        <p>{presentationInfo.completeDescription}</p>
        <div className="containerCardsPresentations">
          {presentationInfo.photoEvent.map((photo, index) => (
            <Card
              hoverable
              variant="borderless"
              style={{ height: 300, width: 300, margin: 10 }}
              cover={
                <img
                  draggable={false}
                  alt="example"
                  src={photo.image}
                  className="photosPresentations"
                />
              }
            >
              <Meta description={t(`presentations.presentations.${presentationInfo.id}.photos.${photo.id}.title`)} />
            </Card>
          ))}
        </div>
      </div>
      <div className="frameVideoPresentation">
        <iframe
          width="100%"
          height="100%"
          src={presentation.video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="containerButtonsPresentationSelected">
        {presentation.documentPDF && (
          <Button
            icon={
              <FilePdfOutlined />
            }
            variant="solid"
            color="volcano"
            onClick={() => window.open(presentation.documentPDF, "_blank")}>
            {t("presentations.buttonDocument")}
          </Button>
        )}
        {presentation.documentPresentation && (
          <Button
            icon={
              <FilePdfOutlined />
            }
            variant="solid"
            color="magenta"
            onClick={() => window.open(presentation.documentPresentation, "_blank")}>
            {t("presentations.buttonPresentation")}
          </Button>
        )}
      </div>
    </div>
  );
};

const PresentationInformation: React.FC = () => {
  return (
    <Base frame={<PresentationInformationAux />} />
  );
}

export default PresentationInformation;