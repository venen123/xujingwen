<template>
  <div>
    <div class="print">
      <Button type="info" v-print="'#print'">打印简历</Button>    
    </div>
     
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }

}
</script>

<style lang="less">
#app {
  margin-top: 2rem;
 
}
 .print{
    width: 794px;
    margin: 0 auto;
    text-align: right;
    margin-bottom: 1rem;

  }
</style>
