import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/Layout/Input.js';
import './About.css';

const Appointment = () => {
    const handleBooking = e => {
        e.preventDefault();
    }
    return (
        <div className="lg:py-6 md:py-4 py-3 bg-gray-200">
            <div className="md:w-2/6 sm:w-3/6 w-4/6 mx-auto">
                <h2 className="lg:text-3xl md:text-2xl text-xl text-center text-green-800 py-1 border-b-4 border-green-400 font-medium">Book an Appointment</h2>
            </div>
            <div className="w-full mx-auto">
                <form onSubmit={handleBooking} className=" sm:w-10/12 w-11/12 mx-auto md:p-8 sm:p-6 p-4 md:py-14 sm:py-10 md:space-y-8 sm:space-y-6 space-y-5 mt-5 bg-white rounded">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-6 gap-4">                        
                        <Input type="text" placeholder="Patient's name"></Input>
                        <Input type="text" placeholder="Phone Number"></Input>
                        <Input type="email" placeholder="Email*"></Input>
                        <Input type="text" placeholder="Subject"></Input>
                        <Input type="date" placeholder="Date"></Input>
                        <Input type="text" placeholder="Department"></Input>
                    </div>
                    <div>
                        <textarea placeholder="Your message" className="w-full px-2 h-28 bg-gray-100 border rounded-lg border-gray-600"></textarea>
                    </div>
                    <div>
                    <Link to="bookingSuccess"><button className="px-5 py-3 rounded-lg text-lg font-medium bg-green-400 text-white">Book an Appointment</button></Link>
                    </div>
                </form>
            </div>
            <br />
        </div>
    );
};

export default Appointment;
