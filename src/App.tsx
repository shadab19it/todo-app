import React, {FC}from 'react';
import './App.scss';
import Todos from './component/Todos/Todos';
import {Layout,Menu,Icon} from 'antd';

const {Header,Content,Footer,Sider}= Layout;

const App:FC =()=>{
  return(
    <Layout className="App">
      <Header><h1>This is a header</h1></Header>
      <Layout className="main-content">
        <Content> <Todos /> </Content>
      </Layout> 
      <Footer><h1>This is a Footer</h1></Footer>
    </Layout>
  );
}

export default App;
