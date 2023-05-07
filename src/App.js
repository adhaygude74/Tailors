import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Student from "./component/Dashboard/Student";
import StudentDetails from "./component/Dashboard/StudentDetails";



import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import Customer from "./component/customer/Customer";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/StudentDetails" exact element={<Student />} />
        <Route path="/GetStudentDetails" exact element={<StudentDetails />} />
        <Route path="/customerDetails" exact element={<Customer />} />

        


      </Routes>
    </>
  );
}
export default App;
