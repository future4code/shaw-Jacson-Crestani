import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/to-have-form-values'
import { findAllByDisplayValue } from '@testing-library/react'

const Post = (props) => {

  const [curtida, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentado, setComentado] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])


  const onClickCurtida = () => {
    setCurtido(curtida ? false : true)
  };

  const enviarCurtidas = () => {
    setNumeroCurtidas(curtida ? numeroCurtidas - 1 : numeroCurtidas + 1)
  }

  const onClickComentario = () => {
    setComentado(comentado ? false : true)
  };

  const enviarComentario = (comentario) => {
    setComentarios([...comentarios, comentario])
    setNumeroComentarios(numeroComentarios + 1)                                           
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={enviarCurtidas}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={enviarComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post