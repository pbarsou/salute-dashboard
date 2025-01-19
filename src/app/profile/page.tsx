"use client";

import { useContext, useState, ChangeEvent, useEffect } from "react";
import { format } from "date-fns";
import { ThemeContext } from "@/context/ThemeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import ThemeMenu from "@/components/theme-menu";
import AccountMenu from "@/components/account-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavigationMenuTopbar } from "@/components/navigation-menu-topbar";
import { Button } from "@/components/ui/button";
import { getMostRecentExam } from "@/utils/examsDataUtils";
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

export default function Profile() {
  
  const { theme } = useContext(ThemeContext);
  const [mostRecentExam, setMostRecentExam] = useState<Exam | null>(null);

  useEffect(() => {
    const recentExam = getMostRecentExam();
    setMostRecentExam(recentExam);
  }, []);

  const [profile, setProfile] = useState({
    name: profileData.nomePaciente,
    email: profileData.email,
    age: profileData.idade,
    sex: profileData.genero,
    height: profileData.altura,
    weight: profileData.peso,
    lastExamDate: '',
    doctor: '',
    laboratory: '',
    healthIssues: profileData.problemasSaude,
  });

  useEffect(() => {
    if (mostRecentExam) {
      const formattedDate = new Date(mostRecentExam.dataColeta).toLocaleDateString("pt-BR");
      setProfile((prevProfile) => ({
        ...prevProfile,
        lastExamDate: formattedDate, // O formato será YYYY-MM-DD
        doctor: mostRecentExam.nomeMedico,
        laboratory: mostRecentExam.laboratorio,
      }));
    }
  }, [mostRecentExam]);
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Profile saved", profile);
  };

  return (
    <main className="sm:ml-14 p-2">
      <div className="bg-background border border-bg-gray-900 rounded-2xl shadow">
        <div
          className={`flex items-center justify-between p-4 ${
            theme === "light" ? "text-dark" : "text-white"
          }`}
        >
          <div className="flex items-center space-x-4">
            <NavigationMenuTopbar />
          </div>

          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full max-w-xs"
            />
            <AccountMenu />
            <ThemeMenu />
          </div>
        </div>
        <hr className="w-full border-t border-bg-gray-900" />

        <div className="p-4">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>
                Configure as informações do seu perfil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src="/images/profile_photo.png"
                    alt="Profile Photo"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">{profile.name}</h2>
                  <p className="text-sm text-gray-500">{profile.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Idade
                  </label>
                  <Input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Sexo</label>
                  <Input
                    type="text"
                    name="sex"
                    value={profile.sex}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Altura (cm)
                  </label>
                  <Input
                    type="number"
                    name="height"
                    value={profile.height}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Peso (kg)
                  </label>
                  <Input
                    type="number"
                    name="weight"
                    value={profile.weight}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Último exame
                  </label>
                  <Input
                    type="text"
                    name="lastExamDate"
                    value={profile.lastExamDate}
                    className="w-full"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Médico(a)
                  </label>
                  <Input
                    type="text"
                    name="doctor"
                    value={profile.doctor}
                    className="w-full"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Laboratório
                  </label>
                  <Input
                    type="text"
                    name="laboratory"
                    value={profile.laboratory}
                    className="w-full"
                    readOnly
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Problemas de saúde
                  </label>
                  <Input
                    type="text"
                    name="healthIssues"
                    value={profile.healthIssues}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  className={`border-2 rounded-lg px-4 py-2 ${
                    theme === "light"
                      ? "border-black text-black"
                      : "border-white text-white"
                  }`}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
