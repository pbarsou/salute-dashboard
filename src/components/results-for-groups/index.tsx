"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useContext } from "react";
import { ResponsiveSunburst } from '@nivo/sunburst';
import data from '../../data/sunburst_data.json';
import { ThemeContext } from "@/context/ThemeContext";

export function ResultsForGroups() {

  const { theme } = useContext(ThemeContext);

  const tooltipStyle = {
    color: theme === 'dark' ? '#ffffff' : '#000000', 
    background: theme === 'dark' ? '#333333' : '#ffffff', 
    padding: '5px',
    borderRadius: '3px',
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="sm:text-2xl ">
          <CardTitle>Resultados por grupos</CardTitle>
          <CardDescription>
            "Comparação de resultados por grupos"
          </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
          <ResponsiveSunburst
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                id="name"
                value="loc"
                cornerRadius={2}
                borderColor={{ theme: 'background' }}
                colors={{ scheme: 'nivo' }}
                childColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.1
                        ]
                    ]
                }}
                enableArcLabels={true}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.4
                        ]
                    ]
                }}
                tooltip={({ id, value, color }) => (
                    <div style={{ ...tooltipStyle, color }}>
                        <strong>{id}</strong>: <strong>{value}</strong>
                    </div>
                )}
            />
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Comparação histórica dos resultados dos exames realizados
        </div>
      </CardFooter>
    </Card>
  );
}
