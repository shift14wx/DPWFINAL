<template>
    <div class="center grid">
       <vs-row>
         <vs-col>
    <alert-component/>
         </vs-col>
         </vs-row> 
      <vs-row>
          <vs-col style="margin-top=500px !important" vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <div style="margin-top:50px; margin-bottom:50px">
              <h1 style="text-align: center" class="title-font">{{title}}</h1>
            </div>
          </vs-col>
        </vs-row>
        <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <card-group-component/>
        </vs-col>
      </vs-row> 
    </div>
</template>

<script>
import navbarComponent from "~/components/system/navbar-component";
import cardGroupComponent from "~/components/index/card-group-component";
import CardGroupComponent from '~/components/index/card-group-component.vue';
import alertComponent from "~/components/store/alert";

export default {
  data(){
    return{

    }
  },
  computed:{
    title(){
      return this.$store.state.mainstore.store
    }
  },
  components: {
    navbarComponent,
    cardGroupComponent,
    alertComponent
  }
}
</script>

<style>
.containe
    CardGroupComponentr {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
}
</style>
