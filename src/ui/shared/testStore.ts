import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTestStore = create(persist((set: any) => ({
    current: {},
    testData: [],
    loadData: async(data: any) => {
        set(produce((state: any) => {
            state.testData.push(data);
        }))
    },
    setCurrent: (test: any) => {
        set(produce((state: any) => {
            state.current = test;
        }))
    }
}),
{
    name: "testStore",
    storage: createJSONStorage(() => sessionStorage)
}
));

