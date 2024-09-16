import axios from "axios";

export const carsStore = {
    state: () => ({
        data: [],
        links: {},
        meta: {},
        isDataLoading: true,
    }),
    getters: {

    },
    mutations: {
        setLoading(state, value) {
            state.isDataLoading = value;
        },
        setData(state, value) {
            state.data = value;
        },
        setLinks(state, value) {
            state.links = value;
        },
        setMeta(state, value) {
            state.meta = value;
        },
        setParams(state, value) {
            console.log('k')
            state.params = value;
        }
    },
    actions: {
        async fetchCars({state, commit}, params = {search: "",  perPage: 9, page: 1}) {
            try {
                commit('setLoading', true);

                const response = await axios.get('https://api.caiman-app.de/api/cars-test', {
                    params: {
                        search: params.search,
                        per_page: params.perPage,
                        page: params.page
                    }
                });

                const { data } = response;

                commit('setData', data.data);
                commit('setLinks', data.links);
                commit('setMeta', data.meta);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true
}