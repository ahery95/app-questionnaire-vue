<template>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Connexion</h5>
                            <form class="form-signin">
                                <!-- formulaire de connexion -->
                                <div class="form-label-group">
                                    <input type="text" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                                    <label for="inputEmail">Prenom</label>
                                </div>
                                <div class="form-label-group">
                                    <input type="text" id="inputPassword" class="form-control" placeholder="Password" required>
                                    <label for="inputPassword">Nom</label>
                                </div>
                                <div class="form-label-group">
                                    <input type="text" id="inputPassword" class="form-control" placeholder="Password" required>
                                    <label for="inputPassword">Nom de votre société</label>
                                </div>
                                <button v-on:click="redirect" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Commencer le test</button>
                                <hr class="my-4">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
<script>
    import routeur from '../router/index.js'
    export default {
        methods: {
            redirect() {
                routeur.push({
                        name: 'Question' //appel de la page du questionnaire suite à la connexion
                    }) 
            }
        }
    }
</script>