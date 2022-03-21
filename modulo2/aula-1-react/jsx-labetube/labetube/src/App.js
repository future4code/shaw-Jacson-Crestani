import './App.css';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}



  return (
    <div>
    <div className="tela-inteira">
    <header/>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"/>
    

    <main>
        <nav className="menu-vertical">
            <ul>
                <li className="botoes-meunu-vertical">Início</li>
                <li className="botoes-meunu-vertical">Em alta</li>
                <li className="botoes-meunu-vertical">Inscrições</li>
                <hr/>                  
                <li className="botoes-meunu-vertical">Originais</li>
                <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>

        <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="foto 1 do vídeo 1"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=2 " alt="foto 2 do vídeo 2"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=3 " alt="foto 3 do vídeo 3"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=4 " alt="foto 4 do vídeo 4"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=5 " alt="foto 5 do vídeo 5"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=6 " alt="foto 6 do vídeo 6"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=7 " alt="foto 7 do video 7"/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=8 " alt="foto 8 do vídeo 8"/>
                <h4>{titulo}</h4>
            </div>
        </section>
    </main>

    <footer>
        <h4>Oi! Eu moro no footer!</h4>
    </footer>
</div>
</div>
  );
}

export default App;
