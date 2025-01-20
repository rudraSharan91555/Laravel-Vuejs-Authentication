 <template>
    <div class="container">
        <div class="row">
            <div class="col-6 mt-5 offset-3">
                <div class="card">
                    <div class="card-header d-flex justify-content-center">
                        Register
                    </div>
                    <div class="card-body">
                    <ul v-for="error in errors">
                        <div class="alert alert-danger" role="alert">
                            {{ error }}
                        </div>
                        <!-- <li class="text-danger"></li> -->
                    </ul>
                    <div v-if ="successMsg" class="alert alert-success" role="alert">
                        {{ successMsg }}
                    </div>
                        <form @submit.prevent="register" >
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label  class="form-label">Name</label>
                                    <input type="text" v-model="name" class="form-control" placeholder="Enter your name">
                                </div>
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter your email">
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" v-model="confirmed_password" class="form-control" placeholder="Enter your confirm password">
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{

    data(){
        return{
            name:'',
            email:'',
            password:'',
            confirmed_password:'',
            errors:[],
            successMsg:''
        }
    },
    methods:{
        register(){

            this.clearMessage();
            
            if(this.password != this.confirmed_password){
                this.errors = ['Your password does not match confirmed password'];
                return;
            }

            //api use here for register

            axios.post('api/register',{
                name : this.name,
                email: this.email,
                password: this.password
            }).then( response =>{
                if(response.status == 201){
                    this.successMsg = response.data.message;
                }
            }).catch(error =>{
                
                if(error.response.status == 422){
                    this.errors = Object.values(error.response.data.errors).flat()
                }
                else{
                    this.errors = ['Something went wrong']
                }

            });
        },

        clearMessage(){
            this.errors='';
        }
    }
}
</script> 