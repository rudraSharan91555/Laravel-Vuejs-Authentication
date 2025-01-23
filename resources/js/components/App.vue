<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Auth App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                    </ul>
                    <form class="d-flex mt-1 " role="search">
                        <router-link v-if="isAuthenticated" to="/dashboard" class="btn btn-outline-success">Dashboard</router-link> &nbsp;
                        &nbsp;
                        <router-link v-if="!isAuthenticated" to="/login" class="btn btn-outline-primary">Login</router-link> &nbsp; &nbsp;
                        <router-link v-if="!isAuthenticated" to="/register" class="btn btn-outline-primary">Register</router-link>
                    </form>
                </div>
            </div>
        </nav>
    </div>

    <router-view></router-view>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed:{

        // isAuthenticated(){
            // return this.$store.state.isAuthenticated
            // return this.$store.getters.authStatus
        // }

        ...mapGetters({
            isAuthenticated: 'authStatus' 
        })
    }

}
</script>