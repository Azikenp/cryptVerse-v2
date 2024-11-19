import { Col, Row, Typography } from "antd";
import { Line } from "react-chartjs-2";

const { Title } = Typography;
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, // Register category scale
  Tooltip,
  Legend,
} from "chart.js";

// Register components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  //   console.log(coinHistory);

  const coinPrice = [];
  const coinTimestamp = [];

  // useEffect(() => {
  //   return () => {
  //     // Properly destroy all chart instances
  //     Object.keys(Chart.instances).forEach((key) => {
  //       const chart = Chart.instances[key];
  //       if (chart) {
  //         chart.destroy();
  //       }
  //     });
  //   };
  // }, []);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName}
        </Title>
        <Col className="price-container">
          <Title className="price-change" level={5}>
            {coinHistory?.data?.change}
          </Title>
          <Title className="current-price" level={5}>
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>

      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
