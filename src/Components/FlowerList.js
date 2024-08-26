import { useEffect } from "react"


export default function FlowerList () {

    const getPlants = async () => {
        const response = await fetch(apiUrl)
        const json = await response.json()
        console.log(json)
    }

    getPlants()

    

    return(
        <p>hey</p>
    )
}