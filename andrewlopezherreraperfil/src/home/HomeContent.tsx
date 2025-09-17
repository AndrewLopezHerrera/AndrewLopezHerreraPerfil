import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import perfil from "../assets/general/cv_logo.png";
import "./HomeContent.css";

const HomeContent: React.FC = () => {
  const { t } = useTranslation();
  const [greeting, setGreeting] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Saludo dinámico según la hora
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12 && hour >= 6) {
        setGreeting(t("base.greetingMorning"));
      } else if (hour < 18 && hour >= 12) {
        setGreeting(t("base.greetingAfternoon"));
      } else {
        setGreeting(t("base.greetingEvening"));
      }
    };
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    setAnimate(true);
    return () => clearInterval(interval);
  }, [t]);

  return (
    <section className="hero-intro">
      <div className="hero-avatar-container">
        <img
          src={perfil}
          alt="Avatar"
          className={`hero-avatar ${animate ? "zoom-in" : ""}`}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-greeting">{greeting},</h1>
        <p className="hero-description">{t("home.introduction")}</p>
      </div>
    </section>
  );
};

export default HomeContent;