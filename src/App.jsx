import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Pages/Accueil/Accueil";
import Connexion from "./Pages/Connexion/Connexion";
import DashboardTeacher from "./Pages/Dashboard/DashboardTeacher.jsx";
import ListeStudents from "./Pages/Dashboard/ListeStudents/ListeStudents.jsx";
import ManageTP from "./Pages/Dashboard/ManageTP/ManageTP";
import Notes from "./Pages/Dashboard/Notes/Notes.jsx";
import EmailVerified from "./Pages/EmailVerify/index";
import Register from "./Pages/Inscription/Register";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Accueil /> },
    { path: "/Register", element: <Register /> },
    { path: "/connexion", element: <Connexion /> },
    { path: "/users/:id/verify/:token", element: <EmailVerified /> },
    {
      path: "/Dashboard",
      element: <DashboardTeacher />,
      children: [{ path: "/Dashboard/ManageTP", element: <ManageTP /> },
        { path: "/Dashboard/ListeStudents", element: <ListeStudents /> },
        { path: "/Dashboard/Notes", element: <Notes /> },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
