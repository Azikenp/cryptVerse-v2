import { Typography } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const { Text, Title } = Typography;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "cryptodaily",
    // count: simplified ? 10 : 100,
  });

  console.log(cryptoNews);

  if (isFetching) return "Loading...";

  return (
    <>
      <div></div>
    </>
  );
};

export default News;
