import { createStore } from 'vuex';

export default createStore({

    state:{
        token: null,
        isAuthenticated: false
    },

    mutations:{

    },
    actions:{
        checkUserAuthenticationStatus({commit}){
            axios.get('api/authenticated')
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    },
    getters:{
        
    }
})