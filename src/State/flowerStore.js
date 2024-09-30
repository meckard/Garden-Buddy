import { create } from "zustand";

export const useFlowerStore = create((set) => ({
	flowers: [],
	addFlower: (newFlower) =>
		set((state) => {
			const exists = state.flowers.some((flower) => flower.id === newFlower.id);
			console.log(exists);
			if (!exists) {
				console.log('Adding flower:', newFlower);
				return { flowers: [...state.flowers, newFlower ] };
			}
			return state; // No change if the item exists
		}),
	updateFlower: (id, newTop, newLeft) =>
		set((state) => ({
			flowers: state.flowers.map((flower) =>
                flower.id === id ? { ...flower, top: newTop, left: newLeft } : flower
              ),
		})),
}));
