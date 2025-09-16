import React, { useEffect, useState, type ReactElement } from 'react';
import { useTranslation } from "react-i18next";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SolutionOutlined,
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
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
  const [image, setImage] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [collapsed, setCollapsed] = useState(true);
  const [renderContent, setRenderContent] = useState<React.ReactNode>();
  const [language, setLanguage] = useState<string>("es");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getCollapsedWidth = () => {
    return window.matchMedia('(max-width: 767px)').matches ? 0 : 80;
  };

  const allowColapse = () => {
    const button = document.getElementById("buttonColapse");
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (button) {
      button.style.display = "inline-flex";
    }
      return true;
    }
    if (button) {
      button.style.display = "none";
    }
    return false;
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  const [isMobile] = useState<boolean>(window.innerWidth <= 767);

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
      default:
        navigator('/');
        break;
    }
  }

  const changeVisibility = () => {
    if(!isMobile || (isMobile && collapsed)) {
      return true;
    } 
    return false;
  }

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
        collapsed={collapsed && allowColapse()}
        width={250}
        collapsedWidth={getCollapsedWidth()}
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