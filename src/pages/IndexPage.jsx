import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ActivitiesList from '.././components/ActivitiesList';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IndexPage = ({ activities }) => {
    useEffect(() => {
        ReactGA.pageview('/index');
    }, []);

    return (
        <div className='page'>
            <Header />
            { activities ? <ActivitiesList activities={activities} /> : <div className='align-center'><img src="./assets/loader.gif" /></div> }
            <hr></hr>
            <Footer />
        </div>
    );
}
export default IndexPage;