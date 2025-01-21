import { createStore } from 'vuex';

export default createStore({

    state:{
        token: localStorage.getItem('token') ||'',
        isAuthenticated: false
    },

    mutations:{
        UpdateAuthenticationStatus(state,status){
            state.isAuthenticated = status;
        },
        UpdateToken(state,token){
            state.token = token
            
            localStorage.setItem('token',token)
        }
    },
    actions:{
        checkUserAuthenticationStatus({commit}){
            axios.get('api/authenticated')
            .then(response =>{
                commit('UpdateAuthenticationStatus',response.data.status)
            })
            .catch(error =>{
                console.log(error)
            })
        },

        setAuthToken({commit,token}){
            commit('UpdateToken',token)

            console.log('Updateing Token')
        }

    },
    getters:{
        
    }
})