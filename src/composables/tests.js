import { ref } from 'vue';

export default {
    data(){
        return {
            selectedAnswers: ref(Array(20).fill().map(() => new Array(4).fill(false))),
            checkAnswers: ref(Array(20).fill(0)),
            formNum : 1,
            score : 0,
            formStatus: true,
            equations : [
                { text: '10 + 153 + 52', answer: 3, options: [210, 220, 215, 230] },
                { text: '15 + 72 + 38', answer: 2, options: [120, 125, 130, 135] },
                { text: '58 + 33 - 12', answer: 3, options: [75, 80, 79, 85] },
                { text: '4 × 18 - 6', answer: 4, options: [50, 55, 60, 54] },
                { text: '123 ÷ 3 + 17', answer: 2, options: [62, 64, 66, 70] },
                { text: '42 + 65 + 19', answer: 1, options: [126, 125, 120, 130] },
                { text: '9 × 8 + 7', answer: 3, options: [75, 78, 79, 82] },
                { text: '60 ÷ 12 + 24', answer: 2, options: [28, 30, 32, 35] },
                { text: '35 + 44 - 28', answer: 2, options: [50, 51, 53, 55] },
                { text: '60 - 25 + 12', answer: 1, options: [47, 45, 43, 49] },
                { text: '25 + 34 + 41', answer: 2, options: [95, 100, 90, 110] },
                { text: '50 ÷ 2 + 18', answer: 4, options: [40, 30, 35, 43] },
                { text: '72 - 18 + 25', answer: 1, options: [79, 80, 85, 75] },
                { text: '5 × 9 - 8', answer: 3, options: [40, 50, 37, 45] },
                { text: '200 ÷ 4 + 13', answer: 2, options: [60, 63, 65, 70] },
                { text: '11 × 7 - 15', answer: 4, options: [60, 62, 70, 62] },
                { text: '33 + 17 + 28', answer: 3, options: [65, 66, 78, 80] },
                { text: '81 ÷ 9 + 22', answer: 1, options: [31, 32, 33, 30] },
                { text: '45 + 55 - 20', answer: 3, options: [75, 85, 80, 70] },
                { text: '90 - 45 + 5', answer: 4, options: [35, 40, 42, 50] }
            ],
        }
    },
    methods:{
        setForm(path){
            switch (path) {
                case '/f1':
                  this.formNum = 1;
                  break;
                case '/f2':
                  this.formNum = 2;
                  break;
              }
        },
    }
}