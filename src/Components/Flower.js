import { useDrag } from "react-dnd";
import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";
import { useEffect, useRef } from "react";

export default function Flower({ name, id, left, top }) {
	const flowerState = useFlowerStore((state) => state.flowers)
	const addFlower = useFlowerStore((state) => state.addFlower);
	const updateFlower = useFlowerStore((state) => state.updateFlower)
	const elementRef = useRef(null);

	// Usage example: Setting position of a specific element
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

	//State logic
	const handleAddFlower = () => {
		addFlower({ name, id, left: 0, top: 0 });
	};

	return (
		<div
			ref={(el) => {
				elementRef.current = el;
				drag(el);
			}}
			style={{ opacity, left, top }}
			data-testid={`box`}
			className="plant-node"
			onDragEnd={handleAddFlower}
		>
			{name}
		</div>
	);
}
