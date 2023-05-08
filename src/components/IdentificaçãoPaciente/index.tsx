import Demands from '../Demands'
import S from './style'
import { useEffect, useState } from 'react'
import { PacientService } from '@/Service/Pacient/Pacient'
import Person from '@/icons/Person.svg'
import SuitCase from '@/icons/Suitcase.svg'
import Work from '@/icons/Work.svg'
import School from '@/icons/School.svg'

interface Props {
  imagem: string
  text: string
  title: string
}

const IdentificaçãoPaciente = () => {
  const [patient, setPatient] = useState<Props[]>([])

  useEffect(() => {
    PacientService().then((response: any) => {
      const formattedDate = response.birthdate.substring(0, 10)
      const getPatient = [
        {
          imagem: Person,
          text: response.name,
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
      setPatient(getPatient)
    })
  }, [])

  return (
    <S.ContainerPacient>
      <div>
        <S.Title>Identificação do paciente</S.Title>

        {patient.map((Patient, index) => (
          <div key={index}>
            <S.Content>
              <img src={Patient.imagem} alt="" />
              <p>{Patient.title}</p>
            </S.Content>
            <S.GlobalIcons>
              <p>{Patient.text}</p>
            </S.GlobalIcons>
          </div>
        ))}
      </div>
      <Demands />
    </S.ContainerPacient>
  )
}

export default IdentificaçãoPaciente
