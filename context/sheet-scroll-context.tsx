import React, { createContext, RefObject } from 'react';

interface SheetScrollContextType {
  sheetRef: RefObject<HTMLDivElement>;
}

export const SheetScrollContext = createContext<SheetScrollContextType | null>(
  null
);

export const SheetScrollProvider: React.FC<{
  sheetRef: RefObject<HTMLDivElement>;
  children: React.ReactNode;
}> = ({ sheetRef, children }) => {
  return (
    <SheetScrollContext.Provider value={{ sheetRef }}>
      {children}
    </SheetScrollContext.Provider>
  );
};
