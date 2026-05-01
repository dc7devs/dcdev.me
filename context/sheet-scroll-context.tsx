import React, { createContext, RefObject } from 'react';

interface SheetScrollContextType {
  sheetRef: RefObject<HTMLDivElement | null>;
}

export const SheetScrollContext = createContext<SheetScrollContextType | null>(
  null
);

export const SheetScrollProvider = ({ sheetRef, children }: {
  sheetRef: RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) => {
  return (
    <SheetScrollContext.Provider value={{ sheetRef }}>
      {children}
    </SheetScrollContext.Provider>
  );
};
