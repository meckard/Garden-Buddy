import { create } from "zustand";

export const useFlowerStore = create((set) => ({
	flowers: [{ id: 0, name: "test", top: 0, left: 0 }],
	addFlower: (newFlower) =>
		set((state) => {
			const exists = state.flowers.some((flower) => flower.id === newFlower.id);
			console.log(exists);
			if (!exists) {
				console.log('Adding flower:', newFlower);
				return { flowers: [...state.flowers, newFlower ] };
			}
            console.log('Flower already exists, not adding.');
			return state; // No change if the item exists
		}),
	updateFlower: (id, top, left) =>
		set((state) => ({
			flowers: state.flowers.map((flower) => {
				if (flower.id === id) {
                    console.log({flowers: [state.flowers[id]] })
                }
        }),
		})),
}));
