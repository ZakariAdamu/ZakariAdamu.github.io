import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212] ">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<Hero />
			</div>
		</main>
	);
}
