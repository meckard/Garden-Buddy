import "./App.css";
import GardenBed from "./Components/Garden-Bed";
import Flower from "./Components/Flower";
import FlowerList from "./Components/FlowerList";

function App() {
	
	return (
		<div className="App">
			<header className="App-header">
				<nav></nav>
			</header>
				<body>
					<main>
							<GardenBed />
					</main>
					<div className="panel">
							<FlowerList/>
					</div>
				</body>
		</div>
	);
}

export default App;
