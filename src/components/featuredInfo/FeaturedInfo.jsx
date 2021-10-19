import React, { useEffect, useState } from 'react';
import './featuredInfo.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from '../../requestMethods';

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])
    const [percentage, setPercentage] = useState(0);

    useEffect(()=> {
        const getIncome = async ()=> {
            try {
                const res = await userRequest.get('/orders/income');
                setIncome(res.data.sort((a, b)=> a._id - b._id));
                setPercentage(Math.floor((res.data[1].total * 100) / res.data[0].total - 100));
            } catch (error) {}
        }
        getIncome();
    },[])
    
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoneyRate">{percentage}% {percentage < 0 ? <ArrowDownwardIcon className='featuredIcon negative'/> : <ArrowUpwardIcon className='featuredIcon'/> }</span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">+2.4 <ArrowUpwardIcon className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
