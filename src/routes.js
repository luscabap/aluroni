import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return(
        <main>
            <Router>
                <Menu />
                <Header />
                <Routes>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/cardapio" element={<Cardapio />}/>
                    <Route path="/sobre" element={<Sobre />}/>
                    <Route path="*" element={<NotFound />}/>
                    <Route path="/prato/:id" element={<Prato />}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}