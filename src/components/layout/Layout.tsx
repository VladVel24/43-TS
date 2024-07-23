import { Outlet } from 'react-router-dom';
import styles from './layout.module.css'
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout() {

    return (
        
        <div className={styles.page}>
            <Header />
           <main className={styles.main}>
            <Outlet/>
           </main>
            <Footer/>
        </div>
    );
}

export default Layout;