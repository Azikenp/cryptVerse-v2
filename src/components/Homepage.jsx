import React from "react";
import millify from "millify";
import { Statistic, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptoQuery();
  console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24hr volume" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={5} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
