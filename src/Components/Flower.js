import { useDrag } from "react-dnd";
import { itemTypes } from "../ItemTypes";

export default function Flower({ name, id, left, top }) {
	const [{ isDragging }, drag] = useDrag(() => ({
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
	}), [id, top, left]);
    if (isDragging) {
        return <div ref={drag} />
      }
	const opacity = isDragging ? 0.4 : 1;
	return (
		<div
			ref={drag}
			style={{ opacity, left, top }}
			data-testid={`box`}
            className="plant-node"
		>
			{name}
		</div>
	);
}
