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
		position: "absolute",
		top: flower.top,
		left: flower.left,
	});

	// Set initial location of flower nodes
	/* useEffect(() => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			updateFlower(id, rect.x, rect.y);
			setPositionStyle({ position: "relative", top: rect.x, left: rect.y });
		}
	}, []); */

	useEffect(() => {
		if (flower) {
		  setPositionStyle({
			position: "absolute",
			top: flower.top,
			left: flower.left,
		  });
		}
	  }, [flower]);

	const {
		attributes,
		listeners,
		isDragging,
		setNodeRef,
		transform,
		transition,
	} = useDraggable({ id: id });

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
		top: `${positionStyle.top}px`,
		left: `${positionStyle.left}px`,
		position: "absolute", // Ensure absolute positioning within the container
	};

	if (isDragging) {
		console.log(transform.x);
	}

	useDndMonitor({
		onDragEnd(event) {
			/* const { delta } = event;
			if (delta) {
				const newTop = positionStyle.top + delta.y;
				const newLeft = positionStyle.left + delta.x; */

				if (transform) {
					const newTop = positionStyle.top + transform.y;
					const newLeft = positionStyle.left + transform.x;

				// Update the flower state with new position
				updateFlower(id, newLeft, newTop);

				// Update local state to persist new position
				setPositionStyle({
					top: newTop,
					left: newLeft,
					position: "absolute",
				});
			}
		},
	});

	const handleDragEnd = (x, y) => {
		setPositionStyle({ position: "absolute", top: x, left: y });
	};
	console.log(positionStyle);

	console.log(style);

	return (
		<useDndContext onDragEnd={handleDragEnd}>
			<div
				ref={setNodeRef}
				style={style}
				{...listeners}
				{...attributes}
				className="plant-node"
			>
				<div>{name}</div>
			</div>
		</useDndContext>
	);
}
