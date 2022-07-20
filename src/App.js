import './App.css';

import { useState, useEffect } from 'react';
import ActivitiesList from './components/ActivitiesList';
import { getActivities } from './services/ActivitiesServices';

const App = () => {
  const [activities, setActivities] = useState(null); 

  useEffect(() => {
    void (async () => {
      setActivities(await getActivities());
    })();
  }, []);

  //useEffect(() => { activities && console.log(activities) }, [activities]);

  return (
    <div className='page'>
      <div className='header'>
        <div className='align-center'>
          <img className='logo'  src="/assets/Logo_ALTER_Color.webp" />
        </div>
        <div>
          <div className='titulo'>Listado de actividades</div>
          <div className='subtitulo'>Umbras de Alter Paradox 2022</div>
        </div>
      </div>
      { activities ? <ActivitiesList activities={activities} /> : <div className='align-center'><img src="./assets/loader.gif" /></div> }
      <hr></hr>
      <div className='align-center footer'>
        <div><a href="https://alterparadox.es/">👉 Visita Alter Paradox 👈</a></div>
        <div><em>“No hay tiempo perdido para quien sabe vivirlo” 💯</em></div>
      </div>
    </div>
  );
}

export default App;
