<template>
    <div class="container costome-firstpage">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="card">
                    <div class="card-header">
                        <i class="bi bi-ui-radios-grid"></i>
                        MyTest
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center mt-3 mb-3">Math Test!</h5>
                        <p class="card-text mt-3 mb-5">Click the button below to start your test:</p>
                        <div class="row d-flex justify-content-center">
                            <button class="btn btn-success" @click="GoForms">Start!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tests from '@/composables/tests.js';

export default{
    mixins : [tests],
    methods : {
        GoForms(){
            this.$emit('assignment',true)
        }
    }
}
</script>

<style>
.costome-firstpage{
    margin-bottom: 9%;
    margin-top: 9.5%;
}
</style>