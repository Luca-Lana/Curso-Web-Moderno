<template>
    <div class="calculator">
        <DisplayItem :value="displayValue" />
        <ButtonItem label="AC" triple @click="clearMemory"/>
        <ButtonItem label="/" operation @click="setOperation"/>
        <ButtonItem label="7" @click="addDigit"/>
        <ButtonItem label="8" @click="addDigit"/>
        <ButtonItem label="9" @click="addDigit"/>
        <ButtonItem label="*" operation @click="setOperation"/>
        <ButtonItem label="4" @click="addDigit"/>
        <ButtonItem label="5" @click="addDigit"/>
        <ButtonItem label="6" @click="addDigit"/>
        <ButtonItem label="-" operation @click="setOperation"/>
        <ButtonItem label="1" @click="addDigit"/>
        <ButtonItem label="2" @click="addDigit"/>
        <ButtonItem label="3" @click="addDigit"/>
        <ButtonItem label="+" operation @click="setOperation"/>
        <ButtonItem label="0" double @click="addDigit"/>
        <ButtonItem label="." @click="addDigit"/>
        <ButtonItem label="=" operation @click="setOperation"/>
    </div>
</template>

<script>
import DisplayItem from '../components/DisplayItem.vue'
import ButtonItem from '../components/ButtonItem.vue'

export default {
    components: {
        DisplayItem,
        ButtonItem
    },
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0
        }
    },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === '='
                const currentOperation = this.operation
                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                        )
                } catch (error) {
                    this.$emit('onError', error)
                }
                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(digit) {
            if (digit === '.' && this.displayValue.includes(".")) {
                return
            }
            const clearDisplay = this.displayValue === '0' 
                || this.clearDisplay
            const currentValue = clearDisplay ? '' : this.displayValue
            const displayValue = currentValue + digit

            this.displayValue = displayValue
            this.clearDisplay = false

            if (digit !== '.') {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>