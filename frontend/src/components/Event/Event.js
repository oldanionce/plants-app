import React from "react";
import { atcb_init } from "add-to-calendar-button";
import "./atcb.min.css";

const Atcb_action = ({
  nickname,
  irrigation,
  irrigationSummer,
  irrigationWinter,
}) => {
  React.useEffect(atcb_init, []);
  let dateObj = new Date();
  let month = dateObj.getUTCMonth();
  let day = dateObj.getUTCDay();
  let year = dateObj.getUTCFullYear();
  let hour = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();
  let newDate = `${year}-${month}-${day}`;
  // let currentHour = `${hour}:${minutes}`;
  // const irrigationInSummer = ({ irrigationSummer }) => {
  //   let newValue= ""
  //   if (irrigationSummer === 1) {
  //     newValue = "riega una vez al mes"
  //   if (irrigationSummer === 2) {
  //     newValue = "riega una vez por semana"

  //   } if (irrigationSummer === 3) {
  //     newValue = "riega 2/3 veces a la semana"

  //   }
  //   if (irrigationSummer === 4) {
  //     newValue = "riega a diario"

  //   }
  //   return newValue

  // };
  // const irrigationInWinter = ({ irrigationWinter }) => {
  //   let newValue= ""
  //   if (irrigationWinter === 1) {
  //     newValue = "riega una vez al mes"
  //   if (irrigationWinter === 2) {
  //     newValue = "riega una vez por semana"

  //   } if (irrigationWinter === 3) {
  //     newValue = "riega 2/3 veces a la semana"

  //   }
  //   if (irrigationWinter === 4) {
  //     newValue = "riega a diario"

  //   }
  //   return newValue

  // };
  return (
    <div className="atcb">
      {JSON.stringify({
        label: "Añadir recordatorio",
        name: `Regar ${nickname}`,
        description: `¡Recuerda! ${irrigation}. En verano ${irrigationSummer}. En invierno ${irrigationWinter}`,
        startDate: `${newDate}`,
        endDate: `${newDate}`,
        startTime: "10:15",
        endTime: "23:30",
        options: [
          "Apple",
          "Google",
          "iCal",
          "Microsoft365",
          "Outlook.com",
          "MicrosoftTeams",
          "Yahoo",
        ],
        trigger: "click",
        iCalFileName: "Reminder-Event",
      })}
    </div>
  );
};

export default Atcb_action;
