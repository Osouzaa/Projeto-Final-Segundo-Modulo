import S from './style'
import Editar from '@/icons/3pontos/Editar.svg'
import Lixeira from '@/icons/3pontos/Lixeiro.svg'
import Exportar from '@/icons/3pontos/Exportar.svg'

const Modal3Pontos = () => {
  return (
    <div>
      <S.Contente>
        <S.ContentItens >
          <img src={Editar} alt="" />
          <S.EditarP>Editar</S.EditarP>
        </S.ContentItens>
        <S.ContentItens >
          <img src={Lixeira} alt="" />
          <S.ExluirP>Excluir </S.ExluirP>
        </S.ContentItens>
        <S.ContentItens >
          <img src={Exportar} alt="" />
          <S.ExportarP>Exportar </S.ExportarP>
        </S.ContentItens>
      </S.Contente>
    </div>
  )
}

export default Modal3Pontos
