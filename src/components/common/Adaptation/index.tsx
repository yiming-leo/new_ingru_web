'use client'
import { useEffect, useState } from "react";

import Loader from "../Loader";
import { useStore } from '@/store/useStore'

const Adaptation = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const { isPC, setIsPC } = useStore();


    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsPC(false);
        } else {
            setIsPC(true);
        }
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsPC(false);
            } else {
                setIsPC(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div>
            {children}
        </div>
    );
};

export default Adaptation;
