import { useFlowerStore } from "../State/flowerStore";
import { useDroppable } from "@dnd-kit/core";

export default function GardenBed() {
	const flowerState = useFlowerStore((state) => state.flowers);
	const updateFlower = useFlowerStore((state) => state.updateFlower);

	const { isOver, setNodeRef } = useDroppable({
		id: "droppable",
	});
	const style = {
		backgroundColor: isOver ? "green" : undefined,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className="drop-box"
		></div>
	);
}
