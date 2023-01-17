<template>
    <div class="configure">
        <ul>
            <div class="title">{{ shape.shapeTitle }}</div>
            <div class="wrapper">
                <li
                class="wrapper-item"
                v-for="(wrapperShape,shapeIndex) in Setting.wrapper"
                :key="shapeIndex"
                @click="clickColor(shapeIndex)"
                >
                    <div 
                    class="wrapper-item-shape"
                    :class="[wrapperShape,
                            {active:shapeIndex === headShape}]"
                   >

                    </div>
                </li>
            </div>
        </ul>

        <ul>
            <div class="title">{{ shape.colorTitle }}</div>
            <div class="wrapper">
                <li
                class="wrapper-item"
                v-for="(wrapperShape,shapeIndex) in Setting.wrapper"
                :key="shapeIndex"
                @click="clickColor(shapeIndex)"
                >
                    <div 
                    class="wrapper-item-shape"
                    :class="[wrapperShape,
                            {active:shapeIndex === headShape}]"
                   >

                    </div>
                </li>
            </div>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { WrapperShape } from '../../enum'
    import { Setting } from '../../utils/constant'
    import { ref } from 'vue'
    
    const shape = ref({
        shapeTitle:'形状',
        colorTitle:'背景颜色'
    })

    const has = true
    const headShape = ref(0)


    function clickColor(index:number) {
        headShape.value = index
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/var.scss';
    .configure{
        width: 100%;
        color: $color-text;

        .title{
            width: 100%;
        }

        .wrapper{
            display: flex;
            align-items: center;

            .wrapper-item{
                padding: 0.4rem 0.5rem;
                cursor: pointer;

                .wrapper-item-shape {
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.5rem;
                    background-color: $color-text;
                    transition: background-color 0.2s;

                    &.circle {
                        border-radius: 50%;
                    }

                    &.squircle {
                        border-radius: 20%;
                    }
                    &.active{
                        background-color: $color-accent;
                    }
                    .link{
                        background-color: pink;
                    }
                }
            }
        }
        
    }
</style>