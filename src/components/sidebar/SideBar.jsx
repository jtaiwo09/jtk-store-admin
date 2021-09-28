import React from 'react';
import './sidebar.scss';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                            <li className="sidebarListItem active" Link='/'>
                                <LineStyleIcon className='sidebarIcon'/>
                                Home
                            </li>
                            <li className="sidebarListItem">
                                <TimelineIcon className='sidebarIcon'/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUpIcon className='sidebarIcon' />
                                Sales
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                            <li className="sidebarListItem" Link='/users'>
                                <PermIdentityIcon className='sidebarIcon'/>
                                User
                            </li>
                            <li className="sidebarListItem">
                                <StorefrontIcon className='sidebarIcon'/>
                                Products
                            </li>
                            <li className="sidebarListItem">
                                <AttachMoneyOutlinedIcon className='sidebarIcon' />
                                Transactions
                            </li>
                            <li className="sidebarListItem">
                                <BarChartOutlinedIcon className='sidebarIcon' />
                                Reports
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <MailOutlineIcon className='sidebarIcon'/>
                                Male
                            </li>
                            <li className="sidebarListItem">
                                <DynamicFeedIcon className='sidebarIcon'/>
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                <ChatBubbleOutlineIcon className='sidebarIcon' />
                                Messages
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <WorkOutlineIcon className='sidebarIcon'/>
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <TimelineIcon className='sidebarIcon'/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <ReportIcon className='sidebarIcon' />
                                Reports
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
