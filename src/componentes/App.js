import { Home } from "./pages/home/Home";
import { Nosotros } from "./pages/us/Nosotros";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import { Notfound } from "./pages/notfound/Notfound";

import { Contactanos } from "./pages/contactus/Contactanos";
import { Header1 } from "../../src/componentes/organisms/Header/Header1";
import { Header2 } from "../../src/componentes/organisms/Header/Header2";
import { Navbar3 } from "../../src/componentes/navbar3-component/Navbar3";
import { Footer } from "./organisms/Footer3n/Footer";

import { Productos } from "./organisms/Seccion-Productos/Productos";
import { Singlepage } from "./organisms/Productos-individuales/Singlepage";
import { Mobilenav } from "./organisms/mobile-navbar/Mobilenav";

import { Whatsapp } from "../componentes/whatsapp-widget/Whatsapp";
import { Galeriareligiosa } from "./Galeria-Productos/Galeriareligiosa";
import { Galeriatentacion } from "./Galeria-Productos/Galeriatentacion";
import { Galeriasupercleaner } from "./Galeria-Productos/Galeriasupercleaner";
import { Galeriagranel } from "./Galeria-Productos/Galeriagranel";
import { Categoriasuplercleaner } from "./componente-categorias/Categoriasuplercleaner";
import { Galeriadetergente_liquido } from "./Galeria-Productos/Galeriadetergente_liquido";
import { Galeriadetergente_polvo } from "./Galeria-Productos/Galeriadetergente_polvo";
import { Galerialavaplatos_liquido } from "./Galeria-Productos/Galerialavaplatos_liquido";
import { Galerialavaplatos_crema } from "./Galeria-Productos/Galerialavaplatos_crema";
import { Galeriadesinfectante } from "./Galeria-Productos/Galeriadesinfectante";
import { Gallery } from "./Galeria-Productos/Gallery";
import {
  Productsection2,
  productsection2,
} from "./organisms/Product-section/Productsection2";

function App() {
  return (
    <>
      <Mobilenav />
      <Header1 />
      <Header2 />
      <Navbar3 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<Notfound />} />
        <Route path="products/:productId" element={<Singlepage />} />
        <Route path="/religiosa" element={<Galeriareligiosa />} />
        <Route path="/tentacion" element={<Galeriatentacion />} />
        <Route path="/supercleaner" element={<Galeriasupercleaner />} />
        <Route path="/granel" element={<Galeriagranel />} />
        <Route
          path="/detergente_liquido"
          element={<Galeriadetergente_liquido />}
        />
        <Route
          path="/detergente_en_polvo"
          element={<Galeriadetergente_polvo />}
        />
        <Route
          path="lavaplatos_liquido"
          element={<Galerialavaplatos_liquido />}
        />
        <Route
          path="desinfectante_liquido"
          element={<Galeriadesinfectante />}
        />
        <Route path="lavaplatos_crema" element={<Galerialavaplatos_crema />} />
        <Route path="/limpieza" element={<Categoriasuplercleaner />} />
        <Route path="nuestros-productos" element={<Productsection2 />} />
        <Route path="/velas" element={<Productos />} />
        <Route path="/contact" element={<Contactanos />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
