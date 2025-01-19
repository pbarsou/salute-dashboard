import { useEffect, useState } from "react";
import { getUniqueSortedCategoriesByGroup, getDataByCategory } from "@/utils/examsDataUtils";
import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DataConfig {
  dataColeta: string;
  valor: string | number;
  medida: string | null;
}

interface LineChartProps {
  chart: string;
}

const chartConfig = {
  valor: {
    label: "Valor",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function CategoryLineChart({ chart }: LineChartProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [chartData, setChartData] = useState<DataConfig[]>([]);

  useEffect(() => {
    const uniqueSortedCategories = getUniqueSortedCategoriesByGroup(chart);
    setCategories(uniqueSortedCategories);
    switch (chart) {
      case "Glicose":
        if (uniqueSortedCategories.includes("Glicemia")) {
          setSelectedValue("Glicemia");
        } else if (uniqueSortedCategories.length > 0) {
          setSelectedValue(uniqueSortedCategories[0]);
        }
        break;
    
      case "Hemograma":
        if (uniqueSortedCategories.includes("Hemoglobina")) {
          setSelectedValue("Hemoglobina");
        } else if (uniqueSortedCategories.length > 0) {
          setSelectedValue(uniqueSortedCategories[0]);
        }
        break;
    
      case "Lipidograma":
        if (uniqueSortedCategories.includes("Colesterol Total")) {
          setSelectedValue("Colesterol Total");
        } else if (uniqueSortedCategories.length > 0) {
          setSelectedValue(uniqueSortedCategories[0]);
        }
        break;
    
      case "Minerais e Vitaminas":
        if (uniqueSortedCategories.includes("Ferro")) {
          setSelectedValue("Ferro");
        } else if (uniqueSortedCategories.length > 0) {
          setSelectedValue(uniqueSortedCategories[0]);
        }
        break;
    
      case "Funcao Renal":
        if (uniqueSortedCategories.includes("Uréia")) {
          setSelectedValue("Uréia");
        } else if (uniqueSortedCategories.length > 0) {
          setSelectedValue(uniqueSortedCategories[0]);
        }
        break;
    
      default:
        if (uniqueSortedCategories.length > 0) {
          setSelectedValue(uniqueSortedCategories[0]);
        }
        break;
    }
  }, [chart]);

  useEffect(() => {
    if (selectedValue) {
      const data = getDataByCategory(selectedValue);
      setChartData(data);
    }
  }, [selectedValue]);

  return (
    <Card>
      <CardHeader className="flex-row justify-between pb-0">
        <div>
          <CardTitle>{chart}</CardTitle>
          <CardDescription>Histórico de exames</CardDescription>
        </div>
        <div className="">
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Exames" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="dataColeta"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString('pt-BR')}
            />
            <YAxis dataKey="valor" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="valor"
              type="natural"
              stroke="var(--color-valor)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-valor)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Histórico de {selectedValue} 
        </div>
        <div className="leading-none text-muted-foreground">
          Exibindo os resultados de {selectedValue} do histórico de amostras coletadas
        </div>
      </CardFooter>
    </Card>
  );
}