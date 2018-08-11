<template>
  <v-app dark>
    <v-layout justify-center align-center>
      <h2 class="text-xs-center title">
        <span
          class="blink-title"
          v-for="letter in textArray"
          v-html="letter">
        </span>
      </h2>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      title: 'Error 404',
      text: "This page doesn't exist",
    };
  },
  computed: {
    textArray() {
      return this.title.split('');
    },
  },
};
</script>

<style scoped>
  h2.title {
    margin-bottom: 10%;
    word-spacing: 10px;
  }

  img {
    -webkit-filter: drop-shadow(0px 0px 10px #000);
    filter: drop-shadow(0px 0px 10px #000);
    margin-bottom: 15px;
  }

  img:hover {
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  .blink-title {
    font-size: 60px;
    font-family: Monoton, cursive;
    text-transform: uppercase;
    text-shadow: 0 0 15px #000, 0 0 10px #fff;
    letter-spacing: 3px;
    color: #FFFFFF;
  }

  .blink-title:nth-of-type(1) {
    animation: light 15s linear infinite;
  }

  .blink-title:nth-of-type(2) {
    animation: light 11s linear infinite;
  }

  .blink-title:nth-of-type(4) {
    animation: light 20s linear infinite;
  }

  .blink-title:nth-of-type(5) {
    animation: light 7s linear infinite;
  }

  .blink-title:nth-of-type(9) {
    animation: light 5s linear infinite;
  }

  .blink-title:nth-of-type(11) {
    animation: light 9s linear infinite;
  }

  @keyframes light {
    0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
      opacity: .99;
      text-shadow: 0 0 15px #000, 0 0 10px #fff;
    }
    20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
      opacity: 0.4;
      text-shadow: none;
    }
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  a {
    text-decoration: none;
    padding: 15px;
  }

  a:hover {
    text-shadow: 0 0 10px #fff;
  }
</style>
