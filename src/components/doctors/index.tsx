import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { getFiveMostRecentUniqueDateExams } from "@/utils/examsDataUtils";

interface Exam {
  nomeMedico: string;
  convenio: string;
  dataColeta: string;
  laboratorio: string;
  numAtendimento: string | number | null;
}

export default function Doctors() {
  const [mostRecentDoctors, setMostRecentDoctors] = useState<Exam[]>([]);

  useEffect(() => {
    const recentDoctors = getFiveMostRecentUniqueDateExams();
    setMostRecentDoctors(recentDoctors);
  }, []);

  return (
    <div className="h-full flex">
      <Card className="flex-1 h-full">
        <CardHeader>
          <div className="flex">
            <CardTitle className="text-lg sm:text-2xl">
              Últimos médicos que o atenderam
            </CardTitle>
          </div>
          <CardDescription>
            Histórico de últimos médicos que atenderam o paciente
          </CardDescription>
        </CardHeader>

        <CardContent className="overflow-y-auto flex-1">
          {mostRecentDoctors.map((doctor, index) => (
            <article
              key={index}
              className={`flex items-center gap-2 mb-5 ${
                index !== mostRecentDoctors.length - 1 ? "border-b" : ""
              } py-5`}
            >
              <div className="flex flex-col justify-center space-y-2">
                <div className="flex font-bold text-xl">
                  <BadgeOutlinedIcon className="h-4 w-4 mr-2" />
                  <div>{doctor.nomeMedico}</div>
                </div>
                <div className="flex flex-row space-x-8">
                  <div className="flex flex-col space-y-2">
                    <div className="text-sm text-muted-background">
                      Convênio: {doctor.convenio}
                    </div>
                    <div className="text-sm text-muted-background">
                      Data Coleta: {doctor.dataColeta}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-sm text-muted-background">
                      Laboratório: {doctor.laboratorio}
                    </div>
                    <div className="text-sm text-muted-background">
                      Número de Atendimento: {doctor.numAtendimento}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
