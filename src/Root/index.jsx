import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import CountryPages from "../pages/Country/CountryPages";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/home" element={<CountryPages />} />
        <Route path ='/' element={<Navigate to='/home'/>} />
      </Routes>
    </>
  );
};

export default Root;
