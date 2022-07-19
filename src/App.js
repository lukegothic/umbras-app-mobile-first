import './App.css';

import { useState, useEffect } from 'react';
import ActivitiesTable from './components/ActivitiesList';
import { getActivities } from './services/ActivitiesServices';

const App = () => {
  const [activities, setActivities] = useState(null); 

  useEffect(() => {
    void (async () => {
      setActivities(await getActivities());
    })();
  }, []);


  useEffect(() => { activities && console.log(activities) }, [activities]);

  return (
    <div className='page'>
      <div className='align-center'>
        <img className='logo'  src="/assets/Logo_ALTER_Color.webp" />
      </div>
      <div className='titulo'>Listado de actividades</div>
      <div className='subtitulo'>Umbras de Alter Paradox 2022</div>
      { activities ? <ActivitiesTable activities={activities} /> : <a href="https://umbras.alterparadox.es/">ALTER</a> }
    </div>
  );
}

export default App;
