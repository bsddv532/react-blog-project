import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useParams } from 'react-router-dom';

const NavComponent = () => {
    const [rows] = useContext(BlogContext)

  return(
      <div>
          <div className='heading'>
              <p className='the'>The</p>
              <p className='siren'>Siren</p>
          </div>

          <div className='navContainer'>
              <Link to="/"  className='NavCategory'>Home</Link>

              {rows.filter((value)=> value.ID == 1).map((val)=> (

              <Link to={`/category/${val.Category}`} className='NavCategory'>{val.Category}</Link>
              
              ))}
          </div>
          <hr className='navHr'/>

      </div>
  );
};

export default NavComponent;
