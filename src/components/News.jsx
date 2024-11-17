import { Typography } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const { Text, Title } = Typography;
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews);

  return (
    <>
      <div></div>
    </>
  );
};

export default News;
