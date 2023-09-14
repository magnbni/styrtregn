import { useState } from 'react'
import './App.css'
import Fetcher from './Fetcher'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={"bear.avif"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bear</h1>
      <div className="card">
      </div>
      <QueryClientProvider client={queryClient}>
        <Fetcher></Fetcher>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </>
  )
}

export default App
