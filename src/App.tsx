import { useState } from 'react';
import './App.css';
import QrCode from './components/QrCode';
import QrConfigForm from './components/QrConfigForm';

function App() {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(128);
  const [bgColour, setBgColour] = useState('#FFF');
  const [fgColour, setFgColour] = useState('#000');

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Amazing QR Gen App</h1>
      </header>
      <div>
        <QrConfigForm
          url={url}
          setUrl={setUrl}
          size={size}
          setSize={setSize}
          bgColour={bgColour}
          setBgColour={setBgColour}
          fgColour={fgColour}
          setFgColour={setFgColour}
        />
        <QrCode bgColour={bgColour} fgColour={fgColour} size={size} url={url} />
      </div>
    </div>
  );
}

export default App;
