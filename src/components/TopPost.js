import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useParams } from 'react-router-dom';


const TopPost = () => {

    const [rows] = useContext(BlogContext)

    const { cat } = useParams()

    return (
        <div>
            <p className='mainCategory'>Top Post</p>
            <hr className='mainCategoryHr' />
            <div>

                {rows.filter((value) => value.ID == 1 && value.Category === cat).map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='LatestContainer'>
                                <img src={val.Image} className='LatestImg' />
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


                {rows.filter((value) => value.ID >= 2 && value.ID <= 4 && value.Category === cat).map((val) => (
                    <div>
                        <Link to={`/article/${val.Category}/${val.ID}`}>

                            <div className='SubContainer'>
                                <img src={val.Image} className='SubImg' />
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

export default TopPost