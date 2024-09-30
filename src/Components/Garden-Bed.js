import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";

export default function GardenBed() {
	const flowerState = useFlowerStore((state) => state.flowers);
	const updateFlower = useFlowerStore((state) => state.updateFlower);

	return <div className="drop-box"></div>;
}
