import {
  ClipboardDocumentCheckIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
// https://heroicons.com/

export const sidebarItems = [
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
