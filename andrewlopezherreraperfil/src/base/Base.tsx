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
import "../App.css"
import morning from '../assets/greetings/iconoManana.png';
import afternoon from '../assets/greetings/iconoTarde.png';
import night from '../assets/greetings/iconoNoche.png';
import coffeeCup from '../assets/greetings/TazaCafeIcono.png';
import { useNavigate } from 'react-router-dom';
import i18n from "../i18n/i18n";

const { Header, Sider, Content } = Layout;

const Base: React.FC<{ frame: ReactElement }> = ({ frame }) => {
  const { t } = useTranslation();
  const navigator = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [renderContent, setRenderContent] = useState<React.ReactNode>();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getCollapsedWidth = () => {
    return window.matchMedia('(max-width: 767px)').matches ? 0 : 80;
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
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

  const giveImageGreeting = () : string => {
    const currentHour = new Date().getHours();
    if (currentHour < 12 && currentHour >= 6) {
      return morning;
    } else if ((currentHour < 15 && currentHour >= 12) || (currentHour >= 16 && currentHour < 18)) {
      return afternoon;
    } else if ((currentHour <= 23 && currentHour >= 18) || (currentHour >= 0 && currentHour < 6)) {
      return night;
    } else {
      return coffeeCup;
    }
  }

  const giveGreeting = () : string => {
    const currentHour = new Date().getHours();
    if (currentHour < 12 && currentHour >= 6) {
      return t("base.greetingMorning");
    } else if (currentHour < 18 && currentHour >= 12) {
      return t("base.greetingAfternoon");
    } else {
      return t("base.greetingEvening");
    }
  };

  useEffect(() => {
    setRenderContent(frame);
  }, [frame]);

  return (
    <Layout className='main_layout'>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        collapsedWidth={getCollapsedWidth()}
      >
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
          mode="inline"
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
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer, fontSize: 'auto' }} className='main_header'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: 64,
              height: 64,
            }}
          />
          <div>
            <Radio.Group value={"small"} onChange={(e) => changeLanguage(e.target.value)}>
              <Radio.Button value="es">{t("base.languageSpanish")}</Radio.Button>
              <Radio.Button value="en">{t("base.languageEnglish")}</Radio.Button>
            </Radio.Group>
          </div>
          <div className={`greeting ${changeVisibility() ? '' : 'hidden'}`}>
            {giveGreeting()}
            <Image
              width={40}
              src={giveImageGreeting()}
              alt="Greeting Icon"
              preview={false}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '90vh',
            width: '95%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
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