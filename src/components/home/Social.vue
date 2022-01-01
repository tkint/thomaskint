<script lang="ts" setup>
import { IconKey } from "@/data/icons";
import AppIcon from "@/components/common/AppIcon.vue";

interface Network {
  name: string;
  icon: IconKey;
  url: string;
  css?: string;
}

const networks = [
  {
    name: "Github",
    icon: "github",
    url: "https://github.com/tkint",
    css: "text-black",
  },
  {
    name: "Linkedin",
    icon: "linkedIn",
    url: "https://linkedin.com/in/tkint",
    css: "text-primary",
  },
  {
    name: "StackOverflow",
    icon: "stackOverflow",
    url: "https://stackoverflow.com/users/9852414/tkint",
    css: "text-danger",
  },
] as Network[];
</script>

<template>
  <div id="social">
    <div class="row">
      <div
        class="col"
        v-for="(network, index) in networks"
        :key="`network-${index}`"
      >
        <a
          :title="network.name"
          :href="network.url"
          target="_blank"
          :class="network.css ?? 'text-black'"
        >
          <AppIcon :icon="network.icon"></AppIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#social {
  position: fixed;
  background-color: #fff;
  z-index: 999;
}

#social .row .col {
  font-size: 20px;
}

@media (max-width: 576px) {
  #social {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 8px 0px 8px;
    margin-bottom: -1px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  #social .row {
    flex-direction: row;
  }
  #social .row .col {
    margin-left: 5px;
    margin-right: 5px;
  }
}

@media (min-width: 576px) {
  #social {
    top: 50%;
    transform: translateY(-50%);
    padding: 5px 8px 5px 8px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  #social .row {
    flex-direction: column;
  }

  #social .row .col {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

a:hover {
  opacity: 0.8;
}
</style>
