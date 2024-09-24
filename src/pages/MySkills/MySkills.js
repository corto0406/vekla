import React from 'react';
import './MySkills.css'; // Make sure to link this CSS file for styles
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart
import Chart from 'chart.js/auto'; // Import Chart.js

// Data for each donut chart
const chartData1 = {
  labels: [], // Example labels
  datasets: [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], // Example data
      backgroundColor: ['#FDECD8', '#FDECD8', '#FDECD8', '#FDECD8', '#FDECD8', '#FDECD8', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA' ], // Colors for the segments
      borderColor: ['white'], // Slightly different shade of white for the border color
      borderWidth: 4, // Increased border width for the segments
    },
  ],
};

const chartData2 = {
  labels: [], // Example labels
  datasets: [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: ['#97DDA8','#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#EAEAEA', '#EAEAEA'],
      borderColor: ['white'],
      borderWidth: 4,
    },
  ],
};

const chartData3 = {
  labels: [], // Example labels
  datasets: [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor:['#F6A3B6', '#F6A3B6', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA' ],
      borderColor: ['white'],
      borderWidth: 4,
    },
  ],
};

const chartData4 = {
  labels: [], // Example labels
  datasets: [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor:['#F6A3B6', '#F6A3B6', '#F6A3B6', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA', '#EAEAEA' ],
      borderColor: ['white'],
      borderWidth: 4,
    },
  ],
};

const chartData5 = {
  labels: [], // Example labels
  datasets: [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: ['#97DDA8','#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#97DDA8', '#EAEAEA', '#EAEAEA', '#EAEAEA'],
      borderColor: ['white'],
      borderWidth: 4,
    },
  ],
};


// Plugin function for setting a custom number for each donut chart
const centerTextPlugin = (number) => ({
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
    ctx.fillText(number, width / 2, height / 2 + 5); // Adjust position of the text to be centered
  }
});

const MySkills = () => {
  return (
    <div className="skills-container">
      <div className="skills-text1">
        <h2>Role:</h2>
        <p>Account Executive</p>
      </div>
      <div className="skills-text2">
        <h2>Level:</h2>
        <p>Intermediate</p>
      </div>
      
      {/* Each card now has donut charts similar to the Dashboard component */}
      <div className="box-card1">
        <h3>Communication</h3>
        <div className="chart-container1">
          <Doughnut
            data={chartData1}
            plugins={[centerTextPlugin(6)]} // Number for the first donut
            options={{
              cutout: '65%', // Control donut thickness
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    padding: 20,
                    font: {
                      size: 14,
                    },
                  },
                  padding: {
                    right: 100,
                  }
                }
              }
            }}
          />
        </div>
      </div>
      
      <div className="box-card2">
        <h3>Presentation</h3>
        <div className="chart-container1">
          <Doughnut
            data={chartData2}
            plugins={[centerTextPlugin(8)]} // Number for the second donut
            options={{
              cutout: '65%',
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    padding: 20,
                    font: {
                      size: 14,
                    },
                  },
                  padding: {
                    right: 100,
                  }
                }
              }
            }}
          />
        </div>
      </div>
      
      <div className="box-card3">
        <h3>Structure</h3>
        <div className="chart-container1">
          <Doughnut
            data={chartData5}
            plugins={[centerTextPlugin(2)]} // Number for the third donut
            options={{
              cutout: '65%',
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    padding: 20,
                    font: {
                      size: 14,
                    },
                  },
                  padding: {
                    right: 100,
                  }
                }
              }
            }}
          />
        </div>
      </div>
      
      <div className="box-card4">
        <h3>Negotiation</h3>
        <div className="chart-container1">
          <Doughnut
            data={chartData2}
            plugins={[centerTextPlugin(7)]} // Number for the fourth donut
            options={{
              cutout: '65%',
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    padding: 20,
                    font: {
                      size: 14,
                    },
                  },
                  padding: {
                    right: 100,
                  }
                }
              }
            }}
          />
        </div>
      </div>
      
      <div className="box-card5">
        <h3>Product Skills</h3>
        <div className="chart-container1">
          <Doughnut
            data={chartData4}
            plugins={[centerTextPlugin(3)]} // Number for the fifth donut
            options={{
              cutout: '65%',
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    padding: 20,
                    font: {
                      size: 14,
                    },
                  },
                  padding: {
                    right: 100,
                  }
                }
              }
            }}
          />
        </div>
      </div>
      
      <div className="box-card6">
        <h3>Leadership</h3>
        <div className="chart-container1">
          <Doughnut
            data={chartData5}
            plugins={[centerTextPlugin(7)]} // Number for the sixth donut
            options={{
              cutout: '65%',
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    padding: 20,
                    font: {
                      size: 14,
                    },
                  },
                  padding: {
                    right: 100,
                  }
                }
              }
            }}
          />
        </div>
      </div>
      
      <footer className="footer">
        <p>© Copyrights Protected by Vekla</p>
      </footer>
    </div>
  );
};

export default MySkills;
