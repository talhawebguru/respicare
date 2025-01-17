"use client"
import React from "react";
import { useState } from 'react';
// import { useRouter } from "next/router";
import PageNameBanner from "../../Components/PageNameBanner";
import Banner from "../../Components/Banner";
import AboutHeroImg from '@/public/images/aboutHeroImg.svg';
import BackButton from "@/app/Components/product/BackButton";
import ProductMainDetail from "@/app/Components/product/ProductMainDetail";
import RelatedProducts from "@/app/Components/product/RelatedProducts";
import Popup from "@/app/Components/product/Popup";


// const productData = [
//   {
//     id: "1",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "2",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "3",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "4",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "5",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "6",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "7",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "8",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "9",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
// ];

const ProductDetails = () => {
  // const router = useRouter();
  // const { slug } = router.query;

  // const product = productData.find((p) => p.name === slug);

  // if (!product) {
  //   return <p>Product not found</p>;
  // }
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <PageNameBanner title="Product Page" image={AboutHeroImg}/>
      <BackButton/>
      <ProductMainDetail openPop={setIsPopupOpen}/>
      <RelatedProducts/>
      <Banner/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <button onClick={() => setIsPopupOpen(true)} className="bg-purple-600 text-white px-4 py-2 rounded">
        Open Pop-up
      </button>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
    </>
  );
};

export default ProductDetails;