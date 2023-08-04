import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
  Navigate,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { Header } from '../components/Header';
import HomePage from '../components/HomePage';
import DoctorsPage from '../components/DoctorsPage';
import { AboutPage } from '../components/AboutPage';
import { ContactPage } from '../components/ContactPage';
import BookPage from '../components/BookPage';

export const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/doctors' element={<DoctorsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/book' element={<BookPage />} />
    </Routes>
  </BrowserRouter>
);
