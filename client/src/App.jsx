import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp"; // Replace with your actual component for sign-up page
import Login from "./components/Login"; // Replace with your actual component for login page

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        {/* You can add more routes for other pages here */}
      </Routes>
    </Router>
    
  );
}

export default App
