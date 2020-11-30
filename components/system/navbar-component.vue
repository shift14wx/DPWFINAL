  <template>
     <vs-navbar center-collapsed v-model="active">
        <template #left>
          <img src="" alt="">
        </template>
        <vs-navbar-item :active="active == 'Inicio'" id="Inicio" to="/">
          Home 
        </vs-navbar-item>
        <vs-navbar-group>
          Categories 
          <template #items>
            <vs-navbar-item :active="active == 'leche'" to="/cat?cat=leche" id="leche">
            Milk  
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'queso'" to="/cat?cat=queso" id="queso">
             Cheese 
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
        <vs-navbar-item :active="active == 'cart'" id="cart" to="/cart">
         Cart 
        </vs-navbar-item>

        <template #right>
          <vs-button>
            <a href="https://github.com/shift14wx/DPWFINAL">
              <i class='bx bx-github'></i>
              <span>Github</span></a>
          </vs-button>
        </template>
      </vs-navbar> 
  </template>

 <script>
  export default {
    data:() => ({
      active: 'Inicio'
    })
  }
  </script>