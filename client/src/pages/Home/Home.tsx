import NavBar from "../../components/Navbar/NavBar"
import Categories from "../../components/Categories/Categories"

export default function Home() {
    return (
        <>
            <main className="bg-gray-custom min-h-screen">
                <section>
                    <NavBar />
                </section>
                <section>
                    <Categories />
                </section>
            </main>
        </>
    )
}