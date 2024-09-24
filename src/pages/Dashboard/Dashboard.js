import React, { useState } from 'react';
import './Dashboard.css'; // Import a CSS file for styling
import Man from '../Dashboard/man.svg'; // Correct import path for the SVG
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart from react-chartjs-2
import Chart from 'chart.js/auto'; // Import Chart.js

// Data for the donut chart
const chartData = {
  labels: ['Leadership', 'Communication', 'Negotiation'],
  datasets: [
    {
      data: [70, 10, 20], // Example data
      backgroundColor: ['#97DDA8', '#F6A3B6', '#FDECD8'], // Colors for the segments
      borderColor: ['white'], // Slightly different shade of white for the border color
      borderWidth: 4, // Increased border width for the segments
    },
  ],
};

// Plugin to add number in the center of the donut chart and shadow effect
const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw: (chart) => {
    const { ctx, chartArea: { width, height } } = chart;

    // Draw shadow effect around the chart
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.10)'; // Slightly lighter shadow color
    ctx.shadowBlur = 10; // Reduced blur for the shadow
    ctx.shadowOffsetX = 2; // Horizontal shadow offset
    ctx.shadowOffsetY = 2; // Vertical shadow offset

    // Draw each segment with the shadow
    chart.getDatasetMeta(0).data.forEach((segment) => {
      segment.draw(ctx);
    });

    ctx.restore();

    // Draw number in the center of the donut chart
    ctx.font = '30px Lexend Deca'; // Set the font size to 30px
    ctx.fillStyle = '#000'; // Text color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const text = '23'; // Example number of hours
    ctx.fillText(text, width / 2, height / 2 + 5); // Adjust position of the text to be centered
  }
};

const Dashboard = () => {
  const [percentage, setPercentage] = useState(25); // Add state for the progress bar percentage

  return (
    <div className="dashboard-container">
      <div className="text1">
        <h2>Focus skills</h2>
      </div>
      <div className="line1">
        <p>Organisational</p>
      </div>
      <div className="line2">
        <p>Individual</p>
      </div>

      {/* First Card */}
      <div className="card">
        <h2>Short term Goal</h2>
        <p>Level up from Intermediate to</p>
        <p>Advance level SDR</p>
        <img src={Man} alt="Man" className="man-image" />
      </div>

      {/* Second Card with Donut Chart */}
      <div className="card1">
        <h2>Training Hours</h2>
        <div className="chart-container">
          <Doughnut
            data={chartData}
            plugins={[centerTextPlugin]}
            options={{
              cutout: '65%', // Adjust this value to control donut thickness
              plugins: {
                legend: {
                  position: 'right', // Keep labels on the right side
                  labels: {
                    boxWidth: 20, // Adjust the size of the color box for the labels
                    padding: 20, // Adjust padding between legend and chart
                    font: {
                      size: 14, // Adjust font size for legend labels
                    },
                  },
                  // Increase the padding to move the labels further right
                  padding: {
                    right: 100, // Add more padding to push labels further from the chart
                  }
                }
              }
            }}
          />
        </div>
      </div>

      {/* New Card with Progress Bar */}
      <div className="card5">
        <h2>Training progress</h2>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div> {/* Bind percentage to fill width */}
          <div className="progress-bar">
            <span className="progress-text">{percentage}% completed</span> {/* Bind percentage to text */}
          </div>
        </div>
      </div>

      <div className="card2">
        <p>Communication</p>
      </div>
      <div className="card3">
        <p>Leadership</p>
      </div>
      <div className="card4">
        <p>Negotiation</p>
      </div>
      <div className="card6">
        <h2>Actions</h2>
        <p>Complete preparation ahead of Quarterly skills call</p>
        <p>Review & Approve suggested training schedule</p>
        <p>Interactive Learning Resources.</p>
      </div>
      <footer className="footer">
        <p>© Copyrights Protected by Vekla</p>
      </footer>
    </div>
  );
};

export default Dashboard;
