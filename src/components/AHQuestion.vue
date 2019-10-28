<template>
<div>
<form>
   <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card table-card">
          <div class="card-body">
            <h5 class="card-title text-center">Questionnaire</h5>
              <div class="form-group">
                <label for="exampleFormControlInput1">Question n°1</label>
                <ul>
                    <!-- <text v-model="questions" class="space-control"></text> -->
                    <h4  v-on:click.stop="next">{{questions.question}}</h4>
                </ul>
                   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Répondez a la question">
              </div>
                  <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">question suivante</button>
          </div>
        </div>
</div>
</form>
</div>
</template>
<script>
import { questions } from '../assets/question.js'
export default {
  name: 'AHQuestion',
  data () {
    var tailletableau = questions.length
    var random = Math.floor(Math.random() * (tailletableau))
    return {
      questions: questions[random]
    }
  },
  methods: {
    next () {
      var tailletableau = questions.length
      var random = Math.floor(Math.random() * (tailletableau))
      var result = questions[random]
      var result2 = result.question
      console.log(result2)
      return {
        result2
      }
    }
  }
}
</script>
