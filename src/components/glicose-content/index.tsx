"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CategoryLineChart } from "../category-line-chart";
import { GlicoseRadarChart } from "../glicose-radar-chart";
import { getExamData } from "@/utils/examsDataUtils";
import TreemapGroup from "../treemap";
import { Indicators } from "../result-indicators";
import { IncreaseIndicatorsGraph } from "../increase-indicators-graph";

interface GlicoseContentProps {
  selectedDate: string | null;
}

interface ExamData {
  valor: number | string;
  medida: string;
  resultado: string;
}

const GlicoseContent: React.FC<GlicoseContentProps> = ({ selectedDate }) => {
  const [glicoseData, setGlicoseData] = useState<ExamData | null>(null);
  const [basalData, setBasalData] = useState<ExamData | null>(null);
  const [minutos120Data, setMinutos120Data] = useState<ExamData | null>(null);
  const [hemoglobinaGlicadaData, setHemoglobinaGlicadaData] =
    useState<ExamData | null>(null);
  const [glicosePosPrandialData, setGlicosePosPrandialData] =
    useState<ExamData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setGlicoseData(getExamData("Glicose", "Glicemia", selectedDate));
    setBasalData(getExamData("Glicose", "Basal", selectedDate));
    setMinutos120Data(getExamData("Glicose", "120 minutos", selectedDate));
    setHemoglobinaGlicadaData(
      getExamData("Glicose", "Hemoglobina Glicada", selectedDate)
    );
    setGlicosePosPrandialData(
      getExamData("Glicose", "Glicose Pós Prandial", selectedDate)
    );
  }, [selectedDate]);

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Glicemia
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {glicoseData
                ? `${glicoseData.valor} ${glicoseData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{glicoseData ? glicoseData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Basal
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {basalData ? `${basalData.valor} ${basalData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{basalData ? basalData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                120 minutos
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {minutos120Data
                ? `${minutos120Data.valor} ${minutos120Data.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{minutos120Data ? minutos120Data.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Hemoglobina Glicada
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {hemoglobinaGlicadaData
                ? `${hemoglobinaGlicadaData.valor} ${hemoglobinaGlicadaData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>
              {hemoglobinaGlicadaData
                ? hemoglobinaGlicadaData.resultado
                : "N/A"}
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Glicose Pós Prandial
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {glicosePosPrandialData
                ? `${glicosePosPrandialData.valor} ${glicosePosPrandialData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>
              {glicosePosPrandialData
                ? glicosePosPrandialData.resultado
                : "N/A"}
            </p>
          </CardFooter>
        </Card>
      </section>

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CategoryLineChart chart="Glicose" />
          <GlicoseRadarChart />
        </section>
      )}

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Indicators groupName="Glicose" />
          <IncreaseIndicatorsGraph groupName="Glicose" />
          <TreemapGroup groupName={"Glicose"} />
        </section>
      )}
    </>
  );
};

export default GlicoseContent;
