"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Pizza from "../../../public/categories/pizza.png";
import Burger from "../../../public/categories/burger.png";
import Butterchicken from "../../../public/categories/butterchicken.webp";
import Briyani from "../../../public/categories/briyani.png";
import Dalbhat from "../../../public/categories/dalbhat.png";
import Friedchicken from "../../../public/categories/friedrice.png";
import Momos from "../../../public/categories/momos.png";
import Noodles from "../../../public/categories/noodles.webp";
import Prantha from "../../../public/categories/prantha.webp";
import Pasta from "../../../public/categories/pasta.png";
import Image from "next/image";

const Category = () => {
  const [slide, setslide] = useState(0);
  //   const [category, setCategory] = useState([]);
  // const getCategory = async() => {
  //    try{
  //     const res = await fetch("")
  //     const data = await res.json()
  //     console.log(data)
  //     setCategory(data);
  //    }catch(err){
  //        console.log(err)
  //    }

  // }

  // useEffect(()=>{
  //     getCategory();
  // } ,[])

  const nextSlide = () => {
    if (foods.length - 5 === slide) return false;
    setslide(slide + 3);
    // console.log(slide + 3)
    // console.log(foods.length);
  };

  const prevSlide = () => {
    if (slide === 0) return false
    setslide(slide - 3);
  };

  const foods = [
    { image: Pizza, name: "Pizza" },
    { image: Burger, name: "Burger" },
    { image: Butterchicken, name: "Butterchicken" },
    { image: Briyani, name: "Briyani" },
    { image: Dalbhat, name: "dalbhat" },
    { image: Friedchicken, name: "Friedchicken" },
    { image: Momos, name: "Mo:Mo" },
    { image: Noodles, name: "Noodles" },
    { image: Prantha, name: "Prantha" },
    { image: Pasta, name: "Pasta" },
    { image: Pizza, name: "Pizza" },
    { image: Burger, name: "Burger" },
    { image: Butterchicken, name: "Butterchicken" },
    { image: Briyani, name: "Briyani" },
    { image: Dalbhat, name: "dalbhat" },
    { image: Friedchicken, name: "Friedchicken" },
    { image: Momos, name: "Mo:Mo" },
    { image: Noodles, name: "Noodles" },
    { image: Prantha, name: "Prantha" },
    { image: Pasta, name: "Pasta" },
  ];
  return (
    <>
      <section className="max-w-[1200px] mx-auto mt-5">
        <div className="flex justify-between w-full">
          <div>
            <h3 className="text-xl font-semibold">What's on your mind ?</h3>
          </div>
          <div className="flex gap-3">
            <div
              className="w-[30px] h-[30px] rounded-full bg-gray-400 flex items-center justify-center cursor-pointer hover:bg-slate-500 duration-300"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="w-[30px] h-[30px] rounded-full bg-gray-400 flex items-center justify-center cursor-pointer hover:bg-slate-500 duration-300"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 items-center overflow-hidden">
          {foods.map((food, index) => {
            return (
              <div
                className=" w-[200px] shrink-0 duration-500"
                key={index}
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                <Image
                  src={food.image}
                  height={150}
                  width={150}
                  quality={100}
                  alt="foodimage"
                  className="object-contain w-52 h-40 aspect-square"
                />
                <h4 className="text-center">{food.name}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
