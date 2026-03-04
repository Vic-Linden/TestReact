import './UserCard.css'
import {useState} from 'react';

function UserCard({name, role}) {
const [likes, setLikes] = useState(0);
const [isDark, setIsDark] = useState(false); //false = starts with light mode.


const handleLike = () => {
    setLikes (likes + 1)
};

const lightMode = () => {
    setIsDark(!isDark);
};



    return (
        <div className={`user-card ${isDark ? 'dark-mode' : ''}`}> {/*ternary operation*/}
            <h3>{name}</h3>
            <p>Role: {role}</p>
            <button onClick={handleLike}>Like: {likes}</button>
            <button onClick={lightMode}>Change darkmode</button>
        </div>
    );
}

export default UserCard;