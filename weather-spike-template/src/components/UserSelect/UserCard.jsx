import React from 'react'
import binIcon from '../../images/bin.png'
import "../../CSS/UserPanelComponent.css"

export default function UserCard(props) {
    let isCurrentUser = props.currentUser === props._id;
    let cardStyle = isCurrentUser ? "user-card selected" : "user-card";

    function onCardClick() {
        if(!isCurrentUser){
            props.setUser(props._id);
            sessionStorage.setItem("currentUser", props._id);
            window.location = `/user/${props._id}`;
        }
        else{
            props.setUser(null);
            sessionStorage.setItem("currentUser", null);
            window.location = "/";
        }
    }

    function deleteUser() {
        props.deleteUser(props._id);
    }
    
    return (
        <div className={cardStyle} onClick={onCardClick}>
            <h1 className="user-card--heading">
                {props.name}
            </h1>
            <div className="user-card--bin" >
                <img 
                    src={binIcon} 
                    onClick={e => {e.stopPropagation(); deleteUser()}} 
                    alt="delete-button"
                />
            </div>
        </div>
    )
}

