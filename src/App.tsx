import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./components/UI";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
