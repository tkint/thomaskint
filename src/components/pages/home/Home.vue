<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout justify-center align-center>
          <h2 class="text-xs-center title">
            <span
              class="blink-title"
              v-for="letter in textArray"
              v-html="letter">
            </span>
          </h2>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center>
          <img src="/static/img/Avatar%2000.jpg" height="200"/>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center>
          <a :href="`mailto:${emailAdress}`">
            <icon large class="social-icon" value="mail"></icon>
          </a>
          <a :href="gitUrl">
            <icon large class="social-icon" value="fab fa-gitlab"></icon>
          </a>
          <a :href="linkedinUrl">
            <icon large class="social-icon" value="fab fa-linkedin"></icon>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SettingNames from '@/plugins/global/settings-names';

export default {
  name: 'Home',
  computed: {
    textArray() {
      if (this.comingSoonTitle) {
        return this.comingSoonTitle.split('');
      }
      return [];
    },
    comingSoonTitle() {
      return this.$global.getSettingValue(SettingNames.SITE_TITLE);
    },
    emailAdress() {
      return this.$global.getSettingValue(SettingNames.EMAIL_ADRESS);
    },
    gitUrl() {
      return this.$global.getSettingValue(SettingNames.GIT_URL);
    },
    linkedinUrl() {
      return this.$global.getSettingValue(SettingNames.LINKEDIN_URL);
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

  .social-icon {
    font-size: 50px !important;
  }
</style>
