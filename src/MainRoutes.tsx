import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MeetingsPage from './pages/MeetingsPage';
import TasksPage from './pages/TasksPage';

const MainRoutes = () => {
let token = localStorage.getItem("tokens")

  return (
    <>
        <Routes>
            <Route path='/' element={token ? (<TasksPage />) : (<LoginPage />)} />
            <Route path='/meetings' element={<MeetingsPage />} />
        </Routes>
    </>
  )
}

export default MainRoutes