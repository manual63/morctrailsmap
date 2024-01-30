import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Layout from "./common/components/Layout";
import Map from "./pages/Map";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Layout />}
        >
          <Route index element={<Welcome />} />
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
