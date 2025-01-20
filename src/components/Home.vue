<template>
    <header>
        <div>
        <MyHeader />
        </div>
    </header>

    <main>
        <div class="container">
            <div v-if="alertSubmit" class="row alert alert-warning alert-dismissible fade show" role="alert">
                <div>Are you sure you want to submit? You won't be able to change your answers afterward!</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="setAlert"></button>
                <div class="row justify-content-center">
                    <div class="col-12 d-flex justify-content-end mt-4">
                        <button type="button" class="btn btn-success" data-bs-dismiss="alert" aria-label="Close" @click="ShowResults">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Tests @formSubmit="setAlert" @MySelectedAnswer="SetSelectedAnswer" @MyCheckAnswers="SetCheckAnswer"/>
        </div>
    </main>

    <footer>
        <MyFooter />
    </footer>
</template>

<script>
    import MyHeader from './MyHeader.vue';
    import MyFooter from './MyFooter.vue';
    import Tests from './Tests.vue';
    import tests from '@/composables/tests.js';

    export default {
        mixins: [tests],
        data(){
            return{
                alertSubmit : false,
                Myselectedanswer : [],
                Mycheckanswer : []
            }
        },
        components:{
            MyHeader,
            MyFooter,
            Tests,
        },
        methods:{
            setAlert(){
                (this.alertSubmit)?this.alertSubmit = false:this.alertSubmit=true
            },
            ShowResults(){
                this.Result()
                console.log(this.score)
            },
            Result(){
                this.Myselectedanswer.forEach((amount, index) => {
                    const ti = amount.indexOf(true);
                    if(ti!=-1){
                        (this.Mycheckanswer[index]==this.equations[index].answer)?this.score=this.score+1:this.score=this.score
                    }
                });
            },
            SetSelectedAnswer(selectEmit){
                this.Myselectedanswer = selectEmit
            },
            SetCheckAnswer(selectEmit){
                this.Mycheckanswer = selectEmit
            }
        }
        // mounted(){
        // },
    };
</script>

<style>
.alert {
  position: fixed;
  width: 70%;
  top: 10px;
  left: 15%;
  z-index: 1050;
}
</style>