import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technology from './pages/Technology';

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="technology" element={<Technology />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
