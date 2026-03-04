import './UserCard.css'

function UserCard({name, role}) {
    return (
        <div className="user-card">
            <h3>{name}</h3>
            <p>Roll: {role}</p>
        </div>
    );
}

export default UserCard;