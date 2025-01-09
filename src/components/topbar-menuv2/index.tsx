"use client"

import React, { useState, useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext'; // ajuste o caminho conforme necessário

export function TopbarMenuV2() {
  const [activeTab, setActiveTab] = useState('overview');
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex p-1 rounded-xl border ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-900 border-gray-700'}`}>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-xl ${
          activeTab === 'overview' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('overview')}
      >
        Overview
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-xl ${
          activeTab === 'analytics' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('analytics')}
      >
        Analytics
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-xl ${
          activeTab === 'reports' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('reports')}
      >
        Reports
      </button>
      <button
        className={`px-4 py-1 mx-1 transition-colors duration-300 rounded-xl ${
          activeTab === 'notifications' 
            ? theme === 'light' 
              ? 'bg-gray-200 text-black' 
              : 'bg-background text-white' 
            : theme === 'light'
              ? 'hover:bg-gray-300 text-black'
              : 'hover:bg-gray-600 text-white'
        }`}
        onClick={() => setActiveTab('notifications')}
      >
        Notifications
      </button>
    </div>
  );
}
