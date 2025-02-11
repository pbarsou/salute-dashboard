import React from "react";
import { Treemap } from "recharts";
import treemap_data from "@/data/treemap_data.json";
import { ChartConfig, ChartContainer } from "../ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TreemapGroupProps {
  groupName: string;
}

const chartConfig = {
  valor: {
    label: "Valor",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const TreemapGroup: React.FC<TreemapGroupProps> = ({ groupName }) => {
  const filteredData =
    treemap_data.find((group) => group.name === groupName)?.children || [];

  return (
    <Card>
      <CardHeader className="flex-row justify-between pb-0">
        <div>
          <CardTitle> {groupName} Treemap</CardTitle>
          <CardDescription>Histórico de exames</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-12">
        <ChartContainer config={chartConfig}>
          <Treemap
            width={400}
            height={200}
            data={filteredData}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#0593f0" // Defina a cor desejada aqui
          />
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Exames mais recorrentes em {groupName}
        </div>
        <div className="leading-none text-muted-foreground">
          Exibindo os resultados por exames do histórico de amostras
          coletadas em {groupName}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TreemapGroup;
