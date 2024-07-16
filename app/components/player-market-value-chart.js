import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Chart from 'chart.js/auto';

export default class MyChartComponent extends Component {
  // Example data for the chart
  @tracked chartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Market Value',
        data: [150, 130, 120, 100, 70, 60, 50],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5,
      },
    ],
  };

  // Example options for the chart
  @tracked chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Chart',
      },
    },
  };

  // Example plugins for the chart
  @tracked chartPlugins = [
    {
      // Example plugin configuration
    },
  ];

  // Example custom legend element
  @tracked customLegendElement = null; // Provide your custom legend element here if needed

  // Example chart dimensions
  @tracked chartWidth = 400;
  @tracked chartHeight = 300;

  // Example chart type
  @tracked chartType = 'line'; // Use 'line', 'bar', 'pie', etc., based on your chart type

  // Lifecycle hook to initialize the chart
  @action
  setupChart(element) {
    if (!element) return;
    const ctx = element.getContext('2d');

    this.chartInstance = new Chart(ctx, {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions,
      plugins: this.chartPlugins,
    });
  }

  // Destroy the chart to prevent memory leaks
  @action
  destroyChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}
