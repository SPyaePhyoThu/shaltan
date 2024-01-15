"use client";
import React, { useState } from "react";
import Link from "next/link";

export const BrandsPage = () => {
  const [isHovered, setIsHovered] = useState("");
  return (
    <div
      className="h-full  pt-10 pb-16 gap-5 bg-color5 grid grid-rows-[min-content,min-content,1fr]"
      id="brands"
    >
      <h1 className="font-heading text-5xl text-center">Featured Brands</h1>
      <p className="text-center pb-6 font-bold">
        Explore your perfect pair with just a click.
      </p>
      <div className="bg-color5 grid grid-rows-3 grid-cols-[200px_308px_200px] gap-1 md:gap-4 h-album justify-self-center md:grid-cols-[250px_385px_250px]">
        <div className='relative bg-cover bg-center h-full bg-[url("/images/nike.jpg")] row-span-2 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1
              className="text-white  font-heading text-2xl md:text-4xl absolute top-2/4 left-1/3 transform -translate-y-2/4  border-b-4"
              style={{
                width: isHovered === "nike" ? "34%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("nike")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=nike">NIKE</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-cover bg-center bg-[url("/images/vans.jpg")] row-start-3 row-end-4 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1
              className="text-white  font-heading text-2xl md:text-4xl absolute top-2/4 left-1/3 transform -translate-y-2/4  border-b-4"
              style={{
                width: isHovered === "vans" ? "40%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("vans")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection/?brand=vans">VANS</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-cover bg-center bg-[url("/images/puma.jpg")] row-start-1 row-end-4 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1
              className="text-white  font-heading text-3xl md:text-5xl absolute top-2/4 left-1/3 transform -translate-y-2/4 border-b-4"
              style={{
                width: isHovered === "puma" ? "38%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("puma")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=puma">PUMA</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-cover bg-center bg-[url("/images/adidasPair.jpg")] row-start-1 row-end-2 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1
              className="text-white  font-heading text-2xl md:text-4xl absolute top-2/4 left-1/4 transform -translate-y-2/4 border-b-4"
              style={{
                width: isHovered === "adidas" ? "55%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("adidas")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=adidas">ADIDAS</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-cover bg-center bg-[url("/images/converse.jpg")] row-start-2 row-end-4 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1
              className="text-white  font-heading text-2xl md:text-4xl absolute top-2/4 left-8 transform -translate-y-2/4 border-b-4 "
              style={{
                width: isHovered === "converse" ? "77%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("converse")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=converse">CONVERSE</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
