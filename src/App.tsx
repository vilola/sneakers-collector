import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SneakersProvider } from "./contexts/Sneakers";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Collection, { Detail, New } from "./pages/collection";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="collection"
            element={
              <SneakersProvider>
                <Collection />
              </SneakersProvider>
            }
          >
            <Route path=":id" element={<Detail />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
