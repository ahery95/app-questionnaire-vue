<template>
<body>
<form>
   <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card table-card">
          <div class="card-body">
            <h5 class="card-title text-center">Questionnaire</h5>
              <div class="form-group">
                <label for="exampleFormControlInput1">Question n°1</label>
                <ul>
                    <!-- <li v-for="(quest, key) in questions" :key="key">{{ quest.question }}</li> -->
                </ul>
                   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Répondez a la question">
              </div>
                  <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Valider</button>
          </div>
        </div>
</div>
</form>
</body>
</template>
<script>
import { questionnaire } from '../assets/question.js'
console.log(questionnaire)
export default {
  name: 'AHQuestion',
  data () {
    return {
      questions: []
    }
  },
  mounted () {
    console.log(this.questions)
  }
}
