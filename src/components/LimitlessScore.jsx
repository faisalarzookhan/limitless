import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LimitlessScore = ({ score, size = 150, strokeWidth = 8 }) => {
  // Determine color based on score
  const getColor = (score) => {
    if (score >= 80) return '#10B981'; // Green for excellent
    if (score >= 60) return '#F59E0B'; // Yellow for good
    if (score >= 40) return '#F97316'; // Orange for average
    return '#EF4444'; // Red for poor
  };

  // Determine score label
  const getScoreLabel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Average';
    return 'Needs Improvement';
  };

  const color = getColor(score);
  const scoreLabel = getScoreLabel(score);

  return (
    <div className="text-center">
      <div 
        className="inline-block"
        style={{ width: size, height: size }}
      >
        <CircularProgressbar
          value={score}
          text={`${score}`}
          strokeWidth={strokeWidth}
          styles={buildStyles({
            rotation: 0.25, // Start progress from top right
            strokeLinecap: 'butt',
            textSize: '24px',
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: color,
            trailColor: '#E0E7FF',
          })}
        />
      </div>
      <div className="mt-4">
        <div 
          className="text-2xl font-bold"
          style={{ color }}
        >
          {scoreLabel}
        </div>
        <div className="text-gray-600 mt-1">
          Limitless Score
        </div>
      </div>
    </div>
  );
};

export default LimitlessScore;