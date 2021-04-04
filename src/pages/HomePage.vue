<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col my-auto">
        <h1 class="display-4 font-weight-bold">
          Thomas
          <span class="text-uppercase text-primary">Kint</span>
        </h1>
        <p class="lead">
          Ingénieur Logiciel
        </p>
        <hr class="my-4">
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
