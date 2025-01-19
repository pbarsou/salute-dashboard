"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryLineChart } from "../category-line-chart";
import { getExamData } from "@/utils/examsDataUtils";
import { MineraisEVitaminasRadarChart } from "../minerais-e-vitaminas-radar-chart ";

interface MineraisEVitaminasContentProps {
  selectedDate: string | null;
}

interface ExamData {
  valor: number | string;
  medida: string;
  resultado: string;
}

const MineraisEVitaminasContent: React.FC<MineraisEVitaminasContentProps> = ({ selectedDate }) => {
  const [ferroData, setFerroData] = useState<ExamData | null>(null);
  const [calcioData, setCalcioData] = useState<ExamData | null>(null);
  const [vitaminaB12Data, setVitaminaB12Data] = useState<ExamData | null>(null);
  const [vitaminaDData, setVitaminaDData] = useState<ExamData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFerroData(getExamData("Minerais e Vitaminas", "Ferro", selectedDate));
    setCalcioData(getExamData("Minerais e Vitaminas", "Cálcio Total", selectedDate));
    setVitaminaB12Data(getExamData("Minerais e Vitaminas", "Vitamina B12", selectedDate));
    setVitaminaDData(getExamData("Minerais e Vitaminas", "Vitamina D", selectedDate));
  }, [selectedDate]);

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Ferro
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {ferroData ? `${ferroData.valor} ${ferroData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{ferroData ? ferroData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Cálcio Total
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {calcioData ? `${calcioData.valor} ${calcioData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{calcioData ? calcioData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Vitamina B12
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {vitaminaB12Data ? `${vitaminaB12Data.valor} ${vitaminaB12Data.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{vitaminaB12Data ? vitaminaB12Data.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Vitamina D
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {vitaminaDData ? `${vitaminaDData.valor} ${vitaminaDData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{vitaminaDData ? vitaminaDData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>
      </section>

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryLineChart chart="Minerais e Vitaminas" />
          <MineraisEVitaminasRadarChart />
        </section>
      )}
    </>
  );
};

export default MineraisEVitaminasContent;
