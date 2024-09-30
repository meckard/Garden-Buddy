import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export default function Flower({ name, id, left, top }) {
	const flower = useFlowerStore((state) =>
		state.flowers.find((f) => f.id === id)
	);
	const updateFlower = useFlowerStore((state) => state.updateFlower);
	const elementRef = useRef(null);
	const [position, setPosition] = useState({
		top: flower.top,
		left: flower.left,
	});

	// Set initial location of flower nodes
	useEffect(() => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			updateFlower(id, rect.x, rect.y);
			setPosition({ top: rect.x, left: rect.y });
		}
	}, []);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: `${flower.id}`,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className="plant-node"
		>
			{name}
		</div>
	);
}
