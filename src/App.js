import './stylefiles/App.scss';
import dotenv from 'dotenv';
import CVRoute from './component/Router';

function App() {
  dotenv.config();
  return (
    <div className="app">
      <CVRoute />
    </div>
  );
}

export default App;
