import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/cardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Wayfarers&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Brown" 
          nome="Jacson Crestani" 
          descricao="Oi, eu sou o Jacson. Sou aluno da Labenu. Estou bem empolgado com o inicio do React."
        />
        
        <ImagemButton 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Wayfarers&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Brown" 
          texto="Ver mais"
        />
      </div>

      <div className='page-small-container'>
        <h4>E-mail</h4>
        <CardPequeno
          imagem=""
          email="salamandra@gmail.com"
          endereco="Rua Zarabatana do Sul, n° 456"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Wayfarers&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Brown" 
          nome="estudante Labenu" 
          descricao="Aprendiz de desenvolvimento Web" 
        />
        
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Wayfarers&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Brown" 
          nome="ponstos a serem melhorados:" 
          descricao="concentração, ansiedade." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  

      </div>
    </div>
  );
}

export default App;
