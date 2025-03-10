import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        token: localStorage.getItem('token') || '',
        isAuthenticated: false,
    },

    mutations: {

        // UpdateAuthenticationStatus(state, status) {
        //     state.isAuthenticated = status;
        // },

        UpdateAuthStatus(state, status){
            state.isAuthenticated = status;

            // console.log('status is'+ status)
        },

        UpdateToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
    },

    actions: {

        // checkUserAuthenticationStatus({ commit }) {
        //     axios.get('api/authenticated')
        //         .then((response) => {
        //             commit('UpdateAuthenticationStatus', response.data.status);
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        // },

        SetAuthStatus({ commit }, status) {
            commit('UpdateAuthStatus', status)            
        },

        setAuthToken({ commit }, token) {
            commit('UpdateToken', token);
            console.log('Updating Token');
        },
    },

    getters: {
        authStatus: state => state.isAuthenticated
    },
});
