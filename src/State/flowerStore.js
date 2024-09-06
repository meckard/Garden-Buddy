import { create } from 'zustand'

const useFlowerStore = create((set) => ({
  flowers: { 0: {name: 'test', top: 0, left: 0}},
  addFlower: (id, name, top, left) => set((state) => ({ flowers: state.flowers + {id, name, top, left} })),
  updateFlower: (id, top, left) => set((state) => ({ flowers: state.flowers[id]: top, left })),
  removeAllBears: () => set({ bears: 0 }),
}))