import type { JSX } from 'react';

interface RoundedBarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const RoundedBar = (props: RoundedBarProps): JSX.Element => {
  const { fill = '#8884d8', x = 0, y = 0, width = 0, height = 0 } = props;

  const radius = Math.min(10, Math.min(width, height) / 2);

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius}
      ry={radius}
    />
  );
};
