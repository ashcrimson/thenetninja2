<template>
  <div>
    <form-one></form-one>
    
  </div>
</template>

<script>
import formOne from './components/formOne';
import forTwo from './components/formTwo.vue';

export default {
  components:{
    'form-one':formOne,
    'form-two':formTwo,
  },
  data(){
    return {
     
    }
  },
  methods:{
    
    }
  }
</script>
<style>

</style>
