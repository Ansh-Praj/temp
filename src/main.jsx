import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import A from './components/A.jsx'
import B from './components/B.jsx'

const routes = createRoutesFromElements(
            <>
                <Route path='/' element={<App />} />

                <Route path='/A' element={<A />} />
                <Route path='/B' element={<B />} />

            </>
)

const router = createBrowserRouter(routes, {
    basename: "/temp"
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
