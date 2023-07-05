import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// Style
import './css/main.css';

// Components
import Welcome from './pages/Welcome';

// Layouts
import RootLayout from './layouts/RootLayout'
import BankingAccounts from './pages/Banking-accounts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path="banking-accounts" element={<BankingAccounts/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


