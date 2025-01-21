<template>
    <h5 class="container mt-4">
        <i class="bi bi-check-square"></i>
        Please select the correct answer for each equation:
    </h5>
    <div v-for="(equation, index) in equations.slice(0+11*(formNum-1), 10+11*(formNum-1))" :key="index" class="container">
        <div class="row justify-content-start mb-3 mt-4 fw-bold">
            {{ index+1+10*(formNum-1) }}. {{ equation.text }}:
        </div>
        <div class="row">
            <label class="col d-flex justify-content-center mb-4" v-for="(opt, i) in equation.options" :key="i">
            <input class="form-check-input mx-1" type="checkbox" :value="opt" v-model="selectedAnswers[index+10*(formNum-1)][i]" @click="handleAnswerChange(index+10*(formNum-1),i)"/> {{ opt }}
            </label>
        </div>
        <hr/>
    </div>
    <div class="container">
        <div v-if="formNum==1" class="col d-flex justify-content-end mb-4">
            <button type="button" class="btn btn-secondary" @click="GoToF2">Next
                <span class="mx-1"><i class="bi bi-chevron-double-right"></i></span>
            </button>
        </div>
        <div v-else="formNum==2" class="row">
            <div class="col-6 d-flex justify-content-start mb-4">
                <button type="button" class="btn btn-secondary" @click="GoToF1">
                    <span class="mx-1"><i class="bi bi-chevron-double-left"></i></span>
                    Prev.
                </button>
            </div>
            <div class="col-6 d-flex justify-content-end mb-4">
                <button type="button" class="btn btn-secondary" @click="FormSubmit1">submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    import tests from '@/composables/tests.js';

    export default {
        mixins: [tests],
        data(){
            return{
                formSubmit: false,
            }
        },
        mounted(){
            this.setForm(this.$route.path);
        },
        methods:{
            handleAnswerChange(in1,in2) {
                if(this.selectedAnswers[in1][in2] == true){
                    this.selectedAnswers[in1][in2] = false,
                    this.checkAnswers[in1] = 0
                }else{
                    this.selectedAnswers[in1] = Array(4).fill(false),
                    this.selectedAnswers[in1][in2] = true,
                    this.checkAnswers[in1] = in2+1
                };
                // console.log(this.checkAnswers)
                this.$emit('MySelectedAnswer',this.selectedAnswers)
                this.$emit('MyCheckAnswers',this.checkAnswers)
            },
            GoToF1(){
                this.$router.push('/f1'),
                this.formNum = 1
            },
            GoToF2(){
                this.$router.push('/f2'),
                this.formNum = 2
            },
            FormSubmit1(){
                this.$emit('formSubmit',true)
            }
        }
    };
</script>

<style></style>