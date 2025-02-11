"use client";

import { useContext, useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ThemeContext } from "@/context/ThemeContext";
import { calculateCategoryVariation } from "@/utils/examsDataUtils";

interface CategoryVariation {
  category: string;
  averageDifference: number;
}

interface ChartData {
  category: string;
  visitors: number;
  fill: string;
}

interface IncreaseIndicatorsProps {
  groupName?: string;
}

const generateColor = (index: number, groupName?: string) => {
  if (groupName) {
    const hue = 340; 
    const saturation = 60 - index * 5; 
    const lightness = 40 + index * 5; 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } else {
    const hue = 30;
    const saturation = 100 - index * 10;
    const lightness = 50 + index * 5;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
};

export const IncreaseIndicatorsGraph: React.FC<IncreaseIndicatorsProps> = ({ groupName }) => {
  const { theme } = useContext(ThemeContext);
  const [categoriesVariation, setCategoriesVariation] = useState<CategoryVariation[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig>({ categories: { label: "Categories" } });

  useEffect(() => {
    const categoriesVarList = calculateCategoryVariation(groupName);

    const topCategoriesVarList = categoriesVarList.slice(0, 10);

    const newChartData = topCategoriesVarList.map((variation, index) => ({
      category: variation.category,
      visitors: parseFloat(variation.averageDifference.toFixed(2)), // Formatar os valores com duas casas decimais
      fill: generateColor(index, groupName),
    }));

    const newChartConfig: ChartConfig = {
      categories: { label: "Categories" },
    };

    topCategoriesVarList.forEach((variation, index) => {
      newChartConfig[variation.category] = {
        label: variation.category,
        color: generateColor(index, groupName),
      };
    });

    setCategoriesVariation(topCategoriesVarList);
    setChartData(newChartData);
    setChartConfig(newChartConfig);
  }, [groupName]);

  return (
    <Card className="h-full pl-2">
      <CardHeader className="sm:text-2xl">
        <CardTitle>Variação por exame (%)</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className={`p-7 ${groupName === "Funcao Renal" ? "mt-5" : ""}`}>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
              right: 20,
            }}
            width={600}
            height={800} 
            barCategoryGap={20} 
          >
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={15}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label || value
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} barSize={40}> 
              <LabelList
                dataKey="visitors"
                position="right"
                formatter={(value: any) => `${value.toFixed(2)}%`}
                style={{
                  fill: theme === "light" ? "black" : "white",
                  fontSize: "14px",
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-6">
        <div className="leading-none text-muted-foreground">
          Comparação da variação histórica dos exames realizados
        </div>
      </CardFooter>
    </Card>
  );
}
