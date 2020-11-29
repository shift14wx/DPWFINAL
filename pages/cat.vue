<template>
     <div class="grid" >
         <vs-row>
         <vs-col>
    <alert-component/>
         </vs-col>
         </vs-row>
     <vs-row>
         <vs-col>
             <h1 style="text-align:center; margin-top:50px" class="title-font">Category {{this.cate}}</h1>
         </vs-col>
     </vs-row>
      <vs-row v-for="( prod, i ) in getCat" :key="i" justify="center" style="text-align:center">
      <vs-col w="4" style="text-align:center; margin-top:10px; margin-bottom: 10px ">
           <vs-card type="3">
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
        <vs-button success>
          <i class='bx bx-money'></i>
          <span> &nbsp; {{ prod.price }}</span>
        </vs-button>
      <vs-button class="btn-chat" shadow primary @click="addToCart(prod)">
          <i class='bx bx-shopping-bag' ></i>
          <span>+</span>
        </vs-button>
    </template>
  </vs-card>
 
      </vs-col>
    </vs-row>
    <vs-row justify="center">
        <vs-col style="text-align:center; margin-top:10px; margin-bottom: 10px ">
           <h1 class="title-font"></h1>
        </vs-col>
    </vs-row>
     </div>
</template>



<script>

import alertComponent from "~/components/store/alert";

export default {
    data(){
        return{
            cat:"",
            cate:""
        }
    },
    components:{
        alertComponent
    },
    computed:{
        getCat:{
            get(){
            return this.$store.state.mainstore.products.filter(p => p.cat == this.cat)
            },
            set(newCat){
                console.log("setting");
                this.cat= newCat;
            }
        }
    },
    mounted(){
      this.cat = this.$route.query.cat
      if(this.cat == "leche"){
            this.cate = "milk";
        }else if(this.cat == "queso"){
            this.cat = "quesos";
            this.cate = "cheese";
       }
    },
    watch:{

    },
   watchQuery(newQuery, oldQuery) {
    this.cat = newQuery.cat;

      if(this.cat == "leche"){
            this.cate = "milk";
        }else if(this.cat == "queso"){
            this.cat = "quesos";
            this.cate = "cheese";
       }
       this.getCat = this.cat;
    },
    methods:{
        addToCart(product){
          this.$store.commit("mainstore/isAddedMun",true);
          this.$store.commit("mainstore/addToCarrito",product);
        }
    } 

}
</script>