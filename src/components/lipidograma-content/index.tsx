"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryLineChart } from "../category-line-chart";
import { getExamData } from "@/utils/examsDataUtils";
import { LipidogramaRadarChart } from "../lipidograma-radar-chart ";

interface LipidogramaContentProps {
  selectedDate: string | null;
}

interface ExamData {
  valor: number | string;
  medida: string;
  resultado: string;
}

const LipidogramaContent: React.FC<LipidogramaContentProps> = ({ selectedDate }) => {
  const [colesterolTotalData, setColesterolTotalData] = useState<ExamData | null>(null);
  const [triglicerideosData, setTriglicerideosData] = useState<ExamData | null>(null);
  const [hdlColesterolData, setHdlColesterolData] = useState<ExamData | null>(null);
  const [ldlColesterolData, setLdlColesterolData] = useState<ExamData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setColesterolTotalData(getExamData("Lipidograma", "Colesterol Total", selectedDate));
    setTriglicerideosData(getExamData("Lipidograma", "Triglicerídeos", selectedDate));
    setHdlColesterolData(getExamData("Lipidograma", "HDL Colesterol", selectedDate));
    setLdlColesterolData(getExamData("Lipidograma", "LDL Colesterol", selectedDate));
  }, [selectedDate]);

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Colesterol Total
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {colesterolTotalData ? `${colesterolTotalData.valor} ${colesterolTotalData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{colesterolTotalData ? colesterolTotalData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Triglicerídeos
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {triglicerideosData ? `${triglicerideosData.valor} ${triglicerideosData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{triglicerideosData ? triglicerideosData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                HDL Colesterol
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {hdlColesterolData ? `${hdlColesterolData.valor} ${hdlColesterolData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{hdlColesterolData ? hdlColesterolData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                LDL Colesterol
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {ldlColesterolData ? `${ldlColesterolData.valor} ${ldlColesterolData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{ldlColesterolData ? ldlColesterolData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>
      </section>

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryLineChart chart="Lipidograma" />
          <LipidogramaRadarChart />
        </section>
      )}
    </>
  );
};

export default LipidogramaContent;
