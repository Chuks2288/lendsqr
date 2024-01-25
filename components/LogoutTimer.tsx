"use client";

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';

const LogoutTimer: React.FC<{ timeout: number }> = ({ timeout }) => {
    useEffect(() => {
        let timer: NodeJS.Timeout;

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                // Perform the logout action after the timeout
                signOut({ callbackUrl: '/' });
            }, timeout);
        };

        // Set up event listeners for user activity
        const events = ['mousedown', 'keydown', 'mousemove', 'scroll', 'touchstart'];
        events.forEach((event) => {
            window.addEventListener(event, resetTimer);
        });

        // Initial setup
        resetTimer();

        // Cleanup event listeners on component unmount
        return () => {
            events.forEach((event) => {
                window.removeEventListener(event, resetTimer);
            });
        };
    }, [timeout]);

    return null; // This component doesn't render anything
};

export default LogoutTimer;
