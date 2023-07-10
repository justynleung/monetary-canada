import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Outlet
import RootLayout from './root-layout/RootLayout'
import BankingAccounts from './outlet/Banking-accounts/index';
import Welcome from './outlet/Welcome';
import Blog from './outlet/Blog/index'
import LoadingPage from './root-layout/LoadingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path="banking-accounts" element={<BankingAccounts />} />
      <Route path="blog" element={<Blog />} />
      <Route path="loading" element={<LoadingPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


