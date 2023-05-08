import { httpClient } from '@/Service/http-client'
import { useEffect, useState } from 'react'
import IconFatoRelevante from '@/icons/IconsCard/FatoRelevante.svg'
import S from './style'

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

const FatoRelevante = (): JSX.Element => {
  const [timeLine, setTimeLine] = useState<TimeLineItem[]>([])

  const getOccurrences = async (): Promise<void> => {
    const response = await httpClient.get('/timeline/6452f615497c626bf711f9c7')
    console.log(response.data.timeline.occurrences)
    const result: TimeLineItem[] = response.data.timeline.occurrences.map((item: any) => {
      return {
        icon: IconFatoRelevante,
        title: item.title,
        description: new Intl.DateTimeFormat('pt-br', { year: 'numeric', month: 'long', day: 'numeric' }).format(
          new Date(item.createdOn)
        ),
        text: item.content,
        identi: 'blue',
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
          {item.type === 'relevant_fact' && (
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

export default FatoRelevante
