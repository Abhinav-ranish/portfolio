import { useEffect } from 'react';

const Github = () => {
    useEffect(() => {
        window.location.href = 'https://github.com/abhinav-ranish';
    }, []);

    return null;
};

export default Github;