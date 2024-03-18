import React from 'react';
import styles from '../myUser/MyUsers.module.css'
type MyUserPropsType = {
    url: string
    callBackUserFollow: (userId: number) => void
    callBackUserUnFollow: (userId: number) => void
    userId: number
    fullName: string
    follow: boolean
    status: string
    country: string
    city: string
}
const MyUser = ({url,
                    callBackUserFollow,
                    callBackUserUnFollow,
                    userId,
                    follow,
                    fullName,
                    status,
                    country,
                    city
                }: MyUserPropsType) => {
  //  debugger
    const onClickHandlerFollow = () => {
        console.log('follow', userId)
        callBackUserFollow(userId)
    }
    const onClickHandlerUnFollow = () => {
        console.log('unfollow')
        callBackUserUnFollow(userId)
    }
    return (
        <div className={styles.blockMyUser} >
            <div className={styles.blockAvatarAndButton}>
                <img className={styles.avatarImage} src={url} alt={'photo avatar'}/>
                {follow?
                    <button className={styles.buttonFollow} onClick={onClickHandlerFollow}>FOLLOW</button>:
                    <button className={styles.buttonUnFollow} onClick={onClickHandlerUnFollow}>UNFOLLOW</button>
                }
            </div>
            <div className={styles.blockAboutUser} >
                <div className={styles.blockAboutUserFullNameAndStatus} >
                    <p>{fullName}</p>
                    <p>{status}</p>
                </div>
                <div className={styles.blockUserLocation} >
                    <span>{country}</span>
                    <span>{city}</span>
                </div>
            </div>
        </div>
    );
};

export default MyUser;