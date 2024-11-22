import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTestStore = create(persist((set: any) => ({
    testData: {},
    loadData: async(data: any) => {
        set(produce((state: any) => {
            state.testData = data;
        }))
    }
}),
{
    name: "testStore",
    storage: createJSONStorage(() => sessionStorage)
}
));

