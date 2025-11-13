// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { BrowserRouter } from 'react-router-dom'
// import './styles/global.css'
// import App from './App'
// import ErrorBoundary from './ErrorBoundary'

// const qc = new QueryClient()
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ErrorBoundary>
//       <QueryClientProvider client={qc}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </QueryClientProvider>
//     </ErrorBoundary>
//   </React.StrictMode>
// )

import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/global.css"

function App() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="p-6 rounded-lg border">
        <h1 className="text-2xl font-bold text-blue-600">Hello OCI 👋</h1>
        <p className="mt-2 text-sm text-gray-600">Vite + React + Tailwind (minimal)</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
)