<template>
    <footer>
        <p>Copyright 2020 {{ title }}</p>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return{
        }
    }
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>