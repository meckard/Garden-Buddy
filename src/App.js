import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GardenBed from "./Components/Garden-Bed";
import Flower from "./Components/Flower";
import FlowerList from "./Components/FlowerList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav></nav>
			</header>
			<DndProvider backend={HTML5Backend}>
				<body>
					<main>
							<GardenBed />
					</main>
					<div className="panel">
							<Flower name={"rose"} />
							<FlowerList/>
					</div>
				</body>
			</DndProvider>
		</div>
	);
}

export default App;
