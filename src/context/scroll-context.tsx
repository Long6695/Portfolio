import React, { createContext, useState } from "react";

interface ScrollContextType {
  number: number;
  decreaseNumber: () => void;
  increaseNumber: () => void;
  setCurrentNumberScroll: (id: number) => void;
}

const defaultScrollContext: ScrollContextType = {
  number: 1,
  decreaseNumber: () => {},
  increaseNumber: () => {},
  setCurrentNumberScroll: () => {},
}

export const ScrollContext =
  createContext<ScrollContextType>(defaultScrollContext);

const ScrollContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [number, setNumber] = useState<number>(1);

  const increaseNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseNumber = () => {
    setNumber((prev) => prev - 1);
  };

  const setCurrentNumberScroll = (id: number) => {
    setNumber(id)
  }

  const scrollContextValue = {
    decreaseNumber,
    increaseNumber,
    number,
    setCurrentNumberScroll,
  };

  return (
    <ScrollContext.Provider value={scrollContextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
