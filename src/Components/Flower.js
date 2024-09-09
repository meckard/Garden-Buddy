import { useDrag } from "react-dnd";
import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";

export default function Flower({ name, id, left, top }) {
	const addFlower = useFlowerStore((state) => state.addFlower);

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
		addFlower({ name, id, left, top });
	};

	return (
		<div
			ref={drag}
			style={{ opacity, left, top }}
			data-testid={`box`}
			className="plant-node"
			onDragEnd={handleAddFlower}
		>
			{name}
		</div>
	);
}
