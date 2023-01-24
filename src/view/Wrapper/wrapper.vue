<template>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox" class="sider">
        <div class="" @click="open">
            <div class="trigger">
            <img :src="IconRight" class="icon-right" alt="arrow" />
            </div>
        </div>
    </label>

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
</template>

<script lang="ts" setup>
    import IconRight from '../../assets/icons/icon-right.svg'
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

    function open(){
        const handleClick:any = document.getElementById('right')
        const sider:any = document.getElementsByClassName('sider')[0]

        console.log(handleClick.classList.contains('move') || sider.classList.contains('collapsed'))

        if(handleClick.classList.contains('move') || sider.classList.contains('collapsed')){
            handleClick.classList.remove('move')
            sider.classList.remove('collapsed')
        } else {
            handleClick.classList.add('move')
            sider.classList.add('collapsed')
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/var.scss';
    input {
        display: none;
    }

    .sider {
        height: 100%;

        .icon-right {
            transition: transform 0.2s;
        }

        &.collapsed {
            transform: translateX(13rem);

            .icon-right {
                transform: rotateY(-180deg);
            }
        }

        .trigger {
            position: absolute;
            top: 50%;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.2rem;
            height: 4rem;
            // box-shadow: 0 0 4px 0 rgb(158, 158, 158);
            background-color: $color-dark;
            border-radius: 0.4rem 0 0 0.4rem;
            transform: translate(-100%, -50%);
            cursor: pointer;
            transition: width 0.2s, background-color 0.2s;

            &:hover {
                width: 1.5rem;
                background-color: lighten($color-dark, 5);
            }
        }
    }

    ul{
        width: 13rem;
        height: 100%;
        padding: 1.8rem 1rem;
        background-color: #20222a;
        .title{
            width: 100%;
            color: $color-text;
            font-weight: bold;
            margin-bottom: 1.5rem;
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
                }
            }
        }
    }
</style>