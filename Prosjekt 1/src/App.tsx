import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Favourites from "./Favourite";
import Root from "./routes/root";
import Location from "./routes/location";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/:id" element={<Location />} />
          </Routes>
          <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
      </div>
      <Favourites />
    </>
  );
}

export default App;
