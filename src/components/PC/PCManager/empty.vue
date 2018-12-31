<template>

  <h1>


  </h1>

</template>


<script>

  export default {

    data() {

      return {
        type: ''
      }

    },
    created(){
      this.getParams()
      this.creat()
    },
    methods:{
      getParams (){
        const typ = this.$route.query.type
        this.type=typ
      },
    creat() {
      this.$router.replace({
        path: '/ManagerIndex',
        query: {
          type: this.type,
        }
      })
    }
  }
  }
</script>
