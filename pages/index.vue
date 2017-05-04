<template>
  <v-container fluid="fluid">
    <v-row>
      <v-col xs9 class="main_view">
        <h1><img src="../assets/img/cargo_text.png" alt="Cargo"></h1>

        <h2>Sécurisez votre utilisation du téléphone en voiture.</h2>

        <v-row>
          <v-col xs12 md4>
            <v-card>
              <v-card-text>
                <div>
                  <b>Des contrôles accessibles</b><br>

                  De gros boutons pour vous permettre d'effectuer des actions courantes
                  sans lever les yeux de la route.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col xs12 md4>
            <v-card>
              <v-card-text>
                <div>
                  <b>Un contrôle vocal</b><br>

                  Écoutez et répondez à vos messages SMS, Messenger et Whatsapp avec
                  le contrôle vocal.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col xs12 md4>
            <v-card>
              <v-card-text>
                <div>
                  <b>Partage de position</b><br>

                  Partagez votre position avec vos proches lors de longs trajets.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="badges">
          <v-col xs12>
            <img src="../assets/img/google-play-badge.png" alt="Play Store">
          </v-col>
        </v-row>
      </v-col>
      <v-col xs3>
        <img src="../assets/img/screenshot.png" alt="Screenshot">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.main_view {
  padding: 50px;
}

.main_view h1, .main_view h2 {
  color: #fff;
}

.main_view h2 {
  font-size: 30px;
}

.badges {
  margin-top: 20px;
}
</style>
