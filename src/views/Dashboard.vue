<!--
@Date:   2021-03-29T18:09:05+01:00
@Last modified time: 2021-04-20T12:38:38+01:00
-->

<template>
<div class="dashboard">

  <b-container class="container" fluid>
    <div>
      <h3 align="center" class="welcome">Welcome to the College Index</h3>
      <b-card-group deck class="cards">
        <!-- courses card displaying image and 2 buttons -->
        <b-card class="shadow p-3 mb-5 bg-white rounded" title="Courses" img-src="/images/teaching.png" img-alt="Image" img-top>
          <b-card-text>
            This will direct you to the create <br> course form or the courses index.
            <br>
            <div class="text-center">
              <!-- button linking to courses create form -->
              <b-button variant="outline">
                <router-link :to="{ name: 'courses_create'}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </router-link>
              </b-button>
              <!-- button linking to courses index -->
              <b-button variant="outline">
                <router-link :to="{ name: 'courses_index'}"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></router-link>
              </b-button>
            </div>
          </b-card-text>
        </b-card>
        <!-- lecturers card displaying image and 2 buttons -->
        <b-card class="shadow p-3 mb-5 bg-white rounded" title="Lecturers" img-src="/images/people.png" img-alt="Image" img-top>
          <b-card-text>
            This will direct you to the create lecturer form or the lecturers index.
            <br>
            <div class="text-center">
              <!-- button linking to lecturers create form -->
              <b-button variant="outline">
                <router-link :to="{ name: 'lecturers_create'}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </router-link>
                <!-- button linking to lecturers index -->
              </b-button>
              <b-button variant="outline">
                <router-link :to="{ name: 'lecturers_index'}"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></router-link>
              </b-button>
            </div>
          </b-card-text>
        </b-card>
        <!-- enrolmets card displaying image and 2 buttons -->
        <b-card class="shadow p-3 mb-5 bg-white rounded enrol" title="Enrolments" img-src="/images/book.png" img-alt="Image" img-top>
          <b-card-text>
            This will direct you to the create enrolmet form or the enrolments index.
            <br>
            <div class="text-center">
              <!-- button linking to enrolments create -->
              <b-button variant="outline">
                <router-link :to="{ name: 'enrolments_create'}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </router-link>
              </b-button>
              <!-- button linking to enrolments create -->
              <b-button variant="outline">
                <router-link :to="{ name: 'enrolments_index'}"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg></router-link>
              </b-button>
            </div>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </b-container>
</div>
</template>

<script>
// creates local registration of component
export default {
  name: 'Dashboard',
  components: {},
  data() {

  },
  mounted() {},
}
</script>

<!-- style elements -->
<style>
.cards {
  margin-top: 40px;
  box-shadow: 20px !important;
}

.welcome {
  margin-top: 40px;
}
</style>
