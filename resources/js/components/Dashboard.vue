<template>
    <div class="container">
        <div class="col-12 mt-5">
            <div class="card">
                <div class="card-header d-flex justify-content-center">
                    Dashboard
                </div>
                <div class="card-body">
                    <p class="card-text">You are logged in!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
import axios from 'axios';

export default {
    data() {
        return {
            user: null 
        };
    },

    mounted() {
        this.getUserDetail();
    },

    methods: {
        getUserDetail() {
            axios.get('/api/user') 
                .then(response => {
                    console.log('User Details:', response.data);
                    this.user = response.data; 
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        }
    }
};
</script> -->
