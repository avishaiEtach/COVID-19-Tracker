import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart({lastCassesDate ,lastCassesNum ,title, label}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20
      }
      },
    },
  };
  
  const labels = lastCassesDate;
  
   const data = {
    labels,
    datasets: [
      {
        label: label,
        data: labels.map((lab,idx) => lastCassesNum[idx]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: {
          target: 'origin', 
        }
      },
    ],
  };
  return <Line options={options} data={data} />;
}


