import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import { Outlet, Link } from "react-router-dom";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="home"><Link to="/">Home</Link> |{" "}</Menu.Item>
            <Menu.Item key="game"><Link to="/game">Game</Link></Menu.Item>
            <Menu.Item key="mod"><Link to="/mod">Mod</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Game name</Breadcrumb.Item>
            <Breadcrumb.Item>Mod name</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Luis Sanchez ©2021</Footer>
      </Layout>,
    </div>
  );
}

export default App;
