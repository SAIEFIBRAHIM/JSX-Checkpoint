import './App.css';
import imageInSrc from './imageInSrc.png'
import './style.css'

function App() {
  return (
    <div className="App">
     <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className="title red">Saief Brahim</h1>
        <br />
        <img style={{width:150}} src={imageInSrc} alt='img1' />
        <br />
        <img style={{width:150}} src="/imageInPublic.png" alt='img2' />
        </div>
        
        <video style={{width:320 , height:240}}  controls autoPlay loop muted>
        <source src="/gmcVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
