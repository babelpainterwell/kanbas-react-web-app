import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Courses from "./Courses";
// import MobileKanbasNavigation from "./KanbasNavigation/MobileKanbasNavigation";
// import "./index.css";
import DashboardEdit from "./Dashboard/DashboardEdit";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "../users/signin";
import Signup from "../users/signup";
import Account from "../users/account";
import UserTable from "../users/table";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-black d-none d-lg-block">
          <KanbasNavigation />
        </div>
        {/* everything other than the kanbas navigation */}
        {/* each component should contain their own nav bar  */}

        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          {/* <Route path="Account" element={<Navigate to="/Kanbas/account" />} /> */}
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Dashboard/edit" element={<DashboardEdit />} />
          <Route path="Courses" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="History" element={<h1>History</h1>} />
          <Route path="Studio" element={<h1>Studio</h1>} />
          <Route path="Commons" element={<h1>Commons</h1>} />
          <Route path="Help" element={<h1>Help</h1>} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="admin/users" element={<UserTable />} />
          <Route path="account/:id" element={<Account />} />
          {/* <Route path="KanbasNavMobile" element={<MobileKanbasNavigation />} /> */}
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;
