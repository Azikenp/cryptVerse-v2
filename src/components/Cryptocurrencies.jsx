import React, { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../services/cryptoApi";
import { Card, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filterData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="search-crypto">
        {!simplified && (
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>

      <Row gutter={[32, 32]} className="crypto-card-component">
        {cryptos?.map((currency) => (
          <Col
            key={currency.uuid}
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
