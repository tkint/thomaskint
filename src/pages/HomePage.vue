<template>
  <div class="container h-100">
    <div class="row h-100 text-center">
      <div class="col my-auto">
        <h1 class="font-weight-bold" style="font-size: 90px">
          Thomas
          <span class="text-uppercase text-primary">Kint</span>
        </h1>
        <p class="lead">
          Ingénieur Logiciel
        </p>
        <p>

        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            <font-awesome-icon :icon="['far', 'file-pdf']"></font-awesome-icon>
            Curriculum Vitae
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    return {};
  },
});
</script>
