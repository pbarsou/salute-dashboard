import React, { useContext, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeContext } from "@/context/ThemeContext";
import { getMostRecentExam, getYear } from "@/utils/examsDataUtils";
import profileData from "@/data/profile_data.json";

interface Exam {
  nomeMedico: string;
  convenio: string;
  dataColeta: string;
  dataEmissao: string;
  laboratorio: string;
  numAtendimento: string | number | null;
  estado: string;
  pais: string;
}

export default function TopBarProfileDescription() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mostRecentExam, setMostRecentExam] = useState<Exam>();

  // Obter os 5 exames mais recentes com datas de coleta diferentes
  useEffect(() => {
    const recentExam = getMostRecentExam();
    setMostRecentExam(recentExam);
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-2 pt-6">
      <div
        className={`mx-auto h-32 w-full rounded-xl bg-background p-6 flex items-center border-2 ${
          theme === "dark" ? "border-gray-500 " : "border-gray-200"
        }`}
      >
        <Avatar className="w-20 h-20 mr-6">
          <AvatarImage src="" />
          <AvatarFallback>DV</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center space-y-2">
          <div className="font-bold text-xl">{profileData.nomePaciente}</div>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col space-y-2 ">
              <div className="text-sm text-muted-background">
                Idade: {profileData.idade}
              </div>
              <div className="text-sm text-muted-background">
                Último exame: {getYear(mostRecentExam?.dataColeta)}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-muted-background">
                Laboratório: {mostRecentExam?.laboratorio}
              </div>
              <div className="text-sm text-muted-background">
                Convênio: {mostRecentExam?.convenio}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-muted-background">
                Médico(a): {mostRecentExam?.nomeMedico}
              </div>
              <div className="text-sm text-muted-background">
                Número de atendimento: {mostRecentExam?.numAtendimento}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
            <div className="text-sm text-muted-background">
              Data Coleta: {mostRecentExam?.dataColeta ? new Date(mostRecentExam.dataColeta).toLocaleDateString('pt-BR') : "N/A"}
            </div>
            <div className="text-sm text-muted-background">
              Data Emissão: {mostRecentExam?.dataEmissao ? new Date(mostRecentExam.dataEmissao).toLocaleDateString('pt-BR') : "N/A"}
            </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-muted-background">
                Estado: São Paulo
              </div>
              <div className="text-sm text-muted-background">País: Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
