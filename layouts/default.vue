<template>
  <div class="container">
    <navbar-component/>
    <h1>why</h1>
    <Nuxt />
<vue-fab mainBtnColor="#3599DB" icon="menu" title="title">
<fab-item :color="'#1BDD47'" @clickItem="irA('/')" :idx="0" title="Home" icon="home" />
<fab-item :color="'#1BDD47'" @clickItem="irA('/cart')" :idx="3" title="Go to cart" icon="shopping_cart" />
<fab-item  :color="'#1BDD47'" @clickItem="irA('/cat?cat=leche')" :idx="1" title="Go to milk category" icon="call_missed_outgoing" />
<fab-item  :color="'#1BDD47'" @clickItem="irA('/cat?cat=quesos')" :idx="2" title="Go to queso category" icon="call_missed_outgoing" />
</vue-fab>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>

import navbarComponent from "~/components/system/navbar-component";
import 'boxicons/css/boxicons.min.css'
export default {
  data(){
    return {

    }
  },
 components:{
  navbarComponent
    },
    methods:{
      irA(goto){
        console.log("dosnt go");
        this.$router.push(goto)
      }
    }
  
  }
</script>