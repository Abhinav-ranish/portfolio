import { useEffect } from 'react';

const MusicPage = () => {
    useEffect(() => {
        window.location.href = 'https://music.aranish.codes';
    }, []);

    return null;
};

export default MusicPage;