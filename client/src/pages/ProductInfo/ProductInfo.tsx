import NavBar from "../../components/Navbar/NavBar"
import Product from "../../components/Product/Product"

export default function ProductInfo() {
    return (
            <>
                <main className="bg-gray-custom min-h-screen">
                    <section>
                        <NavBar />
                    </section>
                    <section className="font-outfit">
                        <Product />
                    </section>
                </main>
            </>
        )
}