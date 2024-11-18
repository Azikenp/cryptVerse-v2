import React from "react";
import { Col, Row, Typography } from "antd";
import { Line } from "react-chartjs-2";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  //   console.log(coinHistory);

  const coinPrice = [];
  const coinTimestamp = [];

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
