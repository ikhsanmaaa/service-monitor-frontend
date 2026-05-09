import { Routes, Route } from "react-router-dom";
import Navigation from "@/components/common/navigation";
import Dashboard from "@/features/dashboard/dashboard";
import Services from "@/features/services/services";
import List from "@/features/list/list";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="sticky bg-slate-500 border-gray-800  px-8 py-4">
        <Navigation />
      </div>

      <div className="max-w-7xl px-8 py-8 space-y-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/service" element={<Services />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
