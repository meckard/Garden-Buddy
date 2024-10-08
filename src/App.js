import "./App.css";
import GardenBed from "./Components/Garden-Bed";
import { DndContext } from "@dnd-kit/core";
import FlowerList from "./Components/FlowerList";

function App() {
	return (
		<div className="App">
			<DndContext>
				<header className="App-header">
					<nav></nav>
				</header>
				<body>
					<main>
						<GardenBed />
					</main>
					<div className="panel">
						<FlowerList />
					</div>
				</body>
			</DndContext>
		</div>
	);
}

export default App;
