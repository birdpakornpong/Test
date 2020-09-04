<template>
<div class="container" style="margin-top: 100px">
  <div class="row justify-content-center">
    <div class="col-8" style="padding: 10px;margin-top: 50px">
      A = 21, A + B = 23, A + C = -21 finding B and C value
    </div>
    <div class="col-8" style="padding: 10px;margin-top: 50px">
      <button type="button" class="btn btn-primary" @click="getBCvalue()">Answer</button> <br>
    </div>
    <div class="col-8" style="padding: 10px;margin-top: 50px;margin-bottom: 50px">
      B = {{bcvalue.B}}, C = {{bcvalue.C}}
    </div>
  </div>
</div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'XYZvalue',
  components: {

  },
  methods: {
    ...mapActions({
      getBCvalue: 'getBCvalue'
    })
  },
  computed: {
    ...mapState({
      bcvalue: state => state.bcvalue
    })
  }
}
</script>
<style>
</style>