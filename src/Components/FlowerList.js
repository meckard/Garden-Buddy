import { plantinfo } from "../Plantinfo";
import Flower from "./Flower";
import { useFlowerStore } from "../State/flowerStore";
import { itemTypes } from "../ItemTypes";

export default function FlowerList() {
	const flowerstate = useFlowerStore((state) => state.flowers);
	console.log(flowerstate);

	const addFlower = useFlowerStore((state) => state.addFlower);

	const plants = plantinfo.map((plant) => {
		addFlower({ id: plant.id, name: plant.name, top: 0, left: 0 });
		return (
			<Flower
				name={plant.name}
				id={plant.id}
			/>
		);
	});

	return <div className="plant-list">{plants}</div>;
}
