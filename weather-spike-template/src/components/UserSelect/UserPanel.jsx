import React from 'react';
import UserCard from './UserCard.jsx';
import "../../CSS/UserPanelComponent.css"
import axios from 'axios'

export default function UserPanel(props) {
    /************************ TODO ************************
            Effect that retrieves Users and stores
            in the props.user state
    */

    function addUser() {
        /************************ TODO ************************
            Prompt for a username, add the user to the 
            database and update the display 
        */
    }
    function deleteUser(target_id) {
        /************************ TODO ************************
            Delete selected user from the database and 
            the display
        */
    }

    const userCards = props.users.map((user) => {
        return (
            <UserCard 
                key={user._id}
                setUser={(new_id) => {props.setCurrentUser(new_id)}}
                addUser={(name) => addUser(name)}
                deleteUser={(target_id) => deleteUser(target_id)}
                currentUser={props.currentUser}
                {...user}
            />
        )
    });


    return (
        <div className="user-panel">
            <h1 className="user-panel--heading">Users</h1>
            {userCards}
            <button className="user-pannel--add-user" onClick={addUser}>    
                Add user
            </button>
        </div>
  );
}