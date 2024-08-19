import "./App.css";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
	return (
		<div className="App">
			<header className="App-header">
        <nav></nav>
			</header>
			<DndProvider backend={HTML5Backend}>
			<body>
				<main>
					<div className='drop-box'>
						
					</div>
				</main>
				<div className="panel">
					<div className='plant-node'></div>
				</div>
			</body>
			</DndProvider>
		</div>
	);
}

export default App;
