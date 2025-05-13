import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TicketResultPage from './pages/TicketResultPage.tsx'

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='' element={<App />}>

      <Route path='/result' element={<TicketResultPage />} />

    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>


  </RouterProvider>
)
