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
import { getExamData } from "@/utils/examsDataUtils";
import { FuncaoRenalRadarChart } from "../funcao-renal-radar-chart ";
import MyResponsiveWaffle from "../waffle-chart";
import { BubbleChart } from "../bubble-chart";
import { Indicators } from "../result-indicators";
import { IncreaseIndicatorsGraph } from "../increase-indicators-graph";
import TreemapGroup from "../treemap";

interface FuncaoRenalContentProps {
  selectedDate: string | null;
}

interface ExamData {
  valor: number | string;
  medida: string | null;
  resultado: string;
}

const FuncaoRenalContent: React.FC<FuncaoRenalContentProps> = ({
  selectedDate,
}) => {
  const [ureiaData, setUreiaData] = useState<ExamData | null>(null);
  const [creatininaData, setCreatininaData] = useState<ExamData | null>(null);
  const [potassioData, setPotassioData] = useState<ExamData | null>(null);
  const [acidoUricoData, setAcidoUricoData] = useState<ExamData | null>(null);
  const [phData, setPhData] = useState<ExamData | null>(null);
  const [corData, setCorData] = useState<ExamData | null>(null);
  const [densidadeData, setDensidadeData] = useState<ExamData | null>(null);
  const [proteinaData, setProteinaData] = useState<ExamData | null>(null);
  const [glicoseData, setGlicoseData] = useState<ExamData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setUreiaData(getExamData("Funcao Renal", "Uréia", selectedDate));
    setCreatininaData(getExamData("Funcao Renal", "Creatinina", selectedDate));
    setPotassioData(getExamData("Funcao Renal", "Potássio", selectedDate));
    setAcidoUricoData(getExamData("Funcao Renal", "Ácido Úrico", selectedDate));
    setPhData(getExamData("Funcao Renal", "pH", selectedDate));
    setCorData(getExamData("Funcao Renal", "Cor", selectedDate));
    setDensidadeData(getExamData("Funcao Renal", "Densidade", selectedDate));
    setProteinaData(getExamData("Funcao Renal", "Proteína", selectedDate));
    setGlicoseData(getExamData("Funcao Renal", "Glicose", selectedDate));
    console.log(corData);
    console.log(proteinaData);
  }, [selectedDate]);

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Uréia
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {ureiaData ? `${ureiaData.valor} ${ureiaData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{ureiaData ? ureiaData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Creatinina
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {creatininaData
                ? `${creatininaData.valor} ${creatininaData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{creatininaData ? creatininaData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Potássio
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {potassioData
                ? `${potassioData.valor} ${potassioData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{potassioData ? potassioData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Ácido úrico
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {acidoUricoData
                ? `${acidoUricoData.valor} ${acidoUricoData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{acidoUricoData ? acidoUricoData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>
      </section>

      <h1 className="text-2xl font-semibold ml-2 mt-4 mb-4">Urina</h1>

      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                pH
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {phData ? phData.valor : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{phData ? phData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Cor
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {corData ? corData.valor : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{corData ? corData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Densidade
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {densidadeData
                ? `${densidadeData.valor} ${densidadeData.medida}`
                : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{densidadeData ? densidadeData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Proteína
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {proteinaData ? proteinaData.valor : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{proteinaData ? proteinaData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Glicose
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {glicoseData ? glicoseData.valor : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{glicoseData ? glicoseData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>
      </section>

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CategoryLineChart chart="Funcao Renal" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Indicators groupName="Funcao Renal" />
         
          <FuncaoRenalRadarChart />     
        </div>
      </section>
      
      )}

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <BubbleChart />
          <TreemapGroup groupName={"Funcao Renal"} />
          <IncreaseIndicatorsGraph groupName="Funcao Renal" />
        </section>
      )}
    </>
  );
};

export default FuncaoRenalContent;
