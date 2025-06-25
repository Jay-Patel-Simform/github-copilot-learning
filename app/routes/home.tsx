import type { Route } from './+types/home';
import { Layout, Typography, Card, Row, Col, Button } from 'antd';
import { AppHeader } from '../components/layout/Header';
import './home.css';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export function meta(_args: Readonly<Route.MetaArgs>) {
  return [
    { title: 'Ant Design with React Router' },
    {
      name: 'description',
      content: 'Welcome to React Router with Ant Design!',
    },
  ];
}

export default function Home() {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content className="content">
        <div className="site-layout-content">
          <Title level={2}>Welcome to React Router with Ant Design</Title>
          <Row gutter={[16, 16]}>
            <Col span={8} className="card-col">
              <Card title="Ant Design">
                <Paragraph>
                  A design system for enterprise-level products. Create efficient and enjoyable work
                  experiences.
                </Paragraph>
                <Button
                  type="primary"
                  href="https://ant.design/docs/react/introduce"
                  target="_blank"
                >
                  Learn More
                </Button>
              </Card>
            </Col>
            <Col span={8} className="card-col">
              <Card title="React Router">
                <Paragraph>
                  React Router enables "client side routing" for React web applications.
                </Paragraph>
                <Button type="primary" href="https://reactrouter.com/docs" target="_blank">
                  Learn More
                </Button>
              </Card>
            </Col>
            <Col span={8} className="card-col">
              <Card title="Bulletproof React">
                <Paragraph>
                  A simple, scalable, and powerful architecture for building production ready React
                  applications.
                </Paragraph>
                <Button
                  type="primary"
                  href="https://github.com/alan2207/bulletproof-react"
                  target="_blank"
                >
                  Learn More
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer className="footer">Ant Design with React Router ©{new Date().getFullYear()}</Footer>
    </Layout>
  );
}
