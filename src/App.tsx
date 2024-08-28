import './App.css';
import QrCode from './components/QrCode';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Amazing QR Gen App</h1>
      </header>
      <div>
        <QrCode />
      </div>
    </div>
  );
}

export default App;
