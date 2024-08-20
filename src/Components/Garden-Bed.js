import { useDrop } from "react-dnd"
import { itemTypes } from "../ItemTypes"


export default function GardenBed () {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: itemTypes.bed,
        drop: () => ({ name: 'Garden Bed' }),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      }))
}