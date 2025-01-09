import React, { useContext } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ThemeContext } from '@/context/ThemeContext';

export default function TopBarProfileDescription() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div className="flex flex-1 flex-col gap-2 pt-6">
        
        <div
        className={`mx-auto h-32 w-full rounded-xl bg-background p-6 flex items-center border-2 ${
            theme === 'dark' ? 'border-gray-300 ' : 'border-black'
        }`}
        >
          <Avatar className="w-20 h-20 mr-6">
            <AvatarImage src="/images/profile_photo.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center space-y-2">
            <div className="font-bold text-xl">Danilo Oliveira</div>
            <div className="flex flex-row space-x-8" >
              <div className="flex flex-col space-y-2 ">
                <div className="text-sm text-muted-background">Idade: 35</div>
                <div className="text-sm text-muted-background">Último exame: 15/09/2023</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-sm text-muted-background">Laboratório: Lab XYZ</div>
                <div className="text-sm text-muted-background">Médico: Dr. Carlos Pereira</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  