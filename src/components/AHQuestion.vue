<template>
<div>
  <div>
    <v-toolbar
      dark
      prominent
      height="100px"
      color="#228B22"
    >
      <v-toolbar-title>Questionnaire</v-toolbar-title>
    </v-toolbar>
  </div>
  <div>
    <v-stepper v-model="stepper" id="AHQuestionnaire">
      <v-stepper-header>   <!-- les numéros (steppers-header) pour savoir le numéro de la question   -->
        <v-stepper-step v-for="(data,index) in myJson.question" :key="data.question"  :complete="stepper > index+1" :step="index+1">
        </v-stepper-step>

      <v-divider></v-divider>
     </v-stepper-header>

    <v-stepper-items>  <!-- Le contenu (questions) présentent dans chaque stepper  -->
      <v-stepper-content v-for="(question,index) in myJson.question" :key="question.question" :step="index+1" >
        <v-card
          class="mb-12"
          color="grey"
          height="230px"
        >
          <v-card-text>
            {{question.texte}}
              <v-checkbox v-bind="reponse.bool" v-for="reponse in question.reponse" :key="reponse.reponse" :label="reponse.reponse" height="0px"></v-checkbox>
          </v-card-text> <!-- les checbox permettant de séléctionner sa réponse gerer grace au questionnaire.json  -->
        </v-card>

        <v-btn v-if="stepper<10"
          color="primary"
          @click="stepper = stepper+1"
        >Valider
        </v-btn>  <!-- bouton permettant de valider ses réponses à la fin  -->

<div v-if="stepper==10" class="text-center">
    <v-dialog
      v-model="alert"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        > Envoyer
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Validation
        </v-card-title>
        <v-card-text>
          Etes-vous sûr d'envoyer vos réponses ?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            to="/"
            color="primary"
            text
            @click="alert = false"
          >
            Oui
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>
  </div>
</template>

<script>

import json from '../assets/questionnaire.json'

export default {
  name: 'AHQuestionnaire',
  data () {
    return {
      myJson: json,
      stepper: 1
    }
  }
  // methods: {
  //   calcul_score () {
  //     this.myJson.question.forEach (question => {
  //      question.reponse.forEach (reponse => {
  //         reponse.bool // user reponse
  //         reponse.true_reponse // vrai reponse
  //         score = 0
  //         if(response.bool === response.true_response){
  //           score = score+1
  //           return score
  //         }

  //       })

  //     });

  //   }
  // }
}

</script>

<style>

</style>
