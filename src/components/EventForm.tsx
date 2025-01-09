import { useEffect, useState } from "react";
import { clubs, eventRooms } from "../assets/data/data";
import Select from "react-select";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { CustomEvent } from "@/assets/types";
import { collection, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firestore";

export default function EventForm({
  departments,
  setDepartments,
  room,
  setRoom,
  startTime = null,
  endTime = null,
  isEventOpen = false,
  eventData = null,
  getEmployees,
}: {
  departments: string[];
  setDepartments: React.Dispatch<React.SetStateAction<string[]>>;
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  startTime?: Date | null;
  endTime?: Date | null;
  isEventOpen?: boolean;
  eventData?: CustomEvent | null;
  getEmployees: () => void;
}) {
  const [eventName, setEventName] = useState<string>();
  const [startDate, setStartDate] = useState<Date>(moment().toDate());
  const [endDate, setEndDate] = useState<Date>(
    moment(Date.now()).add(1, "h").toDate()
  );

  useEffect(() => {
    if (!isEventOpen && startTime && endTime) {
      if (startTime.getHours() === 0 && endTime.getHours() === 0) {
        setStartDate(moment(startTime).set({ hour: 12 }).toDate());
        setEndDate(moment(startTime).set({ hour: 13 }).toDate());
      } else {
        setStartDate(startTime);
        setEndDate(endTime);
      }
    }
  }, [startTime, endTime, isEventOpen]);

  useEffect(() => {
    if (eventData) {
      console.log("setting event Data");
      console.log(room);
      setEventName(eventData.title as string);
      setDepartments(eventData.departments);
      setRoom(eventData.room);
      setStartDate(eventData.start as Date);
      setEndDate(eventData.end as Date);
      console.log(eventData);
      console.log(room);
    }
  }, [eventData, room, departments, setDepartments, setRoom]);

  const addEvent = async () => {
    try {
      await addDoc(collection(db, "events"), {
        title: eventName,
        start: moment(startDate).format("YYYY-MM-DDTHH:mm:ss"),
        end: moment(endDate).format("YYYY-MM-DDTHH:mm:ss"),
        departments: departments,
        room: room,
        bookedBy: "John Doe",
      });
      getEmployees();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const updateEvent = async () => {
    if (eventData) {
      await setDoc(doc(db, "events", eventData.id), {
        title: eventName,
        start: moment(startDate).format("YYYY-MM-DDTHH:mm:ss"),
        end: moment(endDate).format("YYYY-MM-DDTHH:mm:ss"),
        departments: departments,
        room: room,
        bookedBy: eventData.bookedBy,
      });
      getEmployees();
    }
  };

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
    if (!isEventOpen) {
      addEvent();
    }
    if (isEventOpen) {
      updateEvent();
    }

    console.log("setting values to null");
    setEventName("");
    setDepartments([]);
    setRoom("");
    setStartDate(moment().toDate());
    setEndDate(moment(Date.now()).add(1, "h").toDate());
    (e.target as HTMLFormElement).reset();
  };

  const deleteEvent = async () => {
    if (eventData) {
      try {
        await deleteDoc(doc(db, "events", eventData.id));
        getEmployees();
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
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
          isClearable
          value={
            eventRooms.find((eventRoom) => eventRoom.value === room) || null
          }
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
        {isEventOpen ? "Save Changes" : "Create Event"}
      </button>
      {isEventOpen && (
        <button
          className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={deleteEvent}
        >
          Delete Event
        </button>
      )}
    </form>
  );
}
