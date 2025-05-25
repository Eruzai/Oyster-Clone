import React from "react";
import { useEffect, useState } from "react";
import { useAuthStore } from "./store/authStore";
import { Routes, Route, Navigate } from "react-router-dom";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import Profile from "./Pages/ProfilePage";
import LandingPage from "./Pages/LandingPage";
import Nav from "./components/Nav";
import NavHeader from "./components/NavHeader";
import NavSideBar from "./components/NavSidebar";
import Footer from "./components/Footer";
// *import Toaster from "react-hot-toast";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import EmailVerificationPage from "./Pages/EmailVerificationPage";
import LoadingSpinner from "./components/LoadingSpinner";
import DashboardPage from "./Pages/DashboardPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ResourcePage from "./Pages/ResourcePage";
import Mentors from "./Pages/mentors";
import ViewMentor from "./Pages/mentors/ViewMentor";
import "./styles/App.css";
import ResumeBuilder from "./Pages/ResumeBuilder";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {

  
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    Navigate(<LandingPage />);
  };

  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="flex">
      {user && (<NavSideBar currentUser={user} handleLogout={handleLogout}/>)}
      <div className="w-full">
        {!user && (<Nav currentUser={user}/>)}
        {user && (<NavHeader />)}

        <Routes>
          <Route path="/Login" element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={
            <RedirectAuthenticatedUser>
              <EmailVerificationPage />
            </RedirectAuthenticatedUser>
            }
          />
          <Route path="/forgot-password" element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
            }
          />
          <Route path="/reset-password/:token" element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
            }
          />
          <Route path="/Signup" element={
            <RedirectAuthenticatedUser>
              <SignupPage />
            </RedirectAuthenticatedUser>
            }
          />
          <Route path="/resources" element={
            <RedirectAuthenticatedUser>
              <ResourcePage />
            </RedirectAuthenticatedUser>
            }
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/my-mentor" element={<Mentors />} />
          <Route path="/view-mentor" element={<ViewMentor />} />
          <Route path="/dashboard" element={<DashboardPage currentUser={user}  />} />
          <Route path="/Saved" element={<Saved />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
