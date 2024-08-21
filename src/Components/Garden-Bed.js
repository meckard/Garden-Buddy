import { useDrop } from "react-dnd";
import { itemTypes } from "../ItemTypes";

export default function GardenBed() {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: itemTypes.flower,
		drop: () => ({ name: "Garden Bed" }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	let backgroundColor = "#222";
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
