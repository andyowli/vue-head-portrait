<template>
    <div class="people">
        <div 
        class="people-head"></div>
    </div>
</template>

<script lang="ts" setup>
    import { toRefs,ref } from 'vue'
    import { WrapperShape } from '../../enum'
    import { headOption } from '../../interface'

</script>


<style lang="scss" scoped>
    .people{
        width: 100%;
        height: 100%;

        .people-head{
            width: 14rem;
            height: 14rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
            border-radius: 50%;
            background-color: pink;
        }
    }
</style>