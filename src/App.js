import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />

    </div>
  );
}

export default App;
