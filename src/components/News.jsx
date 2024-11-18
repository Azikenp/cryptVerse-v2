import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";
import { useState } from "react";
import Loader from "./Loader";

const newsHeaders = [
  "coindesk",
  "cointelegraph",
  "bitcoinist",
  "decrypt",
  "bsc",
  "theguardian",
  "cryptodaily",
];

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("coindesk");
  const { Text, Title } = Typography;
  const { Option } = Select;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory });

  const demoImage =
    "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  if (!cryptoNews) return <Loader />;

  const displayedNews = simplified
    ? cryptoNews.data.slice(0, 6)
    : cryptoNews.data.slice(0, 20);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a news platform"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {newsHeaders.map((news) => (
              <Option value={news}>{news}</Option>
            ))}
          </Select>
        </Col>
      )}

      {displayedNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  src={news.thumbnail ? news.thumbnail : demoImage}
                  alt="news image"
                  className="img"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)} ... `
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={news.thumbnail ? news.thumbnail : demoImage}
                    alt="news"
                  />
                  <Text className="provider-name">Mohamed Jabar</Text>
                </div>
                <Text>{moment(news.createdAt).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
