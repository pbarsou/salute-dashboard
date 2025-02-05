"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { countResults, countResultsByGroup } from "@/utils/examsDataUtils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface IndicatorsProps {
  groupName: string;
}

const chartConfig = {
  amostras: {
    label: "Amostras",
  },
  normal: {
    label: "normal",
    color: "#0593f0",
  },
  alterado: {
    label: "alterado",
    color: "#fa4603",
  }
} satisfies ChartConfig

export const Indicators: React.FC<IndicatorsProps> = ({ groupName }) => {

  const sampleData = [
    { amostra: "normal", quantidade: countResultsByGroup(groupName, "Normal"), fill: `${groupName ? "#f4f6f7" : "var(--color-normal)"}` },
    { amostra: "alterado", quantidade: countResultsByGroup(groupName, "Alterado"), fill: `${groupName ? "var(--color-alterado)" : "var(--color-alterado)"}`},
  ];

  const id = "pie-interactive"
  const [activeSample, setActiveSample] = React.useState(sampleData[0].amostra)

  const activeIndex = React.useMemo(
    () => sampleData.findIndex((item) => item.amostra === activeSample),
    [activeSample]
  )
  const samples = React.useMemo(() => sampleData.map((item) => item.amostra), [])

  return (

    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="sm:text-2xl flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1z">
          <CardTitle>Comparação de Resultados</CardTitle>
          <CardDescription>"Normal" x "Alterado" </CardDescription>
        </div>
        <Select value={activeSample} onValueChange={setActiveSample}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {samples.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={sampleData}
              dataKey="quantidade"
              nameKey="amostra"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {sampleData[activeIndex].quantidade.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Resultados
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Comparação histórica dos resultados dos exames realizados
        </div>
      </CardFooter>
    </Card>
  )
}
