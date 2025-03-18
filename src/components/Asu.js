import { useEffect } from 'react';

const ASU = () => {
    useEffect(() => {
        const newTab = window.open('https://search.asu.edu/profile/4295566', '_blank', 'noopener,noreferrer');
        if (newTab) {
            newTab.opener = null; // Prevents reference to current page
        }
    }, []);

    return (
        <div className="text-center mt-10 text-white p-32">
            <p>Redirecting to ASU Profile...</p>
        </div>
    );
};

export default ASU;
