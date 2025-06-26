import React from 'react';
import { Layout, Typography, Space, Divider } from 'antd';
import { AppHeader } from '../components/layout/Header';
import { GradientButton } from '../components/common/GradientButton';
import { AlertDialog } from '../components/common/AlertDialog';
import './buttons.css';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function ButtonDemo() {
  const handleDeleteConfirm = () => {
    console.log('Item deleted!');
    // Add your delete logic here
  };

  const handleSaveConfirm = () => {
    console.log('Changes saved!');
    // Add your save logic here
  };

  return (
    <Layout className="layout">
      <AppHeader />
      <Content className="content">
        <div className="content-container">
          <Title level={2}>Component Demo</Title>
          <Paragraph>
            This page demonstrates the custom gradient buttons and AlertDialog components using the
            composition pattern.
          </Paragraph>

          <Divider orientation="left">Gradient Buttons</Divider>
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

          <Divider orientation="left">Alert Dialog - Component Composition Pattern</Divider>
          <Paragraph>
            The AlertDialog component demonstrates the compound component pattern, similar to Radix
            UI's approach.
          </Paragraph>

          <Space wrap size="large">
            {/* Basic Alert Dialog */}
            <AlertDialog>
              <AlertDialog.Trigger>
                <GradientButton status="error">Delete Item</GradientButton>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                  <AlertDialog.Description>
                    This action cannot be undone. This will permanently delete the item and remove
                    the data from our servers.
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                  <AlertDialog.Action onClick={handleDeleteConfirm}>Yes, delete</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>

            {/* Save Changes Dialog */}
            <AlertDialog>
              <AlertDialog.Trigger>
                <GradientButton status="primary">Save Changes</GradientButton>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Save Changes</AlertDialog.Title>
                  <AlertDialog.Description>
                    Do you want to save the changes you made? Your changes will be lost if you don't
                    save them.
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Don't Save</AlertDialog.Cancel>
                  <AlertDialog.Action onClick={handleSaveConfirm}>Save Changes</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>

            {/* Using asChild prop with custom trigger */}
            <AlertDialog>
              <AlertDialog.Trigger asChild>
                <button
                  style={{
                    padding: '8px 16px',
                    border: '2px dashed #d9d9d9',
                    background: 'transparent',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Custom Trigger (asChild)
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Custom Trigger Example</AlertDialog.Title>
                  <AlertDialog.Description>
                    This dialog was triggered using the asChild prop, which allows you to use any
                    element as a trigger.
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Close</AlertDialog.Cancel>
                  <AlertDialog.Action>Confirm</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </Space>

          <Divider orientation="left">Component Composition Pattern</Divider>
          <Paragraph>
            <strong>What is Component Composition?</strong>
            <br />
            Component Composition is a pattern where you build complex UI elements by combining
            smaller, focused components. The AlertDialog above demonstrates the{' '}
            <em>Compound Component Pattern</em>, where multiple components work together to create a
            cohesive user interface.
          </Paragraph>

          <Paragraph>
            <strong>Key Benefits:</strong>
            <ul>
              <li>
                <strong>Flexibility:</strong> Components can be arranged and combined in different
                ways
              </li>
              <li>
                <strong>Reusability:</strong> Each component handles a specific responsibility
              </li>
              <li>
                <strong>Maintainability:</strong> Smaller components are easier to test and debug
              </li>
              <li>
                <strong>API Design:</strong> More intuitive and declarative component APIs
              </li>
            </ul>
          </Paragraph>

          <Paragraph>
            <strong>Example Usage:</strong>
            <pre
              style={{
                background: '#f5f5f5',
                padding: '16px',
                borderRadius: '6px',
                fontSize: '12px',
                overflow: 'auto',
              }}
            >
              {`<AlertDialog>
  <AlertDialog.Trigger>
    <Button>Delete Item</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Are you sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Delete</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>`}
            </pre>
          </Paragraph>
        </div>
      </Content>
      <Footer className="footer">Gradient Button Demo ©{new Date().getFullYear()}</Footer>
    </Layout>
  );
}
