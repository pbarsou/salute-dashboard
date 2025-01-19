"use client"

import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext'; // ajuste o caminho conforme necessário

interface CategoryMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function CategoryMenu({ activeTab, setActiveTab }: CategoryMenuProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex p-1 rounded-lg border ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-900 border-gray-700'}`}>
      <button
        className={`px-4 py-1  mx-1 transition-colors duration-300 rounded-lg ${
          activeTab === 'glicose' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('glicose')}
      >
        Glicose
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-lg ${
          activeTab === 'hemograma' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('hemograma')}
      >
        Hemograma
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-lg ${
          activeTab === 'lipidograma' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('lipidograma')}
      >
        Lipidograma
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-lg ${
          activeTab === 'minerais-e-vitaminas' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('minerais-e-vitaminas')}
      >
        Minerais e Vitaminas
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-lg ${
          activeTab === 'funcao-renal' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('funcao-renal')}
      >
        Função Renal
      </button>
    </div>
  );
}
