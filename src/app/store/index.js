import { createStore } from "vuex";
import { carsStore } from "@/entities/Cars/index.js";

export default createStore({
    modules: {
        cars: carsStore
    }
})