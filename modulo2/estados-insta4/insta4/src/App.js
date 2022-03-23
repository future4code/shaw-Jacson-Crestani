import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <div>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Jcrestani'}
          fotoUsuario={'https://picsum.photos/50/46'}
          fotoPost={'https://picsum.photos/200/153'}
        />

        <Post
          nomeUsuario={'Felipo'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        </div>
      </MainContainer>
    );
  }
}


export default App;
