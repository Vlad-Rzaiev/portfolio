import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AllProjects } from '../../pages/AllProjects/AllProjects';
import { Footer } from '../Footer/Footer';

export default function App() {
  return (
    <>
      <AppBar />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Layout>

      <Footer />
    </>
  );
}
