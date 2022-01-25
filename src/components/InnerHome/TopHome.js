import React from 'react';
import '../style.css'
import { useContext } from 'react';
import { BlogContext } from '../BlogContext';
import { Link } from 'react-router-dom';


const TopHome = () => {

    const [rows] = useContext(BlogContext)

    return (
        <div className='topHomeContainer'>
            <div className='topHomeContainer-1'>
                {rows.filter((value) => value.ID === "4" && value.Category === "Food").map((val,id) => (
                    <div key={id}>

                    <Link to={`/article/${val.Category}/${val.ID}`}>
                        <img src={val.Image} className='topHomeImg1' alt="" />
                        <div className='topHomeContent1'>
                            <p className='topHomeTitle1'>{val.Title}</p>
                            <p className='topHomeCat1'>{val.Category} / {val.Date}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>


            <div className='topHomeContainer-2'>
                {rows.filter((value) => value.ID === "3" && (value.Category === "Technology" || value.Category === "Fitness")).map((val,id2) => (
                    <div className='box' key={id2}>
                        <Link to={`/article/${val.Category}/${val.ID}`}>
                            <img src={val.Image} className='topHomeImg2' alt='' />
                            <div className='topHomeContent2'>
                                <p className='topHomeTitle2'>{val.Title}</p>
                                <p className='topHomeCat2'>{val.Category} / {val.Date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default TopHome;