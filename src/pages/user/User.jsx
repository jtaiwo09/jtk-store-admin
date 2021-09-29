import React from 'react';
import './user.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from 'react-router-dom';

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className='userShowImg' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck990</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">10.21.1990</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">+2347067729362</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck990@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">12, Olugbede Egbeda.</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className='userUpdateInput' placeholder='Username' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" className='userUpdateInput' placeholder='Fullname' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" className='userUpdateInput' placeholder='Email' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" className='userUpdateInput' placeholder='Phone number' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className='userUpdateInput' placeholder='Address' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='userUpdateImg'/>
                                <label htmlFor="file"><PublishIcon className='userUpdateIcon'/></label>
                                <input type="file" id='file' style={{display:'none'}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
