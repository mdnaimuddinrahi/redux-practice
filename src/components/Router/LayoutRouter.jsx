import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import JobList from "../Pages/List/JobList";
import JobForm from "../Pages/Form/JobForm";

function LayoutRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route path="/" element={<Layout />}>

          {/* Child Routes */}
          <Route index element={<JobList />} />
          <Route path="add-job" element={<JobForm />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default LayoutRouter;