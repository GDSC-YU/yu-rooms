import { useEffect, useState } from "react";
import { clubs, eventRooms } from "../assets/data/data";
import Select from "react-select";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { CustomEvent } from "@/assets/types";

export default function EventForm({
  setBookings,
  startTime = null,
  endTime = null,
  isEventOpen = false,
  eventData = null,
}: {
  setBookings: React.Dispatch<React.SetStateAction<CustomEvent[]>>;
  startTime?: Date | null;
  endTime?: Date | null;
  isEventOpen?: boolean;
  eventData?: CustomEvent | null;
}) {
  const [eventName, setEventName] = useState<string>();
  const [departments, setDepartments] = useState<string[]>([]);
  const [room, setRoom] = useState<string>();
  const [startDate, setStartDate] = useState<Date>(moment().toDate());
  const [endDate, setEndDate] = useState<Date>(
    moment(Date.now()).add(1, "h").toDate()
  );

  useEffect(() => {
    if (!isEventOpen && startTime && endTime) {
      if (startTime.getHours() === 0 && endTime.getHours() === 0) {
        setStartDate(moment(startTime).set({ hour: 12 }).toDate());
        setEndDate(moment(endTime).set({ hour: 13 }).toDate());
      } else {
        setStartDate(startTime);
        setEndDate(endTime);
      }
    }
  }, [startTime, endTime, isEventOpen]);

  useEffect(() => {
    if (eventData) {
      setEventName(eventData.title as string);
      setDepartments(eventData.departments);
      setRoom(eventData.room);
      setStartDate(eventData.start as Date);
      setEndDate(eventData.end as Date);
    }
  }, [eventData]);

  useEffect(() => {
    setDepartments([]);
    setRoom("");
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(eventName);
    console.log(departments);
    console.log(room);
    console.log(startDate);
    console.log(endDate);
    if (!eventName || !departments || !room || !startDate || !endDate) {
      return;
    }

    setBookings((oldBookings) => {
      return [
        ...oldBookings,
        {
          id: Date.now(),
          title: eventName,
          start: startDate,
          end: endDate,
          departments: departments,
          room: room,
          bookedBy: "John Doe",
        },
      ];
    });
    console.log("setting values to null");
    setEventName("");
    setDepartments([]);
    setRoom("");
    setStartDate(moment().toDate());
    setEndDate(moment(Date.now()).add(1, "h").toDate());
    (e.target as HTMLFormElement).reset();
  };

  console.log("rendering form");
  console.log(eventName);
  console.log(eventData);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="eventName"
        >
          Name
        </label>
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="eventName"
          type="text"
          placeholder="Event Name"
          defaultValue={
            isEventOpen && eventData ? (eventData.title as string) : ""
          }
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="department"
        >
          Department
        </label>
        <Select
          required
          id="department"
          isMulti
          name="department"
          options={clubs}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Select Department"
          value={clubs.filter((club) => departments.includes(club.value))}
          onChange={(e) =>
            setDepartments(e.map((department) => department.value))
          }
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Room"
        >
          Room
        </label>
        <Select
          required
          id="room"
          name="room"
          options={eventRooms}
          classNamePrefix="select"
          placeholder="Select Room"
          value={eventRooms.filter((eventRoom) => eventRoom.value === room)}
          onChange={(e) => e && setRoom(e.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="startDate"
        >
          Start Time
        </label>
        <DatePicker
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={startDate}
          shouldCloseOnSelect={false}
          onChange={(startDate) => {
            if (startDate && startDate > endDate) {
              setEndDate(moment(startDate).add(1, "h").toDate());
            }

            return startDate && setStartDate(startDate);
          }}
          timeInputLabel="Time:"
          dateFormat="dd/MM/yyyy h:mm aa"
          showTimeInput
          name="startDate"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="endDate"
        >
          End Time
        </label>
        <DatePicker
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          shouldCloseOnSelect={false}
          selected={endDate}
          onChange={(endDate) => {
            if (endDate && endDate < startDate) {
              setStartDate(moment(endDate).subtract(1, "h").toDate());
            }

            return endDate && setEndDate(endDate);
          }}
          timeInputLabel="Time:"
          dateFormat="dd/MM/yyyy h:mm aa"
          showTimeInput
          name="endDate"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
      >
        Create Event
      </button>
    </form>
  );
}
