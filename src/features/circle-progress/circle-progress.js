import React from 'react';
import { number } from 'prop-types';

const secondaryColor = '#e7ecf0';
const secondaryDarker = '#9c9c9c';

const ProgressCircle = ({
  prog = 0,
  r = 100,
  size = 180,
  cx = r,
  cy = r,
} = {}) => {
  const c = 2 * Math.PI * r;
  const offset = c - (prog / 100) * c;

  return (
    <>
      <div className="spinner-circle">
        <svg height={size} width={size} viewBox="-5, -5, 130, 130">
          <circle
            className="progress-ring-circle"
            strokeWidth="8"
            stroke={secondaryColor}
            fill="transparent"
            r={r}
            cx={cx}
            cy={cy}
            strokeDasharray={c}
            strokeLinecap="round"
          />
          <circle
            className="progress-ring-circle"
            strokeWidth="8"
            stroke="#419cf2"
            fill="transparent"
            r={r}
            cx={cx}
            cy={cy}
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="digit-container">
        <div className="digits">
          <span className="progress">{prog}</span>
          <span className="percent">%</span>
        </div>
      </div>
      <style jsx>
        {`
          .digits {
          }
          .digit-container {
            postion: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          .spinner-circle {
            position: absolute;
            top: 200;
            left: 200;
          }
          .percent {
            color: ${secondaryDarker};
          }
        `}
      </style>
    </>
  );
};

ProgressCircle.propTypes = {
  prog: number,
  r: number,
  size: number,
  cx: number,
  cy: number,
};

export default ProgressCircle;
