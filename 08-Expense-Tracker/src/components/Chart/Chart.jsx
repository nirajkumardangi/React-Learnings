import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  console.log(dataPointValues);
  // console.log(totalMaximum);
  
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
