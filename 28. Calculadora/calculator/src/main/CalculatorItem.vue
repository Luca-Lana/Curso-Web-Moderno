<template>
    <div class="calculator">
        <DisplayItem />
        <ButtonItem />
    </div>
</template>

<script>
import DisplayItem from '../components/DisplayItem.vue'
import ButtonItem from '../components/ButtonItem.vue'

export default {
    components: {
        DisplayItem,
        ButtonItem
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