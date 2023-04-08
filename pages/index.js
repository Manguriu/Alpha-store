import React from "react";
import { Product, FooterBanner, Hero } from "../components";
import { client } from "../Library/Client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Hero heroBanner ={bannerData.length && bannerData[0]} />
      
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p> Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const querry = '*[_type == "product"]';
  const products = await client.fetch(querry);

  const bannerQuerry = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuerry);

  return {
    props: { products, bannerData },
  };
};

export default Home;
