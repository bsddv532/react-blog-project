import React from 'react';
import './style.css'
import { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useParams } from 'react-router-dom';
import { BsHandThumbsUp } from "react-icons/bs";
import MoreFromSiren from './MoreFromSiren';



const Article = () => {

    const [rows] = useContext(BlogContext)
    const { Id } = useParams()
    const { cat } = useParams()

    return (
        <div>
            {rows.filter((value) => (value.ID === Id && value.Category === cat)).map((val) => (
                <div className='articleContainer'>
                    <p className='articleTitle'>{val.Title}</p>
                    <div className='articleProfileBox'>
                        <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
                        <div>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div>
                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMwta-vzHOS9zRZvuiOLUqbupcTFlu2_8tQ&usqp=CAU' alt='' /> */}
                    </div>
                    <img src={val.Image} alt='' className='articleImg' />
                    <p>{val.Body}{val.Body}</p>
                    <p><BsHandThumbsUp />  <b>9.3k Like</b></p>
                    <hr />

                    <div className='articleProfileBox'>
                        <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
                        <div>
                            <p>Written By</p>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

        <MoreFromSiren />

        </div>
    );
};

export default Article;
