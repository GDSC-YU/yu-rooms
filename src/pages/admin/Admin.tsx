import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { XIcon } from "lucide-react";
import EventForm from "@/components/EventForm";
import { CustomEvent } from "@/assets/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firestore";

const localizer = momentLocalizer(moment);

export default function Admin() {
  const [bookings, setBookings] = useState<CustomEvent[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [eventData, setEventData] = useState<CustomEvent | null>(null);
  const [departments, setDepartments] = useState<string[]>([]);
  const [room, setRoom] = useState<string>("");

  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    const events: CustomEvent[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        start: moment(data.start).toDate(),
        end: moment(data.end).toDate(),
        departments: data.departments || [],
        room: data.room,
        bookedBy: data.bookedBy,
      };
    });
    console.log(events);
    setBookings(events);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const closeDialog = () => {
    if (dialogRef.current && dialogRef.current.open) {
      console.log("closing dialog");
      dialogRef.current.close();
      setIsEventOpen(false);
      setEventData(null);
      setDepartments([]);
      setRoom("");
      console.log("room set to null");
    }
  };

  useEffect(() => {
    console.log("bookings changed");
    closeDialog();
  }, [bookings]);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        dialogRef.current &&
        dialogRef.current.firstElementChild &&
        !e.composedPath().includes(dialogRef.current.firstElementChild)
      ) {
        closeDialog();
      }
    });
  }, []);

  return (
    <>
      <div>
        <dialog
          ref={dialogRef}
          className="backdrop:bg-black/70 relative overflow-visible w-1/2 "
        >
          <div>
            <div className="relative z-0">
              <EventForm
                departments={departments}
                setDepartments={setDepartments}
                room={room}
                setRoom={setRoom}
                startTime={startTime}
                endTime={endTime}
                isEventOpen={isEventOpen}
                eventData={eventData}
                getEmployees={getEmployees}
              />
            </div>
            <button
              onClick={() => dialogRef.current?.close()}
              className=" absolute -top-3 -right-3 z-1 bg-zinc-200 rounded-full shadow w-4 h-4 flex items-center justify-center"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </dialog>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          className="m-6"
          events={bookings}
          onSelectSlot={({ start, end }) => {
            setStartTime(start);
            setEndTime(end);

            setTimeout(() => {
              if (dialogRef.current) {
                console.log("showing dialog");
                dialogRef.current.showModal();
              }
            }, 10);
          }}
          selectable="ignoreEvents"
          onSelectEvent={(event) => {
            console.log(event);
            setTimeout(() => {
              if (dialogRef.current) {
                setIsEventOpen(true);
                setEventData(event);
                console.log("showing dialog");
                dialogRef.current.showModal();
              }
            }, 10);
          }}
          views={["month", "week", "day"]}
          // components={{
          //   event: ({ event }) => (
          //     <div>
          //       <div className="text-ellipsis overflow-hidden">
          //         {event.title}
          //         <br />
          //         Room: {event.room}
          //       </div>
          //     </div>
          //   ),
          // }}
        />
      </div>
    </>
  );
}
