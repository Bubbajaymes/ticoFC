import { Flex, Layout } from 'antd';
import './App.css';

import AppHeader from './components/common/header';
import AppHome from './pages/home';
import AppFooter from './components/common/footer';
import Copyright from './components/common/copyright';

const { Header, Footer, Content } = Layout;



const headerStyle = {
  textAlign: 'center',
  color: '',
  height: 70,
  paddingInline: 38,
  lineHeight: '54px',
  backgroundColor: 'rgba(253, 234, 65, 0.767)',
};



const footerStyle = {
  textAlign: '',
  color: '',
  backgroundColor: '#f8f8cc',
};




function App() {
  return (

    <Flex gap="middle" wrap="wrap">
        <Layout className='App'>
            <Header style={headerStyle}>
                <AppHeader />
            </Header>
            <Content>
                <AppHome />
            </Content>
            <Footer style={footerStyle}>
              <AppFooter />
              <Copyright />
            </Footer>

        </Layout>
    </Flex>
  );
}

export default App;
