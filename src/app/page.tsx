"use client";
import "keen-slider/keen-slider.min.css";
import React from "react";
import ThemeContextProvider from "@/context/theme-context";
import ScrollContextProvider from "@/context/scroll-context";
import PortfolioPage from "@/components";
import {ParallaxProvider} from 'react-scroll-parallax';

const MainPage = () => {
  return (
    <ParallaxProvider>
    <ThemeContextProvider>
      <ScrollContextProvider>
        <PortfolioPage />
      </ScrollContextProvider>
    </ThemeContextProvider>
    </ParallaxProvider>
  );
};

export default MainPage;
