"use client";
import "keen-slider/keen-slider.min.css";
import React from "react";
import ThemeContextProvider from "@/context/theme-context";
import ScrollContextProvider from "@/context/scroll-context";
import PortfolioPage from "@/components";

const MainPage = () => {
  return (
    <ThemeContextProvider>
      <ScrollContextProvider>
        <PortfolioPage />
      </ScrollContextProvider>
    </ThemeContextProvider>
  );
};

export default MainPage;
