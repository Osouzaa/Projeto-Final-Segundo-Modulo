import Person from '../icons/Person.svg'
import SuitCase from '../icons/Suitcase.svg'
import Work from '../icons/Work.svg'
import School from '../icons/School.svg'
import { PacientService } from '@/Service/Pacient/Pacient'

type Props = {
  imagem: string
  text: string
  title: string
}

PacientService().then((response: any) => {
  const formattedDate = response.birthdate.substring(0, 10)
  
  const Patient = [
    {
      imagem: Person,
      text: response.data,
      title: 'Paciente'
    },
    {
      imagem: SuitCase,
      text: formattedDate,
      title: 'Nascimento'
    },
    {
      imagem: Work,
      text: response.profession,
      title: 'Profissão'
    },
    {
      imagem: School,
      text: response.schooling,
      title: 'Escolaridade'
    }
  ]
})



