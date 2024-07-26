'use client'
import { useEffect, useState } from "react";

import Loader from "../Loader";
import { useStore } from '@/store/useStore'
import React, { Suspense, lazy } from 'react';

const Adaptation = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { isPC, setIsPC } = useStore();
    // const [loading, setLoading] = useState<boolean>(true);
    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 0);
    // }, []);

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

            {/* {loading ? <Loader /> : children} */}
        </div>
    );
};

export default Adaptation;
