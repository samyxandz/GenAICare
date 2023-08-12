import React from 'react';
import Banner from '../Components/Banner/Banner.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faGlobe,faMap,faHome,faPhone, faSearch,faArrowLeft, faEnvelope, faMobile} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
       <>
           <Banner title="contact" smtitle="Contact" />
           <section className="contact-us">
              <div className="container">
                 <div className="row">
                  <div className="col-lg-6 col-md-6">
                      <form>
                           <div className="form-control">
                               <input placeholder="Your Name" />
                           </div>
                           <div className="form-control">
                               <input placeholder="Your Email" />
                           </div>
                           <div className="form-control">
                               <input placeholder="Phone Numbers" />
                           </div>
                           <select>
                                <option>Select Department</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                           </select>
                           <div className="form-control">
                               <input placeholder="Your Name" />
                           </div>
                           <div className="form-control">
                                <textarea placeholder="Message"></textarea>
                           </div> 
                            <button>Submit</button>                       
                      </form>
                  </div>
                  <div className="col-lg-6 col-md-6">
                        <div className="side">
                             <div className="overlay">
                             <h1>contact us for Any Informatics</h1>
                              <li><FontAwesomeIcon icon ={faEnvelope}/>Email & Phone</li>
                              <hr />
                              <p>gjsgdwjdb@gmail.com</p>
                              <p>88678698643</p>
                              <li><FontAwesomeIcon icon={faGlobe} />Follow Us</li>
                              <ul>
                                  <li><FontAwesomeIcon icon={faHeart} /></li>
                                   <li><FontAwesomeIcon icon={faGlobe}/></li>
                                   <li><FontAwesomeIcon icon={faMobile} /></li>
                              </ul>
                             </div>
                        </div>
                  </div>
              </div>
              </div>
           </section>
       </>
  )
}

export default Contact
