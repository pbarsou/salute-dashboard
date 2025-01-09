"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type SidebarContextType = {
  activeItem: string;
  setActiveItem: (item: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [activeItem, setActiveItem] = useState<string>('home');

  return (
    <SidebarContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
