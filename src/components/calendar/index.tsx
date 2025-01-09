import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'


const Calendar = () => {
  return (
    <Card className='flex-1'>
      <CardHeader>
        <div className='flex items-center justify-center'>
          <CardTitle className='text-lg sm:text-xl'>
            Calendário de Exames
          </CardTitle>
        </div>
        {/* <CardDescription>
            Navegue pelo calendário identificando os seus últimos exames realizados
        </CardDescription> */}
      </CardHeader>

      <CardContent className= 'flex-1 100% ml-15'>
        <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "",
            }}
            initialView="dayGridMonth"
            editable={false}
            selectable={false}
            />
      </CardContent>
    </Card>
  );
};

export default Calendar;
