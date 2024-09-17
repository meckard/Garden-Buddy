import { useDrag } from "react-dnd";
import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";
import { useEffect, useRef, useState } from "react";

export default function Flower({ name, id, left, top }) {
	const flowerState = useFlowerStore((state) => state.flowers)
	const updateFlower = useFlowerStore((state) => state.updateFlower)
	const elementRef = useRef(null);
	const [position, setPosition] = useState({})

	// Set initial location of flower nodes
	useEffect(() => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			updateFlower(id, rect.x, rect.y)
			console.log(flowerState)
		}
	}, []);
	//Drag logic for each flower component
	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: itemTypes.flower,
			item: { name, left, top, id },
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();
				if (item && dropResult) {
					console.log("Plant is in the garden!");
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
				handlerId: monitor.getHandlerId(),
			}),
		}),
		[id, top, left]
	);
	if (isDragging) {
		return <div ref={drag} />;
	}

	//Styles while dragging
	const opacity = isDragging ? 0.4 : 1;

	return (
		<div
			ref={(el) => {
				elementRef.current = el;
				drag(el);
			}}
			style={{ opacity, left, top }}
			data-testid={`box`}
			className="plant-node"
		>
			{name}
		</div>
	);
}
