import {
  ClipboardDocumentCheckIcon,
  UsersIcon,
  TableCellsIcon
} from "@heroicons/react/24/outline";
// https://heroicons.com/

export const sidebarItemsADMIN = [
  {
   title: "Registro Animal",
   path: "/dashboard/animal-registration",
   active: "animal-registration",
   icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Empleados",
    path: "/dashboard/employee-registration",
    active: "employee-registration",
    icon: UsersIcon,
   }
];

export const sidebarItemsUSER = [
  {
    title: "Registro Animal",
    path: "/dashboard/animal-registration",
    active: "animal-registration",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Registro de actividad",
    path: "/dashboard/activity-register",
    active: "activity-register",
    icon: TableCellsIcon,
  },

]

