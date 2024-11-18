import React from "react";
import { Col, Row, Typography } from "antd";
import { Line } from "react-chartjs-2";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  //   console.log(coinHistory);

  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[1].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[1].timestamp).toLocaleDateString()
    );
  }
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
