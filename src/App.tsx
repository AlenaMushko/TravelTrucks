import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "@/components";
import { HomePage, CatalogPage, TruckDetailPage, ErrorPage } from "@/pages";
import { ROUTES } from "@/constants";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
        <Route path={ROUTES.TRUCK_DETAILS} element={<TruckDetailPage />} />
        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={ROUTES.ERROR} replace />} />
      </Route>
    </Routes>
  );
}
export default App;
