import Vue from "vue";

import "../css/stepper.scss"

Vue.component("stepper-widget", {
    props: {
        steps: Array,
        activeStepIndex: { type: Number, default: 0 },
        template: String
    },
    computed: {},
    methods: {
        nextStep() {
            const nextIndex = this.activeStepIndex + 1;
            this.setActiveStep(nextIndex);
        },
        prevStep() {
            const prevIndex = this.activeStepIndex - 1;
            this.setActiveStep(prevIndex);
        },
        setActiveStep(index) {
            this.activeStepIndex = index;
        },
        changeActiveStep(index) {
            this.activeStepIndex = index;
        }
    }
});


