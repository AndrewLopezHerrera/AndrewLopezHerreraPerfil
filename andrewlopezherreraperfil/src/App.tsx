import React, { useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SolutionOutlined,
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Divider, Image } from 'antd';
import './App.css'

import morning from './assets/greetings/iconoManana.png';
import afternoon from './assets/greetings/iconoTarde.png';
import night from './assets/greetings/iconoNoche.png';
import coffeeCup from './assets/greetings/TazaCafeIcono.png';
import Profile from './profile/Profile';
import Home from './home/Home';
import PersonalProjects from './personalProjects/PersonalProjects';
import UniversityProjects from './universityProjects/UniversityProjects';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [page, setPage] = useState<string>('1');
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getCollapsedWidth = () => {
    return window.matchMedia('(max-width: 767px)').matches ? 0 : 80;
  };

  const [isMobile] = useState<boolean>(window.innerWidth <= 767);

  const renderContent = () => {
    switch (page) {
      case '1':
        return <Home />;
      case '2':
        return <Profile />;
      case '3':
        return <UniversityProjects />;
      case '4':
        return <PersonalProjects />;
      default:
        return <div>Page not found</div>;
    }
  };

  const changeContent = (key: string) => {
    setPage(key);
    setCollapsed(true);
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
      return '¡Buenos días!\t';
    } else if (currentHour < 18 && currentHour >= 12) {
      return '¡Buenas tardes!\t';
    } else {
      return '¡Buenas noches!\t';
    }
  };

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
              label: 'Inicio',
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
              label: 'Perfil',
            },
            {
              key: '3',
              icon: <ProjectOutlined />,
              label: 'Proyectos universitarios',
            },
            {
              key: '4',
              icon: <SolutionOutlined />,
              label: 'Proyectos personales',
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
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;