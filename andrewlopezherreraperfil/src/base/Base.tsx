import React, { useEffect, useState, type ReactElement } from 'react';
import { useTranslation } from "react-i18next";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  CommentOutlined,
  SolutionOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Divider, Image, Radio } from 'antd';
import morning from '../assets/greetings/iconoManana.png';
import afternoon from '../assets/greetings/iconoTarde.png';
import night from '../assets/greetings/iconoNoche.png';
import coffeeCup from '../assets/greetings/TazaCafeIcono.png';
import { useNavigate } from 'react-router-dom';
import i18n from "../i18n/i18n";
import "../App.css"

const { Header, Sider, Content } = Layout;

const Base: React.FC<{ frame: ReactElement }> = ({ frame }) => {
  const { t } = useTranslation();
  const navigator = useNavigate();
  const [image, setImage] = useState<string>(morning);
  const [greeting, setGreeting] = useState<string>("");
  const [collapsed, setCollapsed] = useState(true);
  const [renderContent, setRenderContent] = useState<React.ReactNode>();
  const [language, setLanguage] = useState<string>("es");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 767);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Escucha cambios de tamaño para modo móvil
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    // Compatibilidad con navegadores antiguos
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }
    setIsMobile(mediaQuery.matches);
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setCollapsed(false);
    }
  }, [isMobile]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  const changeContent = (key: string) => {
    switch (key) {
      case '1':
        navigator('/');
        break;
      case '2':
        navigator('/profile');
        break;
      case '3':
        navigator('/universityProjects');
        break;
      case '4':
        navigator('/personalProjects');
        break;
      case '5':
        navigator('/comments');
        break;
      default:
        navigator('/');
        break;
    }
  }

  const changeVisibility = () => {
    if (!isMobile) return true; // Desktop siempre visible
    return collapsed; // En móvil, solo visible cuando el sider está colapsado
  };

  const giveImageGreeting = () : void => {
    const currentHour = new Date().getHours();
    if (currentHour < 12 && currentHour >= 6) {
      setImage(morning);
    } else if ((currentHour < 15 && currentHour >= 12) || (currentHour >= 16 && currentHour < 18)) {
      setImage(afternoon);
    } else if ((currentHour <= 23 && currentHour >= 18) || (currentHour >= 0 && currentHour < 6)) {
      setImage(night);
    } else {
      setImage(coffeeCup);
    }
  }

  const giveGreeting = () : void => {
    const currentHour = new Date().getHours();
    if (currentHour < 12 && currentHour >= 6) {
      setGreeting(t("base.greetingMorning"));
    } else if (currentHour < 18 && currentHour >= 12) {
      setGreeting(t("base.greetingAfternoon"));
    } else {
      setGreeting(t("base.greetingEvening"));
    }
  };

  useEffect(() => {
    setRenderContent(frame);
    setLanguage(i18n.language);
    const interval = setInterval(() => {
      giveImageGreeting();
      giveGreeting();
    }, 1000);
    giveImageGreeting();
    giveGreeting();
    return () => clearInterval(interval);
  }, [frame]);

  return (
    <Layout className='main_layout'>
      <Sider
        trigger={null}
        collapsed={isMobile ? collapsed : false}
        width={250}
        collapsedWidth={0}
        className='main_sider'
      >
        <div style={{ width: "90%" }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={(e) => changeContent(e.key)}
            className='menu_uno'
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: t("base.home"),
              },
            ]}
          />
          <Divider size="small" />
          <Menu
            theme="dark"
            onClick={(e) => changeContent(e.key)}
            items={[
              {
                key: '2',
                icon: <UserOutlined />,
                label: t("base.profile"),
              },
              {
                key: '3',
                icon: <ProjectOutlined />,
                label: t("base.universityProjects"),
              },
              {
                key: '4',
                icon: <SolutionOutlined />,
                label: t("base.personalProjects"),
              },
              {
                key: '5',
                icon: <CommentOutlined />,
                label: t("base.comments"),
              }
            ]}
          />
        </div>
        <div style={{ bottom: 0, width: '100%', padding: '10px 0', textAlign: 'center' }}>
          <Radio.Group value={language} onChange={(e) => changeLanguage(e.target.value)}>
            <Radio.Button value="es">{t("base.languageSpanish")}</Radio.Button>
            <Radio.Button value="en">{t("base.languageEnglish")}</Radio.Button>
          </Radio.Group>
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer, fontSize: 'auto' }} className='main_header'>
          {isMobile && (
            <Button
              id='buttonColapse'
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 64,
                height: 64,
              }}
            />
          )}
          <div className={`greeting ${changeVisibility() ? '' : 'hidden'}`}>
            {greeting}
            <Image
              width={40}
              src={image}
              alt="Greeting Icon"
              preview={false}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: 16,
            backgroundColor: 'white',
            borderRadius: borderRadiusLG,
            padding: 10
          }}
        >
          <div className={`div_content ${changeVisibility() ? '' : 'hidden'}`}>
            {renderContent}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Base;