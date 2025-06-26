import React from 'react';
import { Typography, Card, Space, Divider } from 'antd';
import { SVGAnimationDemo } from '~/components/common/SVGAnimations/SVGAnimations';
import './animations.css';

const { Title, Paragraph, Text } = Typography;

export default function AnimationsPage() {
  return (
    <div className="animations-page">
      <div className="animations-header">
        <Title level={1}>SVG Animation Showcase</Title>
        <Paragraph>
          A collection of smooth, performant SVG animations built with pure CSS and React. These
          animations demonstrate various techniques including path drawing, morphing shapes,
          rotation, floating elements, and interactive progress indicators.
        </Paragraph>
      </div>

      <Card className="animations-card">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={3}>Animation Techniques Demonstrated:</Title>
            <ul className="technique-list">
              <li>
                <Text strong>Path Drawing:</Text> Animated stroke-dasharray for drawing effects
              </li>
              <li>
                <Text strong>Morphing Shapes:</Text> Scale and transform animations
              </li>
              <li>
                <Text strong>Rotation:</Text> Continuous rotation with CSS transforms
              </li>
              <li>
                <Text strong>Bouncing:</Text> Spring-like motion with easing functions
              </li>
              <li>
                <Text strong>Pulsing:</Text> Scaling and opacity animations
              </li>
              <li>
                <Text strong>Wave Motion:</Text> Path morphing for fluid animations
              </li>
              <li>
                <Text strong>Typewriter Effect:</Text> Text reveal with blinking cursor
              </li>
              <li>
                <Text strong>Floating Elements:</Text> Complex multi-element choreography
              </li>
              <li>
                <Text strong>Progress Indicators:</Text> Interactive data-driven animations
              </li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>Live Animations:</Title>
            <SVGAnimationDemo />
          </div>
        </Space>
      </Card>
    </div>
  );
}
