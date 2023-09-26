import { UserIcon, UserGroupIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export const userOptions = [
  {
    title: 'Mi perfil',
    icon: UserIcon,
    path: '/dashboard/profile',
  },
  {
    title: 'Mis Contactos',
    icon: UserGroupIcon,
    path: '/dashboard/contacts',
  },
  {
    title: 'Configuración',
    icon: Cog6ToothIcon,
    path: '/dashboard/settings',
  },
];