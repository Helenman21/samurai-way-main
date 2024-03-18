import React from 'react';
import {UsersPropsType} from "./UsersConteiner";
import MyUser from "./myUser/MyUser";
import styles from "./Users.module.css"
export const Users = ({users, userFollow, userUnFollow, setUsers}: UsersPropsType) => {
    const userArray = users.users
    console.log('usersdata', userArray[0])
    const mapUsers = userArray.map(user => {
        return <MyUser key={user.id}
                       url={user.photoUrl}
                       callBackUserFollow={userFollow}
                       callBackUserUnFollow={userUnFollow}
                       userId={user.id}
                       fullName={user.fullName}
                       follow={user.followed}
                       status={user.status}
                       country={user.location.country}
                       city={user.location.city}/>
    })
    return (
       <section>
           <h2>users</h2>
           <div className={styles.blockUsers} >
               {mapUsers}
           </div>
       </section>
    );
};

