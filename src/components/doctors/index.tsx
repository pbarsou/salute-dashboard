import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { CircleDollarSign, PersonStandingIcon } from 'lucide-react'
import { ChartContainer } from '../ui/chart'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

export default function Doctors() {
  return (
    <Card className='flex-1'>
      <CardHeader>
        <div className='flex items-center justify-center'>
          <CardTitle className='text-lg sm:text-xl'>
            Últimos médicos que o atenderam
          </CardTitle>
          <MedicalInformationOutlinedIcon className='ml-auto w-3 h-3'/>
        </div>
        <CardDescription>
            Histórico de últimos médicos que atenderam o paciente
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
                <AvatarImage src='https://github.com/pbarsou.png'/>
                <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div>
                <p className='text-sm sm:text-base font-semibold'>Pablo Barbosa</p>
                <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
                <AvatarImage src='https://github.com/pbarsou.png'/>
                <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div>
                <p className='text-sm sm:text-base font-semibold'>Pablo Barbosa</p>
                <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
                <AvatarImage src='https://github.com/pbarsou.png'/>
                <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div>
                <p className='text-sm sm:text-base font-semibold'>Pablo Barbosa</p>
                <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>              
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
                <AvatarImage src='https://github.com/pbarsou.png'/>
                <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div>
                <p className='text-sm sm:text-base font-semibold'>Pablo Barbosa</p>
                <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
        </article>
      </CardContent>
    </Card>
  )
}
