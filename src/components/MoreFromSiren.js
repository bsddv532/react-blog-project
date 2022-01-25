import React from 'react';
import './style.css'
import { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { Link } from 'react-router-dom';

const MoreFromSiren = () => {

    const [rows] = useContext(BlogContext)

    return (
        <div className='MoreFromSirenContainer'>
            <p className='mainCategory'>More From The Siren</p>
            <hr />

            <div className='TheLatestBox'>
                {rows.filter((value) => value.ID == "2" && (value.Category === "Bollywood" || value.Category === "Fitness" || value.Category === "Hollywood")).map((val) => (

                    <Link to={`/article/${val.Category}/${val.ID}`} className='TheLatestContent'>
                        <p className='body'>Related reads</p>
                        <img src={val.Image} className='TheLatestImg' alt='' />
                        <p className='title'>{val.Title}</p>
                        <p className='body'><strong>{val.Category}</strong>/ {val.Date}</p>

                        <div className='articleProfileBox'>
                            <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' className='articleProfileImg' />
                            <div>
                                <p><b>{val.Author}</b></p>
                                <p>{val.Date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>



        </div>
    );
};

export default MoreFromSiren;
