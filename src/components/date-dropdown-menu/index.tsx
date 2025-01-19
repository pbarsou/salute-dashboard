import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getUniqueSortedDates } from '@/utils/examsDataUtils';

interface DateDropdownMenuProps {
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
}

const DateDropdownMenu: React.FC<DateDropdownMenuProps> = ({ selectedDate, setSelectedDate }) => {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const uniqueSortedDates = getUniqueSortedDates();
    setDates(uniqueSortedDates);
  }, []);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <Select onValueChange={handleDateChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Data" />
      </SelectTrigger>
      <SelectContent>
        {dates.map(date => (
          <SelectItem key={date} value={date}>{new Date(date).toLocaleDateString('pt-BR')}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DateDropdownMenu;
