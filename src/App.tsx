import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "./store/dashboardSlice";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    dispatch(setCategories(data.categories));
  }, [dispatch]);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar setSearchQuery={setSearchQuery} />
      <Dashboard searchQuery={searchQuery} />
    </div>
  );
};

export default App;
