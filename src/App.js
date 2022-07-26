import './App.css';
import { useState, useEffect } from 'react';
import { getActivities } from './services/ActivitiesServices';
import IndexPage from './pages/IndexPage';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-235248969-1');

const App = () => {
  const [activities, setActivities] = useState(null); 
  useEffect(() => {
    void (async () => {
      setActivities(await getActivities());
    })();
  }, []);

  return (
    <IndexPage activities={activities}></IndexPage>
  );
}

export default App;
