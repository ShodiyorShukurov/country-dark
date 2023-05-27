import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import CountryPages from "../pages/Country/CountryPages";
import AboutPages from "../pages/AboutPages";
import NotFound from "../pages/NotFound";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/home" element={<CountryPages />} />
        <Route path ='/' element={<Navigate to='/home'/>} />
        <Route path="/about" element={<AboutPages />} />
        <Route path ='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;
