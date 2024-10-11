import { CSS } from "@dnd-kit/utilities";
import { useFlowerStore } from "../State/flowerStore";
import { useEffect, useRef, useState } from "react";
import { useDraggable, useDndMonitor, DragEndEvent } from "@dnd-kit/core";

export default function Flower({ name, id, left, top }) {
	const flower = useFlowerStore((state) =>
		state.flowers.find((f) => f.id === id)
	);
	const updateFlower = useFlowerStore((state) => state.updateFlower);
	const elementRef = useRef(null);
	const [positionStyle, setPositionStyle] = useState({
		position: 'relative',
		top: flower.top,
		left: flower.left,
	});

	// Set initial location of flower nodes
	useEffect(() => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			updateFlower(id, rect.x, rect.y);
			setPositionStyle({ position: 'relative', top: rect.x, left: rect.y });
		}
	}, []);

	const { attributes, listeners, isDragging, setNodeRef, transform, transition } =
		useDraggable({ id });
	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
		positionStyle	
	};

	if(isDragging) {
		console.log(transform.x)
	}

	useDndMonitor({
		onDragEnd(event) {
			setPositionStyle({ position: 'absolute', top:event.delta.x, left:event.delta.y})
		}
	})

	const handleDragEnd = (x,y) => {
		setPositionStyle({ position: 'absolute', top:x, left:y})

	}
	console.log(positionStyle)

	console.log(style)

	return (
		<useDndContext onDragEnd={handleDragEnd}>
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className="plant-node"
		>
			{name}
		</div>
		</useDndContext>
	);
}
