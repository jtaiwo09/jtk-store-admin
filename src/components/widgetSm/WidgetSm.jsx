import React, { useEffect, useState } from 'react';
import './widgetSm.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from '../../requestMethods';

const WidgetLg = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const getUsers = async ()=> {
            try {
                const res = await userRequest('/user?new=true');
                setUsers(res.data);
            } catch (error) {
                console.log(error.response.data)
            }
        }
        getUsers();
    },[])
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Member</span>
            <ul className="widgetSmList">
                {
                    users.map(user => (
                        <li className="widgetSmListItem" key={user._id}>
                            <img src={user.img || 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'} alt="" className='widgetSmImg'/>
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username.charAt(0).toUpperCase()+user.username.slice(1)}</span>
                                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
                            </div>
                            <button className='widgetSmButton'>
                                <VisibilityIcon className='widgetSmIcon'/>
                                Display
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WidgetLg
