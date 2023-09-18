import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Routes, Route, useNavigate
} from "react-router-dom"
import Header from "./Header";
import Root from "./routes/root";
import Location from "./routes/location";
import React, { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [city, setCity] = useState<string>();

  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/" + city);
  };

  return (
    <>
      <Header />

      <div className="search">
        <input
          type="text"
          className="searchbar"
          placeholder="Søk etter sted"
          onChange={(e) => {
            setCity(e.target.value);
          }}>
        </input>
        <input type="submit" className="submitButton" onClick={handleSubmit}></input>
      </div>

      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/:id" element={<Location />} />
          </Routes>
          <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
