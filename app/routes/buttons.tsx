import React from 'react';
import { Layout, Typography, Space, Divider } from 'antd';
import { AppHeader } from '../components/layout/Header';
import { GradientButton } from '../components/common/GradientButton';
import './buttons.css';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function ButtonDemo() {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content className="content">
        <div className="content-container">
          <Title level={2}>Gradient Button Demo</Title>
          <Paragraph>
            This page demonstrates the custom gradient buttons with different status variants.
          </Paragraph>

          <Divider orientation="left">Button Statuses</Divider>
          <Space wrap size="large">
            <GradientButton status="primary">Primary Button</GradientButton>
            <GradientButton status="success">Success Button</GradientButton>
            <GradientButton status="error">Error Button</GradientButton>
            <GradientButton status="warning">Warning Button</GradientButton>
            <GradientButton status="info">Info Button</GradientButton>
          </Space>

          <Divider orientation="left">Button Sizes</Divider>
          <Space wrap size="large">
            <GradientButton status="primary" size="large">
              Large Button
            </GradientButton>
            <GradientButton status="primary">Default Button</GradientButton>
            <GradientButton status="primary" size="small">
              Small Button
            </GradientButton>
          </Space>

          <Divider orientation="left">Loading & Disabled State</Divider>
          <Space wrap size="large">
            <GradientButton status="primary" loading>
              Loading
            </GradientButton>
            <GradientButton status="primary" disabled>
              Disabled
            </GradientButton>
          </Space>

          <Divider orientation="left">Shape & Icon Buttons</Divider>
          <Space wrap size="large">
            <GradientButton status="primary" shape="circle">
              A
            </GradientButton>
            <GradientButton status="success" shape="round">
              Round
            </GradientButton>
          </Space>
        </div>
      </Content>
      <Footer className="footer">Gradient Button Demo ©{new Date().getFullYear()}</Footer>
    </Layout>
  );
}
