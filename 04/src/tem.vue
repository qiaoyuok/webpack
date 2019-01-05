<template>
    <div>
        <h1 @click="cl">这是一个单独的模板文件111</h1>

    </div>
</template>
<script>
    console.log(111)
    export default{
      data(){
        return {
          msg:'这是模板中的数据'
        }
      },
      methods:{
        cl(){
          console.log(this.msg)

        }
      }
    }
</script>
<style>
    h1{
        color:yellow;
    }
</style>
