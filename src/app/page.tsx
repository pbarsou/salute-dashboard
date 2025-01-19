"use client"

import { IncreaseIndicatorsGraph } from '@/components/increase-indicators-graph'
import { Indicators } from '@/components/result-indicators'
import { ResultsForGroups } from '@/components/results-for-groups'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Doctors from '@/components/doctors'
import TopBarProfileDescription from '@/components/topBar-profile-description'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { calculateAverageTimeBetweenConsultations, countAlteredResults, countNonNullResults, countUniqueDataColeta, countUniqueExam, getYearWithMostCollections } from '@/utils/examsDataUtils'

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [sampleCount, setSampleCount] = useState(0);
  const [averageTime, setAverageTime] = useState(0);
  const [examCount, setExamCount] = useState(0);
  const [nonNullCount, setNonNullCount] = useState(0);
  const [alteredResultsCount, setAlteredResultsCount] = useState(0);
  const [maxYear, setMaxYear] = useState("");

  useEffect(() => {
    const countData = countUniqueDataColeta();
    const avgTime = calculateAverageTimeBetweenConsultations();
    const countExam = countUniqueExam();
    const nonNullCount = countNonNullResults();
    const countAlteredResult = countAlteredResults();
    const maxYearFound = getYearWithMostCollections();
    setSampleCount(countData);
    setAverageTime(avgTime);
    setExamCount(countExam);
    setNonNullCount(nonNullCount);
    setAlteredResultsCount(countAlteredResult);
    setMaxYear(maxYearFound);
  }, []);

  return (
    <main className="sm:ml-14 p-2">  
      <div className="bg-background border border-bg-gray-900 rounded-2xl shadow">      
        <div className='pl-4 pr-4 ml-2 mr-2'>

          <div className='flex justify-between items-center'>
            <h1 className="text-6xl font-semibold ml-2 mt-8">Salute Dashboard</h1>
          </div>

          <TopBarProfileDescription/>

          <section className='grid grid-cols-2 lg:grid-cols-5 gap-4 pt-6'>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-2xl select-none'>
                    Amostras coletadas
                  </CardTitle>
                </div>

                <CardDescription>
                  Nº de amostras coletadas
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>{sampleCount}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-2xl select-none'>
                    Média de periodicidade
                  </CardTitle>
                </div>

                <CardDescription>
                  Periodicidade em que faz exames
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>A cada {averageTime.toFixed(0)} meses</p>
              </CardContent>
            </Card>
            

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-2xl select-none'>
                    Exames analisados
                  </CardTitle>
                </div>

                <CardDescription>
                  Nº de exames analisados por amostra
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>{nonNullCount}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-2xl select-none'>
                    Exames em atenção
                  </CardTitle>
                </div>

                <CardDescription>
                  Nº de exames com resultado "Alterado"
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>{alteredResultsCount}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-2xl select-none'>
                    Ano de maior nº de exames
                  </CardTitle>
                </div>

                <CardDescription>
                  Ano de maior número de exames registrados
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>{maxYear}</p>
              </CardContent>
            </Card>

            <Indicators /> 
            <ResultsForGroups />

            <div className='col-span-2'>
              <IncreaseIndicatorsGraph />
            </div>
            <Doctors />

          </section>
        </div>
      </div>  
    </main>
  )
}
