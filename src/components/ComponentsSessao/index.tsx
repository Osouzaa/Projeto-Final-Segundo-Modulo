import { useEffect, useState } from 'react'
import Modal3Pontos from '../Modais/modal3pontos'
import CardAnexo from '../CardAnexo'
import CardAvaliação from '../CardAvaliação'
import S from './style'
import { httpClient } from '@/Service/http-client'
import IconSessao from '@/icons/IconsCard/SessaoIcons.svg'
import DocumentosImportantes from '@/icons/IconsCard/DocumentosImportantes.svg'
import AvaliaçãoPsicologica from '@/icons/IconsCard/AvaliaçãoPsicologica.svg'

type TimelineItem = {
  icon: string
  title: string
  description: string
  text?: string
  identi: 'green' | 'purple' | 'pink'
  isOpen: boolean
  id: string
  type: 'session' | 'important_documents' | 'psychological_evaluation'
}

type TimeLineItem = {
  icon: any
  title: string
  description: string
  text: string
  identi: 'green' | 'purple' | 'pink'
  isOpen: boolean
  id: string
  type: string
}

const CardSessao = (): JSX.Element => {
  const [timeLine, setTimeLine] = useState<TimeLineItem[]>([])

  const getOccurrences = async (): Promise<void> => {
    const response = await httpClient.get('/timeline/6452f615497c626bf711f9c7')
    console.log(response.data.timeline.occurrences)
    const result: TimeLineItem[] = response.data.timeline.occurrences.map((item: any) => {
      return {
        icon: IconSessao,
        title: item.title,
        description: new Intl.DateTimeFormat('pt-br', { year: 'numeric', month: 'long', day: 'numeric' }).format(
          new Date(item.createdOn)
        ),
        text: item.content,
        identi: 'green',
        isOpen: false,
        id: item._id,
        type: item.type
      }
    })
    setTimeLine(result)
    console.log(result)
  }

  useEffect(() => {
    getOccurrences()
  }, [])

  return (
    <>
      {timeLine.map((item, index) => (
        <>
          {item.type === 'session' && (
            <S.Container key={index} className={`${item.identi}-bg`}>
              {index !== 0 && <S.Listra className={`${item.identi}-bg`}></S.Listra>}
              <S.Imagem className={`${item.identi}-bg`}>
                <img src={item.icon} alt="" />
              </S.Imagem>
              <S.EditCard> ...</S.EditCard>

              <S.Content>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </S.Content>
              <p>
                {item.text}
                {item.text?.length >= 305 && <span>Ver mais</span>}
              </p>
            </S.Container>
          )}
        </>
      ))}
    </>
  )
}

export default CardSessao
