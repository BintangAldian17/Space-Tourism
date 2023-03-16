import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { Crew } from '../views/Crew';
import { Destination } from '../views/Destination';
import { Technology } from '../views/Technology';


export const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </>
    )
}
