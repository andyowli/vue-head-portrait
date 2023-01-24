<template>
    <div class="home">
        <main id="left">
            <people></people>
        </main>

        <aside id="right" >
            <sider></sider>
        </aside>
    </div> 
</template>

<script lang="ts" setup>
import people from '../Main/main.vue'
import sider from '../Wrapper/wrapper.vue'



</script>

<style lang="scss" scoped>
@import '../../styles/var.scss';
    .home{
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        #left{
            width: 100%;
            
        }

        #right{
            width: 14%;
        }

        #left,#right{
            flex-grow: 1;
            position: relative;
            background-color: #20222a;
        }

        .move{
            width: 0 !important;
        }

        #right,.move,.collapsed{
            transition: all .5s;
        }
    }

    .heme,#left,#right{
        height: 100%;
    }
</style>