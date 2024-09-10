import { useDrop } from "react-dnd";
import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";

export default function GardenBed() {
    const flowerState = useFlowerStore((state) => state.flowers)
    const updateFlower = useFlowerStore((state) => state.updateFlower)
    

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: itemTypes.flower,
		drop(flower, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            const left = Math.round(flower.left + delta.x)
            const top = Math.round(flower.top + delta.y)
            console.log(flower)
            updateFlower(flower.id, top, left)
            console.log(flowerState)
            return undefined
          },
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	let backgroundColor = "var(--rich-brown)";
	if (isActive) {
		backgroundColor = "blue";
	} else if (canDrop) {
		backgroundColor = "green";
	}
	return (
		<div
			ref={drop}
			style={{ backgroundColor }}
			data-testid="dustbin"
            className="drop-box"
		>
			{isActive ? "Release to drop" : "Drag a box here"}
		</div>
	);
}
