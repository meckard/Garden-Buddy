import { useDrag } from "react-dnd"
import { itemTypes } from "../ItemTypes"

export default function Flower ({ name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: itemTypes.flower,
        item: { name },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`)
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
      }))
}