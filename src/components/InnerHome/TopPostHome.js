import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from '../BlogContext';


const TopPostHome = () => {

    const [rows] = useContext(BlogContext)


    return (
        <div>
            <p className='mainCategory'>Top Post</p>
            <hr className='mainCategoryHr' />
            <div>

                {rows.filter((value) => value.ID === 1 && value.Category === "Bollywood").map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='LatestContainer'>
                                <img src={val.Image} className='LatestImg' alt="" />
                                <div className='flexBox'>
                                    <div>
                                        <p className='blogTitle'>{val.Title}</p>
                                        <p className='blogCategory'>{val.Category}</p>
                                    </div>
                                    <p className='LatestId'>{val.ID}</p>
                                </div>
                            </div>
                            <hr className='blogLine' />
                        </Link>
                    </div>
                ))}


                {rows.filter((value) => ((value.ID === 2 && value.Category === "Hollywood") || (value.ID === 3 && value.Category === "Food") ||  (value.ID === 4 && value.Category === "Technology"))).map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='SubContainer'>
                                <img src={val.Image} className='SubImg' alt="" />
                                <div>
                                    <p className='blogTitle'>{val.Title}</p>
                                    <p className='blogCategory'>{val.Category}</p>
                                </div>
                                <p className='LatestId'>{val.ID}</p>
                            </div>
                            <hr className='blogLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default TopPostHome