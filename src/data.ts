type Departament = {
  title: string,
  level: number
}

type Departaments = {[key: string]: Departament}

export const departaments: Departaments = {
  qcwmp: {
    title: 'Фронтендеры',
    level: 1,
  },
  jeixj: {
    title: 'Бэкендеры',
    level: 1
  },
  eumiv: {
    title: 'Менеджеры',
    level: 2
  }
}

export const avatarsURL = 'https://mighty.tools/mockmind-api/content/cartoon/<ID_NUMBER>.jpg'

