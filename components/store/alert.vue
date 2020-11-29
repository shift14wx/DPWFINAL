<template>
    <vs-alert closable v-model="isShowing">
      <template #title>
          new item added!
      </template>
        the item was added to the current cart 
    </vs-alert>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    computed:{
        isShowing:{
            get(){
                return this.$store.state.mainstore.isAdded
            },
            set(newVal){
                this.$store.commit("mainstore/isAddedMun",newVal);
            }
        }
    },
    watch:{
        isShowing:function () {
            if(this.isShowing){
                setTimeout(() => {
                    this.isShowing = false;
                }, 600);    
            }
        }
    },
    mounted(){
        console.log("alert mounted");
    }
}
</script>