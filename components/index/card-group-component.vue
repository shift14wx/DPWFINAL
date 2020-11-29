<template>
      <vs-card-group v-if="products" >
         
    <vs-card v-for="(product, index) in products" :key="index">
      <template #title>
        <h3 class="text-truncate">{{product.title}}</h3>
      </template>
      <template #img>
        <img :src="product.image" alt="">
      </template>
      <template #text>
        <p>
          {{product.description}}
        </p>
      </template>
      
     <template #interactions>
        <vs-button danger icon :to="{path:'/cat?cat='+product.cat}">
          <i class='bx bx-category'></i>
        </vs-button>
        <vs-button success>
          <i class='bx bx-money'></i>
          <span> &nbsp; {{ product.price }}</span>
        </vs-button>
        <vs-button class="btn-chat" shadow primary @click="addToCart(product)">
          <i class='bx bx-shopping-bag' ></i>
          <span>+</span>
        </vs-button>
      </template> 
    </vs-card>
  </vs-card-group>
</template>

<script>
export default {
    data(){
        return{
            loadingDone:false
        }
    },
    methods:{
        addToCart(product){
          this.$store.commit("mainstore/isAddedMun",true);
          this.$store.commit("mainstore/addToCarrito",product);
        }
    },
    watch:{
      loadingDone:function (){
        if(this.loadingDone){
        }
      }
    },
    components:{
    },
    computed:{
      products(){
        return this.$store.state.mainstore.products
      },
      added(){
        return this.$store.state.mainstore.isAdded
      }
    }
}
</script>