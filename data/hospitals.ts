const hospitals = [
  {
    id: 'hostpital1',
    name: 'Hospital 1',
    city: 'paris'
  },
  {
    id: 'hostpital2',
    name: 'Hospital à Bordeaux',
    city: 'bordeaux'
  },
  {
    id: 'hostpital3',
    name: 'Autre hopital à Bordeaux',
    city: 'bordeaux'
  }
]

// Could be defined more accurately
export type Hospital = typeof hospitals[0]

export default hospitals
