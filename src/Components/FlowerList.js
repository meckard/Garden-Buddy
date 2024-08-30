import { useEffect } from "react";
import { plantinfo } from "../Plantinfo";
import Flower from "./Flower";

export default function FlowerList() {
    const plants = plantinfo.map((plant) => {
        return(
            <Flower name={plant.name}/>
        )
    })
		return plants
}
