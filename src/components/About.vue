<template>
  <v-dialog
    v-model="dialog"
    max-width="800"
    light
    @keydown.esc="dialog = false"
  >
    <v-card>
      <v-card-title>{{ $t('about', { appname: $t('title') }) }}</v-card-title>
      <v-card-text>
        <v-banner>
          <nl2br tag="p" :text="$t('description')" />
          <template #actions>
            <v-btn
              href="https://github.com/logue/Pip-BoyA"
              @click.prevent="openNewWin"
            >
              <v-icon left>mdi-github</v-icon>
              Visit Project site
            </v-btn>
            <v-btn
              color="yellow"
              href="https://www.nexusmods.com/fallout76/mods/697"
              @click.prevent="openNewWin"
            >
              <v-icon left>mdi-open-in-new</v-icon>
              Nexus Mods
            </v-btn>
            <v-btn
              v-if="isElectron"
              color="amber"
              href="https://fo76.logue.be/"
              @click.prevent="openNewWin"
            >
              <v-icon left>mdi-open-in-new</v-icon>
              Web Version
            </v-btn>
          </template>
        </v-banner>
        <section class="my-3">
          <h2 class="mb-3">Author</h2>
          <v-card width="480" class="mx-3 my3">
            <div class="d-flex">
              <v-avatar class="ml-0 mt-0" size="128" tile>
                <v-gavatar email="logue@hotmail.co.jp" :size="128" />
              </v-avatar>
              <div>
                <v-card-title>Logue</v-card-title>
                <v-card-subtitle>Developer</v-card-subtitle>
                <v-card-actions class="pb-0">
                  <v-btn
                    icon
                    color="blue-grey"
                    href="http://logue.dev/"
                    @click.prevent="openNewWin"
                  >
                    <v-icon>mdi-home</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="blue"
                    href="https://twitter.com/logue256"
                    @click.prevent="openNewWin"
                  >
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="indigo"
                    href="https://facebook.com/logue256"
                    @click.prevent="openNewWin"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="gray"
                    href="https://github.com/logue"
                    @click.prevent="openNewWin"
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="deep-purple"
                    href="https://steamcommunity.com/id/logue256/"
                    @click.prevent="openNewWin"
                  >
                    <v-icon>mdi-steam</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="deep-orange"
                    href="https://www.reddit.com/user/logue256"
                    @click.prevent="openNewWin"
                  >
                    <v-icon>mdi-reddit</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </section>
        <section class="my-3">
          <h2 class="mb-3">Acknowledgement</h2>
          <ul>
            <li>
              <a
                href="https://www.reddit.com/r/fo76/comments/bmwpx9"
                @click.prevent="openNewWin"
              >
                Mappalachia
              </a>
              - for some marker.
            </li>
            <li>
              <a
                href="https://github.com/dan-parker/fo76edit-scripts"
                @click.prevent="openNewWin"
              >
                fo76edit-scripts
              </a>
              - for export and convert game data.
            </li>
            <li>
              <a
                href="https://www.nexusmods.com/fallout76/mods/783"
                @click.prevent="openNewWin"
              >
                Realistic World Map
              </a>
              - by Fabledx
            </li>
          </ul>
        </section>
        <section class="my-3">
          <h2 class="mb-3">Legal Notice</h2>
          <p class="mx-3 my-3">
            Fallout® 76 Wastelanders © 2021 Bethesda Softworks LLC, a ZeniMax
            Media company. Bethesda, Bethesda Softworks, Bethesda Game Studios,
            ZeniMax, Pip-Boy, Vault-Tec and related logos are registered
            trademarks or trademarks of ZeniMax Media Inc. in the U.S. and/or
            other countries. Fallout, Vault Boy and related logos are trademarks
            or registered trademarks of Bethesda Softworks LLC in the U.S.
            and/or other countries. All Rights Reserved.
          </p>
        </section>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text color="secondary" @click="dialog = false">
          <v-icon left>mdi-close</v-icon>
          {{ $t('close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Gravatar from 'vue-gravatar';
import Nl2br from 'vue-nl2br';
import { openWindow } from '@/assets/Utility';

/**
 * About dialog
 */
@Component({
  components: {
    'v-gavatar': Gravatar,
    nl2br: Nl2br,
  },
})
export default class About extends Vue {
  /** Dialog visibility */
  private dialog = false;
  /** Electron */
  private isElectron = process.env.IS_ELECTRON ?? false;

  /** Open Dialog */
  public open(): void {
    this.dialog = true;
  }
  /** Open External Window */
  public openNewWin(
    e: MouseEvent & { currentTarget: HTMLAnchorElement }
  ): boolean {
    openWindow(e.currentTarget.href, this);
    return false;
  }
}
</script>
