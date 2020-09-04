<template>
<div class="container" style="margin-top: 100px">
  <div class="row justify-content-center">
    <div class="col-8" style="padding: 10px;margin-top: 50px">
      X, Y, 5, 9, 15, 23, Z finding X, Y, Z value
    </div>
    <div class="col-8" style="padding: 10px;margin-top: 50px">
      <button type="button" class="btn btn-primary" @click="getUser()">Answer</button> <br>
    </div>
    <div class="col-8" style="padding: 10px;margin-top: 50px;margin-bottom: 50px">
      X = {{user.X}}, Y = {{user.Y}}, Z={{user.Z}}
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
      getUser: 'getUser'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
<style>
</style>