import { plantinfo } from "../Plantinfo";
import Flower from "./Flower";
import { useFlowerStore } from "../State/flowerStore";

export default function FlowerList() {
    const flowerstate = useFlowerStore((state) => state.flowers)
    console.log(flowerstate)
    
    const addFlower = useFlowerStore((state) => state.addFlower)
    const newFlower = {id: 1, name: "test2", top: 0, left: 0}



    const handleAddFlower = (flowerInfo) => {
        const newFlower = { id: 1, name: 'test2', top: 0, left: 0 };
        addFlower(flowerInfo);
        console.log(flowerstate)
      };
    console.log(flowerstate)

	const plants = plantinfo.map((plant) => {
		return <Flower name={plant.name} id={plant.id} />;
	});

	return <div className="plant-list">
        {plants}
        </div>;
}
