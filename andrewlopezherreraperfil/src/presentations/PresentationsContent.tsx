import React from "react";
import { Button, Card } from 'antd';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type PresentationsInterface from "./PresentationInterface";
import presentationsData from "../information/presentations.json";
import { EyeOutlined } from "@ant-design/icons";
import "./Presentations.css";

const { Meta } = Card;

const PresentationsContent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const buildPresentations = (): PresentationsInterface[] => {
    return presentationsData.map((presentation) => ({
      title: t(`presentations.presentations.${presentation.id}.title`),
      description: t(`presentations.presentations.${presentation.id}.description`),
      completeDescription: "",
      image: presentation.image,
      id: presentation.id,
      video: presentation.video,
      documentPDF: "",
      documentPresentation: "",
      photoEvent: [],
    }));
  };

  return (
    <div className="mainContainerPresentations">
      <h1 className="titleContainerPresentations">{t("presentations.title")}</h1>
      <div className="descriptionContainerPresentations">
        <p>{t("presentations.description")}</p>
      </div>
      <div className="containerCardsPresentations">
        {buildPresentations().map((presentation) => (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                draggable={false}
                alt={presentation.title}
                src={presentation.image}
              />
            }
            actions={[
              <Button
                color="volcano"
                variant="text"
                icon={<EyeOutlined />}
                onClick={() => navigate(`/presentations/${presentation.id}`)}
              >
              </Button>,
            ]}
          >
            <Meta
              title={presentation.title}
              description={presentation.description}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PresentationsContent;