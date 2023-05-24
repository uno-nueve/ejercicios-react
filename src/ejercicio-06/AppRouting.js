import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';
import NotFound from './pages/404/NotFound';

function AppRouting() {

  let logged = true;

  return (
    <Router>
      <Routes>
        {/* Redirections */}
        <Route exact path='/' element={
          logged
          ? <Navigate to='/tasks' />
          : <Navigate to='/login' />
        } />
        {/* To Login Route */}
        <Route path='/login' element={ <LoginPage /> } />
        {/* To Register Route */}
        <Route path='/register' element={ <RegisterPage /> } />
        {/* To Tasks Route */}
        <Route exact path='/tasks' element={
          logged
          ? <TasksPage />
          : <Navigate to='/login' />
        } />
        {/* 404 - Not Found Route */}
        <Route element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default AppRouting;
