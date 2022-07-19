import { useState, useEffect } from 'react';
import ActivitiesTable from './components/ActivitiesTable';
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
      { activities ? <ActivitiesTable activities={activities} /> : <a href="https://umbras.alterparadox.es/">ALTER</a> }
    </div>
  );
}

export default App;
