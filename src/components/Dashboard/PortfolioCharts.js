import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

// PortfolioChart Component
class PortfolioChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Portfolio A",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [35, 59, 60, 81, 75, 85, 95]
          },
          {
            label: "Portfolio B",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#e755ba",
            borderColor: "red",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "red",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            color: "red",
            data: [35, 46, 70, 81, 75, 65, 85]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}

// PortfolioSummary Component

class PortfolioSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["TBill", "Bonds", "Equities"],
        datasets: [
          {
            data: [41232443, 52452253, 32534656],
            backgroundColor: ["#00c853", "#388e3c", "#00796b"],
            hoverBackgroundColor: ["#ccff90", "#ffab40", "#ff6e40"]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.chartData}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
export { PortfolioChart, PortfolioSummary };
