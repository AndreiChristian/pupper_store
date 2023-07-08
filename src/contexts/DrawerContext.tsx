import React, { createContext, useState, useContext } from "react";

interface IDrawerContext {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<IDrawerContext | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
