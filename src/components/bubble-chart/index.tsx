"use client";

import { useContext, useEffect, useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeContext } from "@/context/ThemeContext";
import examsData from "@/data/exams_data.json"; // Substitua pelo caminho correto para os seus dados de exames
import { filterExams } from "@/utils/examsDataUtils";

interface Exam {
  group: string;
  categoria: string;
  valor: string | number;
}

interface BubbleData {
  valor: string | number;
  frequency: number;
}

const countValues = (filteredExams: Exam[]) => {
  const valueCount: { [key: string]: number } = { Positivo: 0, Negativo: 0 };
  filteredExams.forEach(exam => {
    if (exam.valor in valueCount) {
      valueCount[exam.valor]++;
    }
  });
  return valueCount;
};

export const BubbleChart: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [bubbleData, setBubbleData] = useState<BubbleData[]>([]);

  useEffect(() => {
    const filteredExams = filterExams("Urina", ["Proteína", "Glicose"]);
    const valueCount = countValues(filteredExams);
    const data: BubbleData[] = Object.keys(valueCount).map(key => ({
      valor: key,
      frequency: valueCount[key],
    }));
    setBubbleData(data);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="sm:text-2xl">
        <CardTitle>Frequência dos Valores</CardTitle>
        <CardDescription>Urina - Proteína e Glicose</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center pb-0">
        <ScatterChart
          width={600}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="valor" name="Valor" />
          <YAxis type="number" dataKey="frequency" name="Frequência" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter
            name="Valores"
            data={bubbleData}
            fill={theme === "dark" ? "#8884d8" : "#82ca9d"}
            shape="circle"
          />
        </ScatterChart>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Frequência dos valores "Positivo" e "Negativo" para exames de Urina - Proteína e Glicose
        </div>
      </CardFooter>
    </Card>
  );
};
