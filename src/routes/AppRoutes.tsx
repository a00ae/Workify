import { Routes, Route, Navigate } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';

// Auth Pages
import Login from '@/pages/auth/Login';
import Home from '@/pages/home/Home';
// import Register from '@/pages/auth/Register';

// // Admin Pages
// import AdminDashboard from '@/pages/admin/Dashboard';

// // Employee Pages
// import EmployeeAttendance from '@/pages/user/Attendance';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* 🟢 1. المسارات العامة (Public Routes / Auth) */}
      <Route path='/' element={<Home/>} />
      <Route path="/login" element={<Login />} />

      {/* 🔴 2. مسارات المدير المحمية (Admin Routes Only) */}

      {/* 🔵 3. مسارات الموظف المحمية (Employee Routes Only) */}

      {/* 🟡 4. إعادة التوجيه الافتراضي (Catch-all Route) */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};