import './styles.css';
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import ComentaryCard from '../../components/ComentaryCard';
import Footer from '../../components/Footer';

export default function Homepage() {
    return (
        <>
            <Header />
            <main>
                <section id="ct-product-section">
                    <div className="ct-product-section-container ct-container">
                    <h2>Venha nos visitar</h2>
                        <ProductCard />
                        <ProductCard />
                    </div>
                        
                </section>

                <section id="ct-comentary-section" >
                    <div className="ct-comentary-section-container ct-container">
                        <h2>O que estão dizendo</h2>
                        <ComentaryCard />
                        <ComentaryCard />
                        <ComentaryCard />
                        <ComentaryCard />
                        <ComentaryCard />
                    </div>
                        
                </section>
            </main>
            <Footer />
        </>
    );
}