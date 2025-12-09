import { Outlet, useLocation } from 'react-router';
import Navbar from '../HomeLayout/Navbar/Navbar';
import Footer from '../HomeLayout/Footer/Footer';
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthContex';
import Loading from '../Shared/Loading';

const Root = () => {
    const { loading } = use(AuthContext);
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [loading])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

     if (loading || showLoader) {
        return <Loading />
    }

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
