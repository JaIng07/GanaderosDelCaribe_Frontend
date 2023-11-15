export const status = {

  todo: {
    name: 'Tareas asignadas',
    items: [
      {
        id: '1',
        title: 'Revisar estado del ganado',
        description: 'Recorrer potreros y revisar que los animales estén sanos. Contar cabezas.'

      },
      {
        id: '2',
        title: 'Comprar alimento',
        description: 'Hacer pedido de balas de alfalfa para el próximo mes.'

      },
    ]
  },

  inProgress: {
    name: 'Tareas en progreso',
    items: [
      {
        id: '5',
        title: 'Rotar potreros',
        description: 'Mover el ganado del potrero 1 al potrero 2 para rotación.'

      }
    ]
  },

  done: {
    name: 'Tareas completadas',
    items: [
      {
        id: '6',
        title: 'Desparasitar ganado',
        description: 'Aplicar dosis de desparasitante al ganado joven.'
      }
    ]
  }

}