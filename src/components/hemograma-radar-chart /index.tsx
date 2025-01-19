"use client";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import radarData from '@/data/radar-chart/hemograma_data.json';

const categories = ['Eritrócitos', 'Hemoglobina', 'Hematócrito', 'Leucócitos', 'Eosinófilos', 'Plaquetas'];

export function HemogramaRadarChart() {

  const { theme } = useContext(ThemeContext);

  const darkThemeColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
  const lightThemeColors = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57', '#a4de6c', '#ffa07a'];

  const colors = theme === 'dark' ? darkThemeColors : lightThemeColors;
  const labelColor = theme === 'dark' ? '#ffffff' : '#000000';

  const formattedData = radarData.map(item => ({
    ...item,
    dataColeta: new Date(item.dataColeta).toLocaleDateString('pt-BR')
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="sm:text-2xl ">
          <CardTitle>Comparação de resultados</CardTitle>
          <CardDescription>
            Hemograma
          </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center pb-0">
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={200}
            width={600}
            height={500}
            data={formattedData}
          >
            <PolarGrid stroke={labelColor} />
            <PolarAngleAxis dataKey="dataColeta" stroke={labelColor} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke={labelColor} />
            <Tooltip />
            {categories.map((category, index) => (
              <Radar
                key={index}
                name={category}
                dataKey={category}
                stroke={colors[index]}
                fill={colors[index]}
                fillOpacity={0.6}
              />
            ))}
          </RadarChart>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Comparação dos resultados dos exames de Hemograma
        </div>
      </CardFooter>
    </Card>
  );
}
