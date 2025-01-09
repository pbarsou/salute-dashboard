"use client"

import ChartOverview from '@/components/chart'
import { IncreaseIndicatorsGraph } from '@/components/increase-indicators-graph'
import { Indicators } from '@/components/result-indicators'
import { ResultsForGroups } from '@/components/results-for-category'
import TopBar from '@/components/topbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import Doctors from '@/components/doctors'
import TopBarProfileDescription from '@/components/topBar-profile-description'
import Calendar from '@/components/calendar'
import DateDropdownMenu from '@/components/date-dropdown-menu'
import { TopbarMenu } from '@/components/topbar-menu'
import { TopbarMenuV2 } from '@/components/topbar-menuv2'
import { useContext, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

export default function Home() {

  const [activeTab, setActiveTab] = useState('overview');
  const { theme } = useContext(ThemeContext);

  return (
    <main className="sm:ml-14 p-2">  
      <div className="bg-background border border-bg-gray-900 rounded-2xl shadow">
        <div className={`flex items-center justify-between p-4 ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
          <div className="flex items-center space-x-4">
            <TopbarMenu />
            {/* <h1 className="text-3xl font-semibold ml-2 mt-4">Salute Dashboard</h1> */}
          </div>
          
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-full max-w-xs" />
            <Avatar className='w-8 h-8'>
              <AvatarImage src="/images/profile_photo.png"/>
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <TopBar/ >
          </div>
        </div>
        <hr className="w-full border-t border-gray-700 mb-4" />
        

        <div className='pl-4 pr-4 ml-2 mr-2'>

        <h1 className="text-3xl font-semibold ml-2 mt-8">Salute Dashboard</h1>
          <div className='flex pt-5'>
            <TopbarMenuV2 />
          </div>

          {/* <TopBarProfileDescription/> */}

          <div className='flex pt-5'>
            <DateDropdownMenu />
          </div>

          <section className='grid grid-cols-2 lg:grid-cols-5 gap-4 pt-6'>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-xl select-none'>
                    Exames realizados
                  </CardTitle>
                </div>

                <CardDescription>
                  Nº de exames realizados
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>14</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-xl select-none'>
                    Média de periodicidade
                  </CardTitle>
                </div>

                <CardDescription>
                  Periodicidade em que faz exames
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>A cada 3 meses</p>
              </CardContent>
            </Card>
            

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-xl select-none'>
                    Categorias analisadas
                  </CardTitle>
                </div>

                <CardDescription>
                  Nº de categorias analisadas por exame
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>14</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-xl select-none'>
                    Categorias em atenção
                  </CardTitle>
                </div>

                <CardDescription>
                  Nº de categorias com resultado "Alterado"
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>7</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex'>
                  <CardTitle className='text-lg sm:text-xl select-none'>
                    Ano de maior nº de exames
                  </CardTitle>
                </div>

                <CardDescription>
                  Ano de maior número de exames registrados
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-base sm:text-lg font-bold'>2021</p>
              </CardContent>
            </Card>

            <Indicators /> 
            <ResultsForGroups />
            <IncreaseIndicatorsGraph />
            <div className='col-span-2'>
              <Doctors />
            </div>

          </section>

          <section className='mt-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
            {/* <ChartOverview /> */}
            {/* <div className='col-span-1 md:col-span-2'>
              <Calendar />
            </div> */}
          </section>
        </div>
      </div>  
    </main>
  )
}
