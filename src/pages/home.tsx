import HomeContainer from "../components/home";
import Layout from "../components/layout";

const Home = () => {
  const data = [
    {
      id: "1",
      title: "HP Laptop G500",
      price: 5000,
      category: "HP",
      imgSrc: "https://i.ibb.co/QXSLWTN/pexels-karsten-madsen-18105.jpg",
    },
    {
      id: "2",
      title: "HP Laptop G501",
      price: 6000,
      category: "HP",
      imgSrc: "https://i.ibb.co/hLwY1Xt/product-1.jpg",
    },
    {
      id: "3",
      title: "HP Laptop G502",
      price: 4000,
      category: "HP",
      imgSrc: "https://i.ibb.co/N1c38MJ/laptop-1205256-640.jpg",
    },
    {
      id: "4",
      title: "HP Laptop G503",
      price: 3000,
      category: "HP",
      imgSrc: "https://i.ibb.co/zH5kCqs/images.png",
    },
    {
      id: "5",
      title: "HP Laptop G504",
      price: 7000,
      category: "HP",
      imgSrc: "https://i.ibb.co/ydDhcbF/imagces-1.jpg",
    },
    {
      id: "6",
      title: "ASUS Laptop G505",
      price: 3000,
      category: "ASUS",
      imgSrc: "https://i.ibb.co/zH5kCqs/images.png",
    },
    {
      id: "7",
      title: "ASUS Laptop G506",
      price: 3000,
      category: "ASUS",
      imgSrc: "https://i.ibb.co/ydDhcbF/imagces-1.jpg",
    },
    {
      id: "8",
      title: "ASUS Laptop G507",
      price: 5000,
      category: "ASUS",
      imgSrc: "https://i.ibb.co/QXSLWTN/pexels-karsten-madsen-18105.jpg",
    },
    {
      id: "9",
      title: "ASUS Laptop G508",
      price: 6000,
      category: "ASUS",
      imgSrc: "https://i.ibb.co/hLwY1Xt/product-1.jpg",
    },
    {
      id: "10",
      title: "ASUS Laptop G509",
      price: 4000,
      category: "ASUS",
      imgSrc: "https://i.ibb.co/N1c38MJ/laptop-1205256-640.jpg",
    },
  ];
  return (
    <>
      <Layout>
        <HomeContainer data={data} />
      </Layout>
    </>
  );
};

export default Home;
