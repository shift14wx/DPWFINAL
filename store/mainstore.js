import storeProducts from "static/dairyitems.json"
import Vue from "vue";
export const state = ()=>({

    store:'the dairy store',
    products:storeProducts.products, 
    isAdded: false,
    cart: []

})


export const mutations = {

    setProducts(state, products){
        state.products = products;
    },
    addToCarrito(state, product){
        let exist = state.cart.findIndex( p => p.id == product.id);
       if( exist > -1 ){
        state.cart[ exist ].cant += 1;
       }else{
        let copyProduct = Object.assign(product);
        copyProduct.cant = 1;
        state.cart.push( copyProduct );
       } 
    },
deleteFromCarrito(state,id){
    if(id > 0){
        let index = state.cart.findIndex( prod => prod.id == id )
        state.cart.splice(index,1);
    }else{
        state.cart.splice(state.cart.length-1,1);
    }
},
    addCant( state, id ){
        let index = state.cart.findIndex(prod => prod.id == id);
        state.cart[index].cant = state.cart[index].cant +1;
    },
    dissCant( state, id ){
        if ( state.cart.find( prod => prod.id == id ).cant > 1) {
            let index = state.cart.findIndex(prod => prod.id == id);
            state.cart[index].cant = state.cart[index].cant-= 1;
        }
    },
    isAddedMun(state, val){
        state.isAdded = val;
    },
    insertNewProduct(state, product){
        product.id = state.products.length + 1;
        state.products.push(product);
    }

};

export const getters = {
    getCart: (state)=>{
        return state.cart
    }
}