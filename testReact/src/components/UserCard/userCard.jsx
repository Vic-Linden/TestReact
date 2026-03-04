import './UserCard.css'
import {useState} from 'react';

function UserCard({name, role}) {
const [likes, setLikes] = useState(0);

const handleLike = () => {
    setLikes (likes + 1)
};



    return (
        <div className="user-card">
            <h3>{name}</h3>
            <p>Roll: {role}</p>
            <button onClick={handleLike}>Like: {likes}</button>
        </div>
    );
}

export default UserCard;