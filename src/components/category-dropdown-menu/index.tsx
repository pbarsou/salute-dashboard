import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  export default function CategoryDropdownMenu() {
    return (
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="glicemia">Glicemia</SelectItem>
          <SelectItem value="hemograma">Hemograma</SelectItem>
          <SelectItem value="minerais-e-vitaminas">Minerais e Vitaminas</SelectItem>
          <SelectItem value="funcao-renal">Função Renal</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  
  