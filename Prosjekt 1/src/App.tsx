import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Root from "./routes/root";
import Location from "./routes/location";
import Favourites from "./Favourite";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="main-root">
      <Header />
      <div className="content">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/project1" element={<Root />} />
            <Route path="/project1/:id" element={<Location />} />
          </Routes>
          <Favourites/>
          <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
