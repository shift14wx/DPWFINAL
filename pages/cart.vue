<template>
     <div class="grid" v-if="!rerender">
         
     <vs-row>
         <vs-col>
             <h1 style="text-align:center; margin-top:50px" class="title-font">CART</h1>
         </vs-col>
     </vs-row >
      <vs-row v-for="( prod, i ) in getCart" :key="i">
      <vs-col align="center" >
    <vs-card type="5" style="text-align:center; display:inline-block;">
    <template #title>
      <h3 v-text="prod.title"></h3>
    </template>
    <template #img>
      <img  :src="prod.image" alt="">
    </template>
    <template #text>
      <p>
          {{ prod.description }}
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon @click="deleteItem(prod.id)">
        <i class='bx bx-trash'></i>
      </vs-button>
      <vs-button success @click="addOneMore(prod.id)">
        <i class='bx bx-add-to-queue' ></i>
        <span class="span" v-text="prod.cant" >
        </span>
      </vs-button>

      <vs-button danger icon @click="removeOneMore(prod.id)">
        <i class='bx bx-minus' ></i>
      </vs-button>
       <vs-button success>
        <span class="span">
            total: ${{ totalPorProducto( prod ) }}
        </span>
      </vs-button>
    </template>
  </vs-card>
 
      </vs-col>
    </vs-row>
    <vs-row justify="center">
        <vs-col style="text-align:center; margin-top:10px; margin-bottom: 10px ">
           <h1 class="title-font">total: $ {{total}}</h1>
        </vs-col>
    </vs-row>
     </div>
</template>


<script>

import { mapGetters } from "vuex";

export default {
    data(){
        return{
            rerender: false
        }
    },
    computed:{
        ...mapGetters("mainstore",[
            "getCart"
        ]),
        total(){
           try {
               let total = 0.0;
            this.getCart.forEach(p => {
                total += parseFloat( this.totalPorProducto(p, false) );
            });
            return total.toFixed(2);
           } catch (error) {
               console.log(error);
            return 0.0;     
           } 
        }
    },
    methods:{
        totalPorProducto(prod,fixed = true){
            return fixed ? (prod.cant * prod.price).toFixed(2) : (prod.cant * prod.price);
        },
        addOneMore(id){
            this.$store.commit("mainstore/addCant",id);
            this.rerenderthisui();
        },
        removeOneMore(id){
            this.$store.commit("mainstore/dissCant",id);
            this.rerenderthisui();
        },
        rerenderthisui(){
           this.$store.commit("mainstore/addToCarrito",{});
           this.$store.commit("mainstore/deleteFromCarrito",0);
        },
        deleteItem(id){
            this.$store.commit("mainstore/deleteFromCarrito",id);
        }
    }
}
</script>