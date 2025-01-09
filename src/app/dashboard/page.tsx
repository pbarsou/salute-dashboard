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
import DateDropdownMenu from '@/components/date-dropdown-menu'
import CategoryDropdownMenu from '@/components/category-dropdown-menu'

export default function Dashboard() {

  return (
    <main className='sm:ml-14 p-4'>
      <TopBar/> 

      <div className='flex pt-5'>
        <CategoryDropdownMenu />
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

        {/* <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl select-none'>
                Quantidade de categorias analisádas
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4'/>
            </div>

            <CardDescription>
              Nº de categorias analisádas
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
          </CardContent>
        </Card> */}


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

        {/* <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl select-none'>
                Categorias 
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4'/>
            </div>

            <CardDescription>
              Glicemia
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl select-none'>
                Diabetes
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4'/>
            </div>

            <CardDescription>
              Glicemia
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl select-none'>
                Diabetes
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4'/>
            </div>

            <CardDescription>
              Glicemia
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
          </CardContent>
        </Card> */}

        <Indicators /> 
        <ResultsForGroups />
        <IncreaseIndicatorsGraph />
        <div className='col-span-2'>
          <Doctors />
        </div>

      </section>

      <section className='mt-4 flex flex-col md:flex-row gap-4'>
        {/* <ChartOverview /> */}
        
      </section>
    </main>
  )
}