"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { DollarSign } from 'lucide-react'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { BarChart, Bar, CartesianGrid, XAxis } from 'recharts'

export default function ChartOverview() {

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]


  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--primary))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--secondary-foreground))",
    },
  } satisfies ChartConfig

  return (
    <Card className='w-full md:w-1/2 md:max-w-[600px]'>
      <CardHeader>
        <div className='flex items-center justify-content'>
          <CardTitle className='text-lg sm:text-xl'>
            Overview
          </CardTitle>
          <DollarSign className='ml-auto w-4 h-4'/>
        </div>
      </CardHeader>

      <CardContent>

        <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis 
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill='var(--color-desktop)'/>
            <Bar dataKey="mobile" fill='var(--color-mobile)'/>
          </BarChart>
        </ChartContainer>

      </CardContent>
    </Card>
  )
}
