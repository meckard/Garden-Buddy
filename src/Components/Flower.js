import { useDrag } from "react-dnd";
import { itemTypes } from "../ItemTypes";
import { useFlowerStore } from "../State/flowerStore";
import setElementPosition from "../Utils/getPosition";

export default function Flower({ name, id, left, top }) {
	const addFlower = useFlowerStore((state) => state.addFlower);

    function setElementPosition(element) {
        // Get the current position of the element
        const rect = element.getBoundingClientRect();
        
        // Set the `top` and `left` based on the element's current position
        element.style.position = 'absolute'; // Ensure the element is positioned absolutely
        element.style.top = `${rect.top}px`;
        element.style.left = `${rect.left}px`;
      }
      
      // Usage example: Setting position of a specific element
      document.addEventListener('DOMContentLoaded', () => {
        const element = document.getElementById('my-element'); // Replace with your element's ID or selector
        
        // Set the position based on current location
        setElementPosition(element);
      });

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
			ref={drag}
			style={{ opacity, left, top }}
			data-testid={`box`}
			className="plant-node"
			onDragEnd={handleAddFlower}
            top='0'
            left='0'
		>
			{name}
		</div>
	);
}
