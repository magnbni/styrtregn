import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Root from "./routes/root";
import Location from "./routes/location";
import { useState } from "react";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  const [city, setCity] = useState<string>();

  const navigate = useNavigate();

  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      navigate(`/project1/${city}`);
    } else {
      console.log("Cannot pass undefined");
    }
  };

  return (
    <div className="root">
      <Header />
      <div className="content">
        <QueryClientProvider client={queryClient}>
          <div className="toolbar">
            <button onClick={() => navigate("/project1")}>Hjem</button>
            {location.pathname == "/project1" && <div className="search">
              <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                  <input
                    type="text"
                    className="searchbar"
                    placeholder="Skriv inn en by"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  ></input>
                </label>
                <input type="submit" className="submitButton"></input>
              </form>
            </div>}
          </div>
          <Routes>
            <Route path="/project1" element={<Root />} />
            <Route path="/project1/:id" element={<Location />} />
          </Routes>
          {/* <ReactQueryDevtools></ReactQueryDevtools> */}
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
