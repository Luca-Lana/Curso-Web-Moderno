<template>
    <div class="calculator">
        <DisplayItem value="1000"/>
        <ButtonItem label="AC" triple/>
        <ButtonItem label="/" operation/>
        <ButtonItem label="7" />
        <ButtonItem label="8" />
        <ButtonItem label="9" />
        <ButtonItem label="*" operation/>
        <ButtonItem label="4" />
        <ButtonItem label="5" />
        <ButtonItem label="6" />
        <ButtonItem label="-" operation/>
        <ButtonItem label="1" operation/>
        <ButtonItem label="2" operation/>
        <ButtonItem label="3" operation/>
        <ButtonItem label="+" operation/>
        <ButtonItem label="0" double/>
        <ButtonItem label="." />
        <ButtonItem label="=" operation/>
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