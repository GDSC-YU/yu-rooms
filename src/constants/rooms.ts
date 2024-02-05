export interface Room {
  name: string;
  sunday: Array<TimeSlot> | null;
  monday: Array<TimeSlot> | null;
  tuesday: Array<TimeSlot> | null;
  wednesday: Array<TimeSlot> | null;
  thursday: Array<TimeSlot> | null;
}

export interface TimeSlot {
  timeStart: TimeOfDay;
  timeEnd: TimeOfDay;
  courseName: string;
}

export interface TimeOfDay {
  hour: number;
  minute: number;
}

export const rooms: Record<string, Room> = {
  F003: {
    name: "F003",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "139 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "349 ECO 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "150 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "350 ECO 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "404 NES 212",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "353 ECO 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "149 ENG 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "358 ECO 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "412 CIS 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "361 ECO 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "139 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "349 ECO 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "150 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "350 ECO 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "404 NES 212",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "353 ECO 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "149 ENG 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "358 ECO 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "412 CIS 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "361 ECO 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "139 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "349 ECO 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "150 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "350 ECO 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "404 NES 212",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "353 ECO 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "149 ENG 202",
      },
    ],
  },
  F007: {
    name: "F007",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "366 FIN 412",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "367 FIN 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "473 MGT 308710 MGT 303",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "14 STT 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "547 MKT 311",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "345 ACC 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "346 ACC 311",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "400 FIN 418",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "401 FIN 411",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "366 FIN 412",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "367 FIN 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "473 MGT 308710 MGT 303",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "547 MKT 311",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "48 CHM 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "345 ACC 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "346 ACC 311",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "400 FIN 418",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "401 FIN 411",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "366 FIN 412",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "367 FIN 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "473 MGT 308710 MGT 303",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "14 STT 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "547 MKT 311",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "48 CHM 101",
      },
    ],
  },
  B001: {
    name: "B001",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "753 CIS 103",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "459 CIS 103",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "434 SWE 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "410 CIS 104",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "753 CIS 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "434 SWE 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "441 CIS 103",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "459 CIS 103",
      },
    ],
  },
  B002: {
    name: "B002",
    sunday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "719 CHM 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "53 CHM 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "60 CHM 101",
      },
    ],
    tuesday: null,
    wednesday: null,
    thursday: null,
  },
  B007: {
    name: "B007",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "453 CIS 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "458 CIS 103",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "424 CIS 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "478 SWE 312",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "426 SWE 322",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "656 MIS 328",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "422 CIS 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "634 MIS 316",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "479 SWE 312",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "649 MIS 423",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "657 MIS 328",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "483 CIS 104",
      },
    ],
  },
  B009: {
    name: "B009",
    sunday: null,
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "343 ACC 434",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "471 CIS 221",
      },
    ],
    tuesday: null,
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "469 CIS 104",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "343 ACC 434",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "485 CIS 221",
      },
    ],
    thursday: null,
  },
  B012: {
    name: "B012",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "667 ACC 432",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "635 MIS 317",
      },
    ],
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "769 FIN 312395 FIN 330",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "667 ACC 432",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "635 MIS 317",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "769 FIN 312395 FIN 330",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "754 CIS 103",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "667 ACC 432",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "635 MIS 317",
      },
    ],
  },
  B203: {
    name: "B203",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "664 MIS 520",
      },
    ],
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
  },
  B206: {
    name: "B206",
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "563 HCM 512",
      },
    ],
    thursday: null,
  },
  C001: {
    name: "C001",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "110 LAW 203",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "103 LAW 235",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "97 LAW 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "43 LAW 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "468 CIS 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "488 SWE 302",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "781 LAW 112120 LAW 118",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "110 LAW 203",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "103 LAW 235",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "454 MGT 310",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "97 LAW 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "43 LAW 201",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "488 SWE 302",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "781 LAW 112120 LAW 118",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 17, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "689 LAW 514",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "110 LAW 203",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "103 LAW 235",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "97 LAW 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "43 LAW 201",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 17, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 0 },
        timeEnd: { hour: 22, minute: 40 },
        courseName: "326 STT 505",
      },
    ],
  },
  C003: {
    name: "C003",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "636 MIS 110",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "644 MIS 432",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "654 MIS 110",
      },
    ],
    monday: [
      {
        timeStart: { hour: 7, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "633 MIS 316",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "661 MIS 110",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "641 MIS 110",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "652 MIS 327",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "636 MIS 110",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "642 MIS 432",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "654 MIS 110",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "640 MIS 326",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 7, minute: 30 },
        timeEnd: { hour: 8, minute: 0 },
        courseName: "633 MIS 316",
      },
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "658 MIS 427",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "661 MIS 110",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "641 MIS 110",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "651 MIS 327",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "636 MIS 110",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "642 MIS 432",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "654 MIS 110",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "640 MIS 326",
      },
    ],
  },
  C006: {
    name: "C006",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "773 LAW 225",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 17, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "751 MIS 504775 MIS 520",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "750 MGT 512",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "590 ACC 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "123 LAW 427",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 17, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "716 PGRD 495",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "377 PGRD 496",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "773 LAW 225",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "579 MKT 315",
      },
      {
        timeStart: { hour: 17, minute: 20 },
        timeEnd: { hour: 17, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "748 PGRD 495",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "724 ECO 506",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "590 ACC 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "123 LAW 427",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 17, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "381 MGT 502",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "375 PGRD 495",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "773 LAW 225",
      },
    ],
  },
  C007: {
    name: "C007",
    sunday: [],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "698 FIN 415394 FIN 320",
      },
    ],
    tuesday: [],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "698 FIN 415394 FIN 320",
      },
    ],
    thursday: [],
  },
  C008: {
    name: "C008",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "100 LAW 422",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "101 LAW 308",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "115 LAW 116",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "96 LAW 115",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "122 LAW 323",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "83 LAW 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "84 LAW 334",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "57 LAW 321",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "119 LAW 204",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 17, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "715 LAW 460",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "580 MIS 521",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "100 LAW 422",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "101 LAW 308",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "115 LAW 116",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "96 LAW 115",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "122 LAW 323",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "83 LAW 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "84 LAW 334",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "57 LAW 321",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "119 LAW 204",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "594 MIS 529596 MSIS 509",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "100 LAW 422",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "101 LAW 308",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "115 LAW 116",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "122 LAW 323",
      },
    ],
  },
  C110: {
    name: "C110",
    sunday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "50 LAW 42451 LAW 335",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "782 LAW 12567 LAW 309",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "71 LAW 117",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "52 LAW 101",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "75 LAW 43077 LAW 344",
      },
      {
        timeStart: { hour: 16, minute: 20 },
        timeEnd: { hour: 17, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 0 },
        timeEnd: { hour: 22, minute: 40 },
        courseName: "670 MGT 550",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "54 LAW 229",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "55 LAW 343",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "85 LAW 205",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "59 LAW 345",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "50 LAW 42451 LAW 335",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "782 LAW 12567 LAW 309",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "71 LAW 117",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "52 LAW 101",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "75 LAW 43077 LAW 344",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "54 LAW 229",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "55 LAW 343",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "85 LAW 205",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "59 LAW 345",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "50 LAW 42451 LAW 335",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "782 LAW 12567 LAW 309",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "71 LAW 117",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "52 LAW 101",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "75 LAW 43077 LAW 344",
      },
      {
        timeStart: { hour: 16, minute: 20 },
        timeEnd: { hour: 17, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 0 },
        timeEnd: { hour: 22, minute: 40 },
        courseName: "726 BUS 540",
      },
    ],
  },
  C111: {
    name: "C111",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "61 LAW 119",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "62 LAW 31463 LAW 226",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "107 LAW 316",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "81 LAW 230",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "82 LAW 317",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "770 LAW 117",
      },
      {
        timeStart: { hour: 16, minute: 20 },
        timeEnd: { hour: 17, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 17, minute: 0 },
        timeEnd: { hour: 22, minute: 40 },
        courseName: "355 MGT 545",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "116 LAW 425",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "38 LAW 326",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "79 LAW 302",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "118 LAW 218",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "61 LAW 119",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "62 LAW 31463 LAW 226",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "107 LAW 316",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "81 LAW 230",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "82 LAW 317",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "770 LAW 117",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "116 LAW 425",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "38 LAW 326",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "79 LAW 302",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "118 LAW 218",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "62 LAW 31463 LAW 226",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "107 LAW 316",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "81 LAW 230",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "82 LAW 317",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "770 LAW 117",
      },
    ],
  },
  C112: {
    name: "C112",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "39 LAW 44440 LAW 324",
      },
    ],
    monday: [],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "39 LAW 44440 LAW 324",
      },
    ],
    wednesday: [],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "39 LAW 44440 LAW 324",
      },
    ],
  },
  "C-205": {
    name: "C-205",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "551 HCM 519554 HRM 520",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "541 HCM 518542 HRM 554",
      },
    ],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 19, minute: 30 },
        courseName: "695 LAW 532",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "531 HCM 511",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "555 HCM 517558 HRM 555",
      },
    ],
    wednesday: null,
    thursday: null,
  },
  "C-207": {
    name: "C-207",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "720 ACC 503",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "504 STT 503",
      },
    ],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "501 ACC 503",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "743 HCM 520378 MGT 502",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "722 MIS 504",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "503 MGT 531",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "745 HCM 520",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "516 ECO 506",
      },
    ],
    thursday: null,
  },
  "C-208": {
    name: "C-208",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "723 MGT 502746 HCM 520",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "517 ECO 506",
      },
    ],
    monday: [
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "384 MGT 512",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "511 FIN 503",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "721 MKT 506",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "510 FIN 503",
      },
    ],
    thursday: null,
  },
  "C-209": {
    name: "C-209",
    sunday: null,
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "701 PRQ 402",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "703 CYB 511",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "700 PRQ 401",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "705 CYB 512",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "702 PRQ 403",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "704 CYB 513",
      },
    ],
    thursday: null,
  },
  "C-210": {
    name: "C-210",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "669 LAW 461",
      },
    ],
    monday: [
      {
        timeStart: { hour: 19, minute: 30 },
        timeEnd: { hour: 21, minute: 30 },
        courseName: "693 LAW 522",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 19, minute: 30 },
        courseName: "696 LAW 544",
      },
      {
        timeStart: { hour: 19, minute: 30 },
        timeEnd: { hour: 19, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 19, minute: 30 },
        timeEnd: { hour: 21, minute: 30 },
        courseName: "694 LAW 502",
      },
    ],
    wednesday: null,
    thursday: null,
  },
  "C-211": {
    name: "C-211",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "690 LAW 536",
      },
    ],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "688 LAW 510",
      },
    ],
    tuesday: null,
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "734 LAW 571",
      },
    ],
    thursday: null,
  },
  C212: {
    name: "C212",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 19, minute: 30 },
        courseName: "697 LAW 546",
      },
      {
        timeStart: { hour: 19, minute: 30 },
        timeEnd: { hour: 19, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 19, minute: 30 },
        timeEnd: { hour: 21, minute: 30 },
        courseName: "771 BUS 542",
      },
    ],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "733 LAW 520",
      },
    ],
    tuesday: null,
    wednesday: null,
    thursday: null,
  },
  "D103-CO-FC": {
    name: "D103-CO-FC",
    sunday: null,
    monday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "613 ARC A 422",
      },
    ],
    tuesday: null,
    wednesday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "613 ARC A 422",
      },
    ],
    thursday: null,
  },
  "D109-CO-FC": {
    name: "D109-CO-FC",
    sunday: null,
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "197 IEG 341",
      },
    ],
    tuesday: null,
    wednesday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "197 IEG 341",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "198 IEG 341",
      },
    ],
    thursday: null,
  },
  "D112-CO-FC": {
    name: "D112-CO-FC",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "565 MEC 103",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "785 IEG 301",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "316 IEG 332",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "317 IEG 332",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "565 MEC 103",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "784 IEG 301",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "316 IEG 332",
      },
    ],
    thursday: null,
  },
  D202_LAB_F: {
    name: "D202_LAB_F",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "653 MIS 110",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "637 MIS 110",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "643 MIS 110",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "645 MIS 110",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "653 MIS 110",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "637 MIS 110",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "14 STT 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "21 STT 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "15 STT 103",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "643 MIS 110",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "645 MIS 110",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "653 MIS 110",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "637 MIS 110",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "17 STT 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "18 STT 20119 STT 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "20 STT 201",
      },
    ],
  },
  D209_LAB_F: {
    name: "D209_LAB_F",
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "425 SWE 322",
      },
    ],
    thursday: null,
  },
  E102: {
    name: "E102",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "618 MGT 425619 MGT 315",
      },
    ],
    monday: [],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "618 MGT 425619 MGT 315",
      },
    ],
    wednesday: [],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "618 MGT 425619 MGT 315",
      },
    ],
  },
  E104: {
    name: "E104",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "651 MIS 327",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "369 FIN 313",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "371 FIN 311",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "164 PHL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "337 ACC 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "339 ACC 415",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "165 PHL 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "152 ENG 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "631 ECO 105",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "632 ECO 105",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "365 MGT 304",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "369 FIN 313",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "371 FIN 311",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "164 PHL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "337 ACC 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "339 ACC 415",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "165 PHL 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "152 ENG 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "631 ECO 105",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "632 ECO 105",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "365 MGT 304",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "369 FIN 313",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "371 FIN 311",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "164 PHL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "337 ACC 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "339 ACC 415",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "165 PHL 101",
      },
    ],
  },
  E106: {
    name: "E106",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "461 MGT 220",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "463 MGT 220",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "417 MGT 312",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "448 BUS 404449 MGT 495",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "587 ACC 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "314 IEG 302",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "428 BUS 385",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "628 MGT 300",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "489 SWE 300",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "461 MGT 220",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "463 MGT 220",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "417 MGT 312",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "448 BUS 404449 MGT 495",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "587 ACC 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "315 IEG 302",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "428 BUS 385",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "628 MGT 300",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "193 IEG 311",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "489 SWE 300",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "461 MGT 220",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "463 MGT 220",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "417 MGT 312",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "448 BUS 404449 MGT 495",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "587 ACC 202",
      },
    ],
  },
  E108: {
    name: "E108",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "656 MIS 328",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "136 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "623 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "513 MGT 429",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "539 MGT 330",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "549 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "475 MGT 308712 MGT 303",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "476 MGT 308",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "484 CIS 221",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "136 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "623 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "513 MGT 429",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "387 NES 482",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "539 MGT 330",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "549 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "475 MGT 308712 MGT 303",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "476 MGT 308",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "136 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "623 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "513 MGT 429",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "387 NES 482",
      },
    ],
  },
  E110: {
    name: "E110",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "544 MKT 311",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "546 MKT 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "638 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "608 FIN 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "610 FIN 325732 FIN 417",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "415 NES 483",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "383 CIS 386",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "419 CIS 383",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "550 MKT 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "544 MKT 311",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "546 MKT 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "638 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "608 FIN 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "610 FIN 325732 FIN 417",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "415 NES 483",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "383 CIS 386",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "419 CIS 383",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "550 MKT 201",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "544 MKT 311",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "546 MKT 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "638 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "608 FIN 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "610 FIN 325732 FIN 417",
      },
    ],
  },
  F103: {
    name: "F103",
    sunday: [],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "435 BUS 401436 MGT 314",
      },
    ],
    tuesday: [],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "435 BUS 401436 MGT 314",
      },
    ],
    thursday: [],
  },
  F105: {
    name: "F105",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "23 MTH 100",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "403 BUS 302405 MGT 306",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "648 MGT 306",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "655 MIS 427",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "373 FIN 313",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "706 MGT 102455 MGT 220",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "23 MTH 100",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "403 BUS 302405 MGT 306",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "648 MGT 306",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "373 FIN 313",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "706 MGT 102455 MGT 220",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "23 MTH 100",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "403 BUS 302405 MGT 306",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "648 MGT 306",
      },
    ],
  },
  F107: {
    name: "F107",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "310 IEG 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "27 MTH 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "336 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "585 ACC 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "392 NES 443",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "466 MGT 220",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "650 MIS 431",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "480 MGT 416482 MGT 360",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "310 IEG 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "27 MTH 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "336 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "585 ACC 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "392 NES 443",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "466 MGT 220",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "650 MIS 431",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "480 MGT 416482 MGT 360",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "311 IEG 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "27 MTH 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "336 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "585 ACC 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "392 NES 443",
      },
    ],
  },
  F109: {
    name: "F109",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "502 MGT 331",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "505 MGT 301507 MGT 330",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "630 ECO 105",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "553 MKT 326",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "556 MKT 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "402 NES 212",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "588 ACC 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "540 MGT 331",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "495 MGT 301496 MGT 330",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "502 MGT 331",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "505 MGT 301507 MGT 330",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "630 ECO 105",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "553 MKT 326",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "556 MKT 201",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "402 NES 212",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "588 ACC 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "540 MGT 331",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "495 MGT 301496 MGT 330",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "502 MGT 331",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "505 MGT 301507 MGT 330",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "630 ECO 105",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "553 MKT 326",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "556 MKT 201",
      },
    ],
  },
  G116: {
    name: "G116",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "408 CIS 443",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "668 ARC 304",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "36 PHY 103",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "659 MIS 428",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "15 STT 103",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "629 MGT 321",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "408 CIS 443",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "668 ARC 304",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "36 PHY 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "659 MIS 428",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "629 MGT 321",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "718 CHM 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "36 PHY 103",
      },
    ],
  },
  G118: {
    name: "G118",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "574 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "575 MKT 415576 MKT 316",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "31 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "432 SWE 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "437 CIS 381",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "577 MKT 324",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "578 MKT 324",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "389 NES 481",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "574 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "575 MKT 415576 MKT 316",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "31 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "432 SWE 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "437 CIS 381",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "577 MKT 324",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "578 MKT 324",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "389 NES 481",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "574 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "575 MKT 415576 MKT 316",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "31 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "432 SWE 202",
      },
    ],
  },
  G120: {
    name: "G120",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "396 NES 341",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "421 CIS 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "491 SWE 401",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "492 SWE 411",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "624 PHY 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "56 ECL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "44 PHY 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "41 ECL 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "413 NES 485",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "718 CHM 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "491 SWE 401",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "492 SWE 411",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "624 PHY 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "56 ECL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "44 PHY 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "41 ECL 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "396 NES 341",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "413 NES 485",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "421 CIS 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "491 SWE 401",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "492 SWE 411",
      },
    ],
  },
  G122: {
    name: "G122",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "420 SWE 321",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "64 PHY 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "429 CIS 351",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "68 ECL 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "607 MEC 103",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "191 IEG 311",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "34 PHY 203",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "409 CIS 321",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "420 SWE 321",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "64 PHY 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "429 CIS 351",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "68 ECL 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "607 MEC 103",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "191 IEG 311",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "34 PHY 203",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "409 CIS 321",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "420 SWE 321",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "64 PHY 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "457 CIS 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "429 CIS 351",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "68 ECL 101",
      },
    ],
  },
  H117: {
    name: "H117",
    sunday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "32 PHY 203",
      },
    ],
    monday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "66 PHY 103",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "37 PHY 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "46 PHY 203",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "35 PHY 203",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "72 PHY 103",
      },
    ],
  },
  H119: {
    name: "H119",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "414 NES 485",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "388 NES 482",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "443 CIS 103",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "397 NES 341",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "460 CIS 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "423 CIS 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "411 CIS 104",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "382 NES 221",
      },
    ],
  },
  "C-203": {
    name: "C-203",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "497 MIS 504",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "493 MKT 506",
      },
    ],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "514 ECO 506",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "494 MKT 506",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "518 MGT 541",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "520 PMT 554",
      },
    ],
    thursday: null,
  },
  "C-204": {
    name: "C-204",
    sunday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "372 PGRD 495",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "744 HCM 520379 MGT 502",
      },
    ],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "386 MGT 508",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "499 MIS 504",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "509 STT 503",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "385 MGT 508735 MGT 514",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "498 MIS 504665 MIS 520",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 20, minute: 0 },
        timeEnd: { hour: 22, minute: 30 },
        courseName: "500 ACC 503",
      },
    ],
    thursday: null,
  },
  "C-206": {
    name: "C-206",
    sunday: [],
    monday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "584 MIS 526589 MIS 503",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 17, minute: 30 },
        timeEnd: { hour: 20, minute: 0 },
        courseName: "591 MIS 527593 MIS 505",
      },
    ],
    wednesday: [],
    thursday: null,
  },
  "C301-EN-CO": {
    name: "C301-EN-CO",
    sunday: [
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "324 ORN 05-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "324 ORN 05-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "324 ORN 05-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "324 ORN 05-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "324 ORN 05-C",
      },
    ],
  },
  "C302-EN-M": {
    name: "C302-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "320 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "263 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "264 CELP 01-B",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "320 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "263 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "264 CELP 01-B",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "320 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "263 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "264 CELP 01-B",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "320 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "263 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "264 CELP 01-B",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "320 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "263 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "264 CELP 01-B",
      },
    ],
  },
  "C303-EN-M": {
    name: "C303-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "795 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "280 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "325 CELP 01-B",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "795 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "280 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "325 CELP 01-B",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "795 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "280 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "325 CELP 01-B",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "795 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "280 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "325 CELP 01-B",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "795 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "280 CELP 01-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "325 CELP 01-B",
      },
    ],
  },
  "C304-EN-M": {
    name: "C304-EN-M",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "265 CELP 02-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "267 CELP 02-B",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "265 CELP 02-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "267 CELP 02-B",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "265 CELP 02-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "267 CELP 02-B",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "265 CELP 02-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "267 CELP 02-B",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "265 CELP 02-A",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "267 CELP 02-B",
      },
    ],
  },
  "C305-EN-M": {
    name: "C305-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "269 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "272 CELP 03-B",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "269 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "272 CELP 03-B",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "269 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "272 CELP 03-B",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "269 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "272 CELP 03-B",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "269 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "272 CELP 03-B",
      },
    ],
  },
  "C306-EN-M": {
    name: "C306-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "270 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "273 CELP 03-B",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "270 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "273 CELP 03-B",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "270 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "273 CELP 03-B",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "270 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "273 CELP 03-B",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "270 CELP 03-A",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "273 CELP 03-B",
      },
    ],
  },
  "C307-EN-M": {
    name: "C307-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "218 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "214 ORN 01-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "218 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "214 ORN 01-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "218 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "214 ORN 01-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "218 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "214 ORN 01-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "218 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "214 ORN 01-C",
      },
    ],
  },
  "C308-EN-M": {
    name: "C308-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "219 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "215 ORN 01-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "219 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "215 ORN 01-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "219 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "215 ORN 01-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "219 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "215 ORN 01-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "219 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "215 ORN 01-C",
      },
    ],
  },
  "C309-EN-M": {
    name: "C309-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "319 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "223 ORN 02-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "319 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "223 ORN 02-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "319 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "223 ORN 02-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "319 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "223 ORN 02-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "319 ORN 01-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "223 ORN 02-C",
      },
    ],
  },
  "C310-EN-M": {
    name: "C310-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "227 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "224 ORN 02-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "227 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "224 ORN 02-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "227 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "224 ORN 02-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "227 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "224 ORN 02-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "227 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "224 ORN 02-C",
      },
    ],
  },
  "C311-EN-M": {
    name: "C311-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "228 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "321 ORN 02-C",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "259 ORN 05-R",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "228 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "321 ORN 02-C",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "259 ORN 05-R",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "228 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "321 ORN 02-C",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "259 ORN 05-R",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "228 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "321 ORN 02-C",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "259 ORN 05-R",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "228 ORN 02-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "321 ORN 02-C",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 30 },
        courseName: "259 ORN 05-R",
      },
    ],
  },
  "D201-CO-FC": {
    name: "D201-CO-FC",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "586 ARC 304",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "203 MEG 211",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "204 MEG 211",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "586 ARC 304",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "203 MEG 211",
      },
    ],
    thursday: null,
  },
  "D301-EN-M": {
    name: "D301-EN-M",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "231 ORN 03-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "231 ORN 03-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "231 ORN 03-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "231 ORN 03-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "231 ORN 03-C",
      },
    ],
  },
  "D302-EN-M": {
    name: "D302-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "235 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "232 ORN 03-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "235 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "232 ORN 03-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "235 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "232 ORN 03-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "235 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "232 ORN 03-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "235 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "232 ORN 03-C",
      },
    ],
  },
  "D303-EN-M": {
    name: "D303-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "236 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "322 ORN 03-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "236 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "322 ORN 03-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "236 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "322 ORN 03-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "236 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "322 ORN 03-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "236 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "322 ORN 03-C",
      },
    ],
  },
  "D304-EN-M": {
    name: "D304-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "237 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "241 ORN 04-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "237 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "241 ORN 04-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "237 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "241 ORN 04-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "237 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "241 ORN 04-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "237 ORN 03-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "241 ORN 04-C",
      },
    ],
  },
  "D305-EN-M": {
    name: "D305-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "247 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "242 ORN 04-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "247 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "242 ORN 04-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "247 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "242 ORN 04-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "247 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "242 ORN 04-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "247 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "242 ORN 04-C",
      },
    ],
  },
  "D306-EN-M": {
    name: "D306-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "248 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "323 ORN 04-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "248 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "323 ORN 04-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "248 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "323 ORN 04-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "248 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "323 ORN 04-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "248 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "323 ORN 04-C",
      },
    ],
  },
  "D307-EN-M": {
    name: "D307-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "246 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "251 ORN 05-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "246 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "251 ORN 05-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "246 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "251 ORN 05-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "246 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "251 ORN 05-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "246 ORN 04-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "251 ORN 05-C",
      },
    ],
  },
  "D308-EN-M": {
    name: "D308-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "256 ORN 05-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "252 ORN 05-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "256 ORN 05-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "252 ORN 05-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "256 ORN 05-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "252 ORN 05-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "256 ORN 05-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "252 ORN 05-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "256 ORN 05-R",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "252 ORN 05-C",
      },
    ],
  },
  "D309-EN-M": {
    name: "D309-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "257 ORN 05-R",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "257 ORN 05-R",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "257 ORN 05-R",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "257 ORN 05-R",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "257 ORN 05-R",
      },
    ],
  },
  "D310-EN-M": {
    name: "D310-EN-M",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "258 ORN 05-R",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "258 ORN 05-R",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "258 ORN 05-R",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "258 ORN 05-R",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "258 ORN 05-R",
      },
    ],
  },
  E202: {
    name: "E202",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "545 ARC 204",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "156 ENG 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "137 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "138 ENG 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "472 SWE 412",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "187 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "155 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "612 ARC 502",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "560 MKT 326",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "545 ARC 204",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "156 ENG 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "137 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "138 ENG 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "187 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "155 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "612 ARC 502",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "560 MKT 326",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "156 ENG 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "137 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "138 ENG 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "472 SWE 412",
      },
    ],
  },
  E204: {
    name: "E204",
    sunday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "427 CIS 381",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "157 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "158 ENG 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "162 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "163 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "605 ACC 326606 ACC 426",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "427 CIS 381",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "157 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "158 ENG 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "162 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "163 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "605 ACC 326606 ACC 426",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "157 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "158 ENG 101",
      },
    ],
  },
  E206: {
    name: "E206",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 MTH 100",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "28 MTH 100",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "1 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "2 MTH 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "3 MTH 106",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "557 MKT 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "364 MGT 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "4 MTH 106",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "5 MTH 104",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "30 MTH 100",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "450 CIS 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 MTH 100",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "28 MTH 100",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "1 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "2 MTH 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "3 MTH 106",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "557 MKT 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "364 MGT 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "4 MTH 106",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "5 MTH 104",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "30 MTH 100",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "450 CIS 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 MTH 100",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "28 MTH 100",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "1 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "2 MTH 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "3 MTH 106",
      },
    ],
  },
  E208: {
    name: "E208",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "621 MGT 422",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "16 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "17 STT 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "18 STT 20119 STT 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "20 STT 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "21 STT 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "614 FIN 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "25 MTH 100",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "621 MGT 422",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "16 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "17 STT 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "18 STT 20119 STT 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "20 STT 201",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "614 FIN 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "25 MTH 100",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "621 MGT 422",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "16 STT 203",
      },
    ],
  },
  E210: {
    name: "E210",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "305 IEG 303",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "390 CIS 304",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "189 SOS 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "192 SOS 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "622 PHY 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "70 PHY 103",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "390 CIS 304",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "189 SOS 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "192 SOS 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "622 PHY 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "151 IEG 431",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "153 IEG 431",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "70 PHY 103",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "305 IEG 303",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "306 IEG 303",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "390 CIS 304",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "189 SOS 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "192 SOS 102",
      },
    ],
  },
  F203: {
    name: "F203",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "446 BUS 404447 MGT 495",
      },
    ],
    monday: [],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "446 BUS 404447 MGT 495",
      },
    ],
    wednesday: [],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "446 BUS 404447 MGT 495",
      },
    ],
  },
  F205: {
    name: "F205",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "552 MKT 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "660 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "180 PSY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "185 PSY 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "186 PSY 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "601 ARC 205",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "190 SOS 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "611 ARC 303",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "616 FIN 202",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "552 MKT 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "660 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "180 PSY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "185 PSY 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "186 PSY 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "601 ARC 205",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "190 SOS 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "611 ARC 303",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "616 FIN 202",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "552 MKT 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "660 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "180 PSY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "185 PSY 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "186 PSY 101",
      },
    ],
  },
  F207: {
    name: "F207",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "548 ARC 303",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "170 PHL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "672 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "10 MTH 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "11 MTH 301",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "29 MTH 100",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "140 ENR 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "141 ENR 201",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "33 ENR 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "12 MTH 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "13 MTH 301",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "548 ARC 303",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "170 PHL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "672 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "10 MTH 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "11 MTH 301",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "29 MTH 100",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "33 ENR 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "12 MTH 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "13 MTH 301",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "170 PHL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "672 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "10 MTH 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "11 MTH 301",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "29 MTH 100",
      },
    ],
  },
  F209: {
    name: "F209",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "169 IEG 400",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "171 IEG 400",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "179 PSY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "173 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "757 LAW 115",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "200 IEG 345",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "200 IEG 345",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "58 CHM 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "169 IEG 400",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "179 PSY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "173 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "757 LAW 115",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "201 IEG 345",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "58 CHM 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "179 PSY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "173 PHL 101",
      },
    ],
  },
  G216: {
    name: "G216",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "146 IEG 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "143 IEG 321",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "183 IEG 403",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "604 ARC 203",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "161 ENG 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "159 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "160 ENG 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "146 IEG 301",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "147 IEG 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "144 IEG 321",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "183 IEG 403",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "184 IEG 403",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "604 ARC 203",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "161 ENG 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "159 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "160 ENG 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "143 IEG 321",
      },
    ],
  },
  G218: {
    name: "G218",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "762 IEG 431",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "465 CIS 316",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "490 SWE 301",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "759 IEG 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "212 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "176 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "178 PHL 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "762 IEG 431",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "465 CIS 316",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "490 SWE 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "747 ENG 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "175 IEG 450",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "211 IEG 323",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "211 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "176 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "178 PHL 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "763 IEG 431",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "465 CIS 316",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "174 IEG 450",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "760 IEG 201",
      },
    ],
  },
  G220: {
    name: "G220",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "380 NES 221",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "181 IEG 322",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "209 IEG 202",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "766 IEG 303",
      },
    ],
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "765 IEG 303",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "188 PSY 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "380 NES 221",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "182 IEG 322",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "210 IEG 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "290 IEG 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "294 IEG 201",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "765 IEG 303",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "188 PSY 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "181 IEG 322",
      },
    ],
  },
  G222: {
    name: "G222",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "481 CIS 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "206 IEG 446",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "747 ENG 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "572 IEG 304",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "399 NES 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "194 SOS 102",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "481 CIS 104",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "457 CIS 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "572 IEG 304",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "573 IEG 304",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "399 NES 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "194 SOS 102",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "207 IEG 446",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "747 ENG 201",
      },
    ],
  },
  H217: {
    name: "H217",
    sunday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "767 IEG 303",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "764 IEG 431",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "154 IEG 431",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "166 IEG 342",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "199 IEG 341",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "307 IEG 303",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "472 SWE 412",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "761 IEG 201",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "202 IEG 345",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "166 IEG 342",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "167 IEG 342",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "148 IEG 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "786 IEG 301",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "177 IEG 450",
      },
    ],
  },
  H219: {
    name: "H219",
    sunday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "536 ARCH 203",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "213 IEG 323",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "538 ARCH 203",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "168 IEG 342",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "536 ARCH 203",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "208 IEG 446",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "142 ENR 201",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "538 ARCH 203",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "318 IEG 332",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "172 IEG 400",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "205 MEG 211",
      },
    ],
  },
  E301: {
    name: "E301",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "562 MKT 318",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "566 MKT 418567 MKT 318",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "598 ARC 305",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "512 ARCH 102",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "603 ARCH 202",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "615 ARC A 421",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "508 ARCH 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "562 MKT 318",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "566 MKT 418567 MKT 318",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "598 ARC 305",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "512 ARCH 102",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "603 ARCH 202",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "615 ARC A 421",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "508 ARCH 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "562 MKT 318",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "566 MKT 418567 MKT 318",
      },
    ],
  },
  E302: {
    name: "E302",
    sunday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "595 ARCH 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "527 ARC 302",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "532 ARC 403",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "530 ARC 402",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "595 ARCH 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "527 ARC 302",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "532 ARC 403",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "530 ARC 402",
      },
    ],
    thursday: null,
  },
  E303: {
    name: "E303",
    sunday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "523 ARC 301",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "304 IEG 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "526 ARC 302",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "525 ARC 301",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "523 ARC 301",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "526 ARC 302",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "525 ARC 301",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "783 ARC 213",
      },
    ],
  },
  E304: {
    name: "E304",
    sunday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "515 ARCH 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "519 ARCH 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "515 ARCH 201",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "519 ARCH 201",
      },
    ],
    thursday: null,
  },
  E305: {
    name: "E305",
    sunday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "529 ARC 401",
      },
      {
        timeStart: { hour: 13, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "535 ARCH 204",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "609 ARC A 423",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "534 ARCH 204",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "529 ARC 401",
      },
      {
        timeStart: { hour: 13, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "535 ARCH 204",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "609 ARC A 423",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "Free",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "534 ARCH 204",
      },
    ],
    thursday: null,
  },
  E306: {
    name: "E306",
    sunday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "533 ARC 501",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "662 ARC 305",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "533 ARC 501",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "662 ARC 305",
      },
    ],
    thursday: null,
  },
};
