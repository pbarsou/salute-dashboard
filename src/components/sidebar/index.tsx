"use client";

import React, { useContext } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Home,
  LayoutDashboardIcon,
  LineChartIcon,
  LogOut,
  Package,
  PanelBottom,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { useSidebar } from "@/context/SidebarContext";
import { ThemeContext } from "@/context/ThemeContext";

export function Sidebar() {
  const { activeItem, setActiveItem } = useSidebar();
  const { theme } = useContext(ThemeContext);
  
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            {/* <Link
              href="/"
              onClick={() => handleItemClick('dashboardAvatar')}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                activeItem === 'dashboardAvatar' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
              }`}
            >
              <Package className="h-4 w-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link> */}

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  onClick={() => handleItemClick('home')}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    activeItem === 'home' ? (theme === 'light' ? 'bg-customBlue text-white' : 'bg-white text-background') : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  onClick={() => handleItemClick('dashboard')}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    activeItem === 'dashboard' ? (theme === 'light' ? 'bg-customBlue text-white' : 'bg-white text-background') : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/line"
                  onClick={() => handleItemClick('lineChart')}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    activeItem === 'lineChart' ? (theme === 'light' ? 'bg-customBlue text-white' : 'bg-white text-background') : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <LineChartIcon className="h-5 w-5" />
                  <span className="sr-only">Line Chart</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Line Chart</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleItemClick('logout')}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    activeItem === 'logout' ? (theme === 'light' ? 'bg-customBlue text-white' : 'bg-white text-background') : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="sm:hidden flex flex-col sm:gap-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir/Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  onClick={() => handleItemClick('logo')}
                  className={`flex h-10 w-10 rounded-full text-lg items-center justify-center ${
                    activeItem === 'logo' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Logo do Projeto</span>
                </Link>
                <Link
                  href="#"
                  onClick={() => handleItemClick('home')}
                  className={`flex items-center gap-4 px-2.5 ${
                    activeItem === 'home' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={() => handleItemClick('dashboard')}
                  className={`flex items-center gap-4 px-2.5 ${
                    activeItem === 'dashboard' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  onClick={() => handleItemClick('lineChart')}
                  className={`flex items-center gap-4 px-2.5 ${
                    activeItem === 'lineChart' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground transition-colors hover:text-foreground'
                  }`}
                >
                  <LineChartIcon className="h-5 w-5" />
                  Line Chart
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
