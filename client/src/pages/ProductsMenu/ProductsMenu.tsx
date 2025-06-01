import NavBar from "../../components/Navbar/NavBar"
import Products from "../../components/Products/Products"

export default function ProductsMenu() {
    return (
            <>
                <main className="bg-gray-custom min-h-screen">
                    <section>
                        <NavBar />
                    </section>
                    <section>
                        <Products />
                    </section>
                </main>
            </>
        )
}