"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getExamData } from "@/utils/examsDataUtils";
import { HemogramaRadarChart } from "../hemograma-radar-chart ";
import { CategoryLineChart } from "../category-line-chart";

interface HemogramaContentProps {
  selectedDate: string | null;
}

interface ExamData {
  valor: number | string;
  medida: string;
  resultado: string;
}

const HemogramaContent: React.FC<HemogramaContentProps> = ({ selectedDate }) => {
  const [hemoglobinaData, setHemoglobinaData] = useState<ExamData | null>(null);
  const [leucocitosData, setLeucocitosData] = useState<ExamData | null>(null);
  const [plaquetasData, setPlaquetasData] = useState<ExamData | null>(null);
  const [eritrocitosData, setEritrocitosData] = useState<ExamData | null>(null);
  const [eusinofilosData, setEusinofilosData] = useState<ExamData | null>(null);
  const [hematocritoData, setHematocritoData] = useState<ExamData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setHemoglobinaData(getExamData("Hemograma", "Hemoglobina", selectedDate));
    setLeucocitosData(getExamData("Hemograma", "Leucócitos", selectedDate));
    setPlaquetasData(getExamData("Hemograma", "Plaquetas", selectedDate));
    setEritrocitosData(getExamData("Hemograma", "Eritrócitos", selectedDate));
    setEusinofilosData(getExamData("Hemograma", "Eosinófilos", selectedDate));
    setHematocritoData(getExamData("Hemograma", "Hematócrito", selectedDate));
  }, [selectedDate]);

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-6 gap-4 pt-4">
        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Hemoglobina
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {hemoglobinaData ? `${hemoglobinaData.valor} ${hemoglobinaData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{hemoglobinaData ? hemoglobinaData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Leucócitos
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {leucocitosData ? `${leucocitosData.valor} ${leucocitosData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{leucocitosData ? leucocitosData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Plaquetas
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {plaquetasData ? `${plaquetasData.valor} ${plaquetasData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{plaquetasData ? plaquetasData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Eritrócitos
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {eritrocitosData ? `${eritrocitosData.valor} ${eritrocitosData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{eritrocitosData ? eritrocitosData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Eusinófilos
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {eusinofilosData ? `${eusinofilosData.valor} ${eusinofilosData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{eusinofilosData ? eusinofilosData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                Hematócrito
              </CardTitle>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {hematocritoData ? `${hematocritoData.valor} ${hematocritoData.medida}` : "N/A"}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p>{hematocritoData ? hematocritoData.resultado : "N/A"}</p>
          </CardFooter>
        </Card>
      </section>

      {isClient && selectedDate === null && (
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryLineChart chart="Hemograma" />
          <HemogramaRadarChart />
        </section>
      )}
    </>
  );
};

export default HemogramaContent;
