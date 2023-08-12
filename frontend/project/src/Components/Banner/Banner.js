import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faPhone, faSearch,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './Banner.css';

const Banner = (props) => {
  return (
       <section className="banner">
           <div className="container">
               <div className="row">
                    <div className="col-lg-12 col-md-12">
                         <h2>{props.title}</h2>
                         <li>
                            <Link to ="/home">
                               <FontAwesomeIcon icon ={faPhone} />
                             </Link>
                               / {props.smtitle}
                         </li>
                    </div>
               </div>
           </div>
       </section>
  )
}

export default Banner;
