import { useEffect } from 'react';

const MusicPage = () => {
    useEffect(() => {
        window.location.href = 'https://music.aranish.uk';
    }, []);

    return null;
};

export default MusicPage;
