import React from "react";
import { atcb_init } from "add-to-calendar-button";

const Atcb_action = () => {
  React.useEffect(atcb_init, []);
  return (
    <button className="atcb_customTrigger" onClick={Atcb_action}>
      Añadir recordatorio
      <div className="atcb" style={{ display: "none" }}>
        {JSON.stringify({
          name: "Añade el título del evento",
          startDate: "2022-01-14",
          endDate: "2022-01-18",
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
      </div>{" "}
    </button>
  );
};

export default Atcb_action;
