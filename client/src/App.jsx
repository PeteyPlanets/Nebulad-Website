import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useUser } from "./context/UserContext";
import { checkLoggedInStatus } from "./util/login";

import CategoriesPage from "./pages/CategoriesPage";
import BlogsPage from "./pages/BlogsPage";
import NavBar from "./components/Layout/Navigation/NavBar";
import Blog from "./components/Blogs/Blog";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import HomePage from "./pages/HomePage";

import "react-quill/dist/quill.snow.css";
import EditBlog from "./components/Blogs/EditBlog";
import CreateBlog from "./components/Blogs/CreateBlog";
import SearchPage from "./pages/SearchPage";
import NewCategory from "./components/Blogs/NewCategory";
import EditCategory from "./components/Blogs/EditCategory";
import Footer from "./components/Layout/Footer";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import UserAccountPage from "./pages/UserAccountPage";
import EventsPage from "./pages/EventsPage";
import AboutMe from "./pages/AboutMe";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";

import useBlogs from "./hooks/useBlogs";

function App() {
  const { setUser, setLoading } = useUser();
  const { blogs, blogsLoading } = useBlogs();

  // Get recent blogs for Footer.jsx component
  const recentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  useEffect(() => {
    async function fetchUserData() {
      const data = await checkLoggedInStatus(setUser);
      console.log("isLoggedIn = ", data.isLoggedIn);

      setLoading(false);
    }

    fetchUserData();
  }, [setUser, setLoading]);

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <div className="app-container">
        <main className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="/dashboard/*" element={<UserAccountPage />} />

            <Route path="/blogs/categories" element={<CategoriesPage />} />
            <Route path="/blogs/categories/new" element={<NewCategory />} />
            <Route path="/blogs/categories/:id" element={<BlogsPage />} />
            <Route path="/blogs/new" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />
            <Route path="/edit-category/:id" element={<EditCategory />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/superheroes" element={<ComingSoon />} />

            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="/playground" element={<Contact />} /> */}
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <Footer recentBlogs={recentBlogs} isLoading={blogsLoading} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
