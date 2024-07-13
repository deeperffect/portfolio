import Hero from "@/components/Hero";
import { GridBackgroundDemo } from "@/components/ui/grid-background";

export default function Home() {
	return (
		<main>
			<Hero />
			<GridBackgroundDemo text={"Hello"}></GridBackgroundDemo>
		</main>
	);
}
