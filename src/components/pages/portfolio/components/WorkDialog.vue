<template>
  <v-dialog
    v-model="show"
    max-width="100%"
    scrollable
    fullscreen
    id="work-dialog"
  >
    <v-card v-if="work">
      <v-card-media
        height="200px"
        src="/static/img/material2.jpg"
      >
        <v-container fluid>
          <v-layout row wrap>
            <v-btn
              fab
              dark
              small
              color="primary"
            >
              <v-icon>{{ $global.icons.SHARE }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h3>{{ work.title }}</h3>
            <v-spacer></v-spacer>
            <v-btn
              fab
              dark
              small
              color="red"
              @click.stop="show = false"
            >
              <v-icon>{{ $global.icons.CLOSE }}</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit tortor augue, eget maximus libero hendrerit vitae. Curabitur varius nibh eu tellus volutpat vehicula. Nunc tempus eu risus a porta. Etiam quis urna non sem cursus rutrum. Mauris egestas turpis id ligula tempor pellentesque. Morbi vitae neque vel erat eleifend convallis eu nec nibh. Aliquam erat volutpat.

        Maecenas dictum nunc ut volutpat dapibus. Sed id lacus a orci tincidunt euismod vitae et eros. Proin et erat risus. Nam facilisis tortor eu ex rutrum placerat. Cras urna ex, dignissim sed sapien id, finibus suscipit lorem. Suspendisse ut est non ipsum viverra fermentum ac sed velit. Curabitur dolor metus, pretium eu purus vel, scelerisque porta tortor. Etiam varius auctor tortor ac consectetur. Quisque tristique mauris enim, eu tincidunt erat condimentum ac. Etiam nec ornare magna. Maecenas lacinia orci ac mauris blandit, a ultricies ex consequat. Aenean condimentum diam massa, vel venenatis justo efficitur ut.

        Maecenas varius rhoncus ipsum vitae varius. Suspendisse eget faucibus orci. Fusce nec nulla ante. Integer ullamcorper dapibus suscipit. Donec a ligula eget ligula laoreet venenatis. Donec accumsan, diam vel ullamcorper pulvinar, orci enim accumsan quam, quis molestie ipsum diam vitae turpis. Praesent auctor arcu a varius commodo. Aenean ac tincidunt turpis, quis euismod mauris. In nulla massa, semper sit amet eleifend in, vehicula id est. Proin suscipit dignissim posuere. Nulla ac lacus vel enim volutpat vehicula. Vivamus enim lectus, tincidunt at dignissim sit amet, gravida id ex. Suspendisse potenti. Fusce vitae massa ac lorem mollis vestibulum.

        Nulla finibus tempus est lobortis dictum. Aenean iaculis, sapien consequat blandit porta, dui lorem placerat ipsum, sit amet efficitur tortor ipsum at est. Vestibulum sed tellus cursus massa tristique rhoncus vel vehicula mauris. Duis vehicula lacus enim, molestie pellentesque turpis vehicula ultricies. Proin malesuada vestibulum nibh quis mollis. Maecenas malesuada orci sed lectus ornare semper. Sed fringilla mauris sit amet ultrices faucibus. Nam sodales dictum dolor finibus efficitur. Nullam egestas, mi eu egestas volutpat, elit leo pharetra lectus, quis imperdiet arcu sem sed mauris. Curabitur nec tellus at velit maximus mattis pulvinar ac nunc. Donec eu mauris in nisl elementum volutpat. In sodales ligula et lobortis cursus. Pellentesque blandit mauris at augue rhoncus, ut elementum elit tincidunt.

        Suspendisse luctus vestibulum mi, nec accumsan ante vulputate at. Quisque pellentesque tincidunt varius. Duis eleifend, leo nec pulvinar aliquet, ex eros rhoncus ex, vel scelerisque est ante nec felis. Praesent volutpat sollicitudin tellus ac pulvinar. Etiam quam elit, egestas eget faucibus elementum, vestibulum in sem. Pellentesque vitae quam consectetur, blandit augue ut, laoreet ipsum. Vestibulum fringilla ullamcorper mi, id dignissim tortor suscipit et. Suspendisse a ante quis orci ultricies ullamcorper eget dictum dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus justo diam, venenatis eu eros nec, interdum sagittis mi. Cras a nisl sed erat elementum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl urna, lobortis quis metus eu, tincidunt scelerisque leo.

        Donec ullamcorper mi leo, a tempor turpis facilisis id. Morbi nec lectus in tortor semper imperdiet eget a mi. Proin velit metus, laoreet ut dignissim venenatis, condimentum dignissim augue. Vivamus eget varius urna, sit amet fringilla risus. Sed ut neque magna. Nunc eu dui ultricies, posuere nulla quis, sodales leo. Nullam lacinia nibh nec sodales commodo. Vivamus sollicitudin ultrices justo vitae mollis. Pellentesque dolor massa, bibendum a lacus eget, volutpat auctor est. Praesent laoreet, nulla nec bibendum vehicula, tortor sapien faucibus est, sed convallis turpis mi eu augue. Duis vulputate fermentum lorem, tempus convallis dolor volutpat et. Fusce sed ligula eros. Curabitur nec hendrerit elit.

        Duis porttitor imperdiet justo. Mauris quis orci odio. Morbi a magna nec felis facilisis faucibus. Donec tristique blandit aliquet. Sed at orci velit. Vivamus a auctor mi. Vivamus bibendum velit et ultrices malesuada.

        Suspendisse porta, turpis at blandit egestas, ligula magna fringilla felis, nec facilisis massa leo vitae nibh. Integer elementum urna lectus, quis maximus tellus mollis quis. Sed tincidunt est arcu, non congue enim blandit in. Sed facilisis massa sit amet malesuada accumsan. Nulla facilisi. Donec ultrices tempor diam, ac vehicula mi volutpat eu. Cras pharetra interdum hendrerit. Cras a egestas nibh. Fusce bibendum mollis mi non mollis. Phasellus mauris ex, blandit a leo at, tincidunt rutrum dolor.

        Sed at pharetra nulla, nec feugiat lacus. Quisque non orci non diam vulputate tincidunt. Donec varius porttitor erat. Nam diam purus, venenatis in purus a, vehicula dignissim arcu. Sed quis ipsum accumsan, aliquam sapien non, rutrum quam. Curabitur id metus id velit consectetur aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        Praesent efficitur in ante a porta. Nam massa leo, pretium id metus eu, rhoncus consequat est. Maecenas facilisis arcu mauris, eget mollis ligula ultricies ut. Nullam at turpis eu metus mattis tristique nec a massa. Quisque aliquet vel nibh vitae dictum. Cras laoreet tempor est, ut pellentesque turpis tempus in. Mauris eu ultrices odio. Curabitur sed nunc feugiat, ultrices eros consequat, tristique dolor. Vivamus sed nibh consequat, lobortis leo vel, iaculis enim. Etiam dictum vulputate tortor, non auctor enim maximus ut. Aliquam pretium dui et ligula imperdiet, nec lobortis enim condimentum. Donec sollicitudin velit id nibh ullamcorper eleifend. In hac habitasse platea dictumst. Sed efficitur urna et aliquet interdum. Nam eleifend nunc in felis dictum elementum. Proin turpis orci, interdum quis pretium sed, blandit at nisl.

        Fusce eget tortor velit. Vestibulum vitae sapien nulla. Sed fringilla nibh ac finibus ullamcorper. Praesent lectus nisl, laoreet pulvinar sagittis in, elementum id enim. Praesent id nisi ipsum. Suspendisse vel pulvinar enim, at pharetra dui. Donec imperdiet interdum elementum. Praesent condimentum facilisis sodales. Proin pretium feugiat erat a mollis. Cras interdum odio vitae magna posuere, sit amet pellentesque turpis blandit. Proin tincidunt eleifend sapien at hendrerit. Nullam vehicula mollis dignissim. Vestibulum auctor a nunc non placerat. Donec facilisis enim eu lacus scelerisque molestie.

        Nunc convallis nunc vitae nulla blandit auctor. Integer sed magna ac dui eleifend ullamcorper. Aliquam rutrum turpis vitae porta euismod. Aliquam erat volutpat. Duis lectus ligula, ullamcorper ac augue sed, imperdiet sodales massa. Vivamus eleifend mauris lectus, sed imperdiet ligula ultrices volutpat. Suspendisse eget arcu a turpis convallis hendrerit iaculis non libero. Quisque a feugiat purus.

        Duis blandit, nisi nec pellentesque accumsan, lectus enim sollicitudin sapien, in auctor eros massa id diam. Sed congue fringilla nunc eu cursus. Donec tincidunt condimentum urna, id ornare nibh convallis vel. Nulla facilisi. Praesent viverra, quam at scelerisque varius, augue nisi lacinia magna, non laoreet odio nunc vitae libero. Duis varius felis suscipit risus tristique, id ultricies mi facilisis. Curabitur a ullamcorper diam. Nulla eu nisi maximus, placerat arcu vel, lacinia urna. Nullam vel auctor ante, quis porta dolor. Nulla ultricies sodales turpis vel scelerisque. Etiam sit amet massa sagittis, accumsan nulla sed, consequat purus. Mauris ac arcu ac dui posuere semper non quis nunc. Vivamus feugiat orci et sem suscipit mollis. Duis eget lobortis lectus. Integer porta auctor eros eu lacinia. Integer a malesuada est.

        Aliquam eget efficitur dui. Nunc odio tortor, tempor et ipsum in, elementum varius diam. Cras gravida scelerisque ultrices. Suspendisse et sapien vitae dui mattis facilisis consequat id nibh. Fusce quis orci maximus eros pretium porttitor ut vel lectus. Morbi lectus dui, sagittis a nulla vitae, tristique luctus arcu. Integer in convallis lacus. Morbi viverra arcu nec blandit rhoncus. Quisque eget malesuada ipsum. Ut vehicula aliquam neque.

        Vivamus sodales mauris quis libero bibendum consectetur. Aenean metus leo, pulvinar eget tincidunt vel, faucibus nec neque. Maecenas quis efficitur lorem. Phasellus aliquet nibh neque, nec ullamcorper diam efficitur eget. Curabitur vehicula nisl sit amet ex iaculis, ut posuere lorem pharetra. Suspendisse sed risus eu quam feugiat cursus vitae id est. Quisque porttitor arcu a lectus pellentesque, nec malesuada magna convallis. Aliquam sed risus et dolor lacinia laoreet. Nullam hendrerit maximus velit sed porttitor. Proin ut accumsan justo.
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import RouteNames from '@/router/names';

  export default {
    name: 'WorkDialog',
    props: ['work'],
    data() {
      return {
        RouteNames,
      };
    },
    computed: {
      show: {
        get() {
          return this.work !== null;
        },
        set() {
          this.$parent.work = null;
        },
      },
    },
    methods: {
      closeWork() {
        this.$parent.work = null;
        if (this.$route.params.id) {
          this.$router.push({ name: RouteNames.PORTFOLIO });
        }
      },
    },
  };
</script>

<style scoped>
  h3 {
    height: 100%;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    font-variant: small-caps;
    text-shadow: 1px 1px 1px #000;
  }
</style>
