const app = Vue.createApp({
    data() {
        return {
            number: 0,

        };
    },
    // watch: used to perform side effects (like setTimeout) when a data property changes
    watch: {
        result() {
            // Save reference to Vue instance because 'this' inside setTimeout refers to the function scope, not Vue
            const that = this;
            setTimeout(function() {
                // Use 'that' instead of 'this' because 'this' context is lost inside regular function
                that.number = 0;
            }, 3000);
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return "Not there yet";
            } else if (this.number === 37) {
                return this.number;
            } else {
                return "Too much!";
            }
        }
    },
    methods: {
        // Benefit of using num parameter: allows reusing this method for different increment values
        addNumber(num) {
            this.number = this.number + num;
        }
    }
});

app.mount("#assignment");