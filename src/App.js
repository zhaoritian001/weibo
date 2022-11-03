import app from './app.module.css'
import HeaderPage from '../src/components/Header'
import { Layout } from 'antd'
import ContentPage from '../src/components/Content'
// import Footer from '../src/components/Footer'
const { Header, Footer, Content } = Layout;
function App() {
  return (
      <Layout>
          <Header className={app.header}>
              <HeaderPage />
          </Header>
          <Content className={app.content}>
              <ContentPage />
          </Content>
          <Footer  className={app.footer}>Footer</Footer>
      </Layout>
  );
}

export default App;
