import React from 'react';
import type {
  SVGAnimationDemoProps,
  AnimatedIconProps,
  LoadingSpinnerProps,
  DrawingPathProps,
  MorphingShapeProps,
  PulseAnimationProps,
} from './SVGAnimations.types';
import './SVGAnimations.css';

// 1. Rotating Loading Spinner
export const LoadingSpinner: React.FC<Readonly<LoadingSpinnerProps>> = ({
  size = 40,
  color = '#1677ff',
  strokeWidth = 3,
}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className="loading-spinner">
    <circle
      cx="20"
      cy="20"
      r="18"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray="28 28"
      className="spinner-circle"
    />
  </svg>
);

// 2. Path Drawing Animation (Checkmark)
export const DrawingCheckmark: React.FC<Readonly<DrawingPathProps>> = ({
  size = 60,
  color = '#52c41a',
  duration = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    className="drawing-checkmark"
    style={{ '--animation-duration': `${duration}s` } as React.CSSProperties}
  >
    <circle
      cx="30"
      cy="30"
      r="25"
      fill="none"
      stroke={color}
      strokeWidth="3"
      className="check-circle"
    />
    <path
      d="M20 30 L27 37 L40 23"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check-path"
    />
  </svg>
);

// 3. Morphing Heart Animation
export const MorphingHeart: React.FC<Readonly<MorphingShapeProps>> = ({
  size = 50,
  color = '#ff4d4f',
}) => (
  <svg width={size} height={size} viewBox="0 0 50 50" className="morphing-heart">
    <path
      d="M25,45 C25,45 5,30 5,20 C5,15 10,10 15,10 C20,10 25,15 25,20 C25,15 30,10 35,10 C40,10 45,15 45,20 C45,30 25,45 25,45 Z"
      fill={color}
      className="heart-path"
    />
  </svg>
);

// 4. Bouncing Dots Animation
export const BouncingDots: React.FC<Readonly<AnimatedIconProps>> = ({
  size = 60,
  color = '#1677ff',
}) => (
  <svg width={size} height={size} viewBox="0 0 60 20" className="bouncing-dots">
    <circle cx="10" cy="10" r="4" fill={color} className="dot dot-1" />
    <circle cx="30" cy="10" r="4" fill={color} className="dot dot-2" />
    <circle cx="50" cy="10" r="4" fill={color} className="dot dot-3" />
  </svg>
);

// 5. Pulse Animation
export const PulseRings: React.FC<Readonly<PulseAnimationProps>> = ({
  size = 80,
  color = '#13c2c2',
}) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className="pulse-rings">
    <circle cx="40" cy="40" r="8" fill={color} />
    <circle
      cx="40"
      cy="40"
      r="20"
      fill="none"
      stroke={color}
      strokeWidth="2"
      className="pulse-ring pulse-ring-1"
    />
    <circle
      cx="40"
      cy="40"
      r="30"
      fill="none"
      stroke={color}
      strokeWidth="2"
      className="pulse-ring pulse-ring-2"
    />
    <circle
      cx="40"
      cy="40"
      r="40"
      fill="none"
      stroke={color}
      strokeWidth="2"
      className="pulse-ring pulse-ring-3"
    />
  </svg>
);

// 6. Animated Wave
export const AnimatedWave: React.FC<Readonly<AnimatedIconProps>> = ({
  size = 100,
  color = '#1677ff',
}) => (
  <svg width={size} height={size / 2} viewBox="0 0 100 50" className="animated-wave">
    <path
      d="M0,25 Q25,5 50,25 T100,25"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      className="wave-path"
    />
  </svg>
);

// 7. Rotating Gear
export const RotatingGear: React.FC<Readonly<AnimatedIconProps>> = ({
  size = 60,
  color = '#722ed1',
}) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className="rotating-gear">
    <path
      d="M30,5 L35,15 L45,10 L50,20 L40,25 L50,30 L45,40 L35,35 L30,45 L25,35 L15,40 L10,30 L20,25 L10,20 L15,10 L25,15 Z"
      fill={color}
      className="gear-teeth"
    />
    <circle cx="30" cy="30" r="8" fill="none" stroke={color} strokeWidth="3" />
    <circle cx="30" cy="30" r="4" fill={color} />
  </svg>
);

// 8. Typewriter Text Effect
export const TypewriterText: React.FC<Readonly<{ text: string; color?: string }>> = ({
  text,
  color = '#000',
}) => (
  <svg
    width={text.length * 12}
    height="30"
    viewBox={`0 0 ${text.length * 12} 30`}
    className="typewriter-text"
  >
    <text x="5" y="20" fill={color} fontSize="16" fontFamily="monospace" className="typing-text">
      {text}
    </text>
    <line
      x1={text.length * 12 - 5}
      y1="8"
      x2={text.length * 12 - 5}
      y2="22"
      stroke={color}
      strokeWidth="2"
      className="cursor"
    />
  </svg>
);

// 9. Floating Elements
export const FloatingIcons: React.FC<Readonly<AnimatedIconProps>> = ({
  size = 100,
  color = '#faad14',
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="floating-icons">
    <circle cx="20" cy="20" r="3" fill={color} className="floating-element floating-1" />
    <rect x="70" y="15" width="6" height="6" fill={color} className="floating-element floating-2" />
    <polygon points="50,10 55,20 45,20" fill={color} className="floating-element floating-3" />
    <circle cx="30" cy="70" r="4" fill={color} className="floating-element floating-4" />
    <rect x="65" y="75" width="8" height="8" fill={color} className="floating-element floating-5" />
  </svg>
);

// 10. Progress Ring
export const ProgressRing: React.FC<
  Readonly<{ progress: number; size?: number; color?: string }>
> = ({ progress, size = 80, color = '#52c41a' }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="progress-ring">
      <circle cx="40" cy="40" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="6" />
      <circle
        cx="40"
        cy="40"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className="progress-circle"
        transform="rotate(-90 40 40)"
      />
      <text x="40" y="45" textAnchor="middle" fontSize="12" fill={color} fontWeight="600">
        {progress}%
      </text>
    </svg>
  );
};

// Main Demo Component
export const SVGAnimationDemo: React.FC<Readonly<SVGAnimationDemoProps>> = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="svg-animation-demo">
      <div className="animation-grid">
        <div className="animation-item">
          <h4>Loading Spinner</h4>
          <LoadingSpinner />
        </div>

        <div className="animation-item">
          <h4>Drawing Checkmark</h4>
          <DrawingCheckmark />
        </div>

        <div className="animation-item">
          <h4>Morphing Heart</h4>
          <MorphingHeart />
        </div>

        <div className="animation-item">
          <h4>Bouncing Dots</h4>
          <BouncingDots />
        </div>

        <div className="animation-item">
          <h4>Pulse Rings</h4>
          <PulseRings />
        </div>

        <div className="animation-item">
          <h4>Animated Wave</h4>
          <AnimatedWave />
        </div>

        <div className="animation-item">
          <h4>Rotating Gear</h4>
          <RotatingGear />
        </div>

        <div className="animation-item">
          <h4>Typewriter Effect</h4>
          <TypewriterText text="Hello World!" />
        </div>

        <div className="animation-item">
          <h4>Floating Elements</h4>
          <FloatingIcons />
        </div>

        <div className="animation-item">
          <h4>Progress Ring</h4>
          <ProgressRing progress={progress} />
        </div>
      </div>
    </div>
  );
};
