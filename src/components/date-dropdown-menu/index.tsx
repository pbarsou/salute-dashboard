import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  export default function DateDropdownMenu() {
    return (
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="07/01/2025">07/01/2025</SelectItem>
          <SelectItem value="08/01/2025">08/01/2025</SelectItem>
          <SelectItem value="09/01/2025">09/01/2025</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  
  