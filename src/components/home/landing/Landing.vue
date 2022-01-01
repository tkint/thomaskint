<script lang="ts" setup>
import Panel from "@/components/home/Panel.vue";
</script>

<template>
  <Panel vertical-align="middle" horizontal-align="center" class="text-center">
    <div class="row">
      <div class="col">
        <img id="avatar" src="@/assets/avatar.png" />
      </div>
    </div>

    <div class="row">
      <div class="col h1 text-uppercase">Thomas Kint</div>
    </div>

    <div class="row">
      <div class="col h4">Développeur</div>
    </div>
  </Panel>
</template>

<style scoped>
#avatar {
  height: 200px;
  border-radius: 100px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>
