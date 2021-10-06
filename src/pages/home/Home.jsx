import React, {useEffect, useMemo, useState } from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.scss';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { userRequest } from '../../requestMethods';

const Home = () => {
    const [stats, setStats] = useState([])

    const MONTHS = useMemo(()=>
        [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],[])

    useEffect(()=> {
        const getStats = async ()=> {
            try {
                const res = await userRequest.get('/user/stats');
                res.data.map(item => 
                    setStats(prev => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                )
                
            } catch (error) {
                console.log(error.response.data)
            }
        }
        getStats()
    },[MONTHS]);


    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={stats} title='User Analytics' dataKey='Active User' grid/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
