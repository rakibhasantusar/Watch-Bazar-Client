import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
