
<template>
    <div class="center">
      <vs-button success @click="active=!active">
       Add new Product 
      </vs-button>
      <vs-dialog blur v-model="active">
        <template #header>
          <h4 class="not-margin">
            Welcome to <b>Diary</b>
          </h4>
        </template>

<!--alerrt-->
<vs-dialog width="550px" not-center v-model="showAlert" :not-close="true" prevent-close>
        <template #header>
          <h4 class="not-margin">
            {{titleAlert}}
          </h4>
        </template>


        <div class="con-content">
          <p>
          {{text}}
          </p>
        </div>

        <template #footer>
          <div class="con-footer">
            <vs-button @click="closeAll" transparent>
              Ok
            </vs-button>
          </div>
        </template>
      </vs-dialog>

      <!--End alert-->


        <div class="con-form">
          <vs-input v-model="prod.title" placeholder="title for the new product">
            <template #icon>
             🐮 
            </template>
          </vs-input>
          <vs-input v-model="prod.image" placeholder="image for the new product product">
            <template #icon>
              🖼️
            </template>
          </vs-input>
          <vs-input v-model="prod.description" placeholder="description for the new product product">
            <template #icon>
              📝
            </template>
          </vs-input><vs-input type="number" v-model="prod.price" placeholder="price">
            <template #icon>
              💸
            </template>
          </vs-input>
          <vs-select placeholder="Select" v-model="prod.cat">
             
            <vs-option label="Quesos" value="quesos">
               Quesos 
              </vs-option>
              <vs-option label="Leche" value="leche">
               Leche 
              </vs-option>
          </vs-select>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block @click="insertProduct">
              Insert new Product
            </vs-button>

          </div>
        </template>
      </vs-dialog>
    </div>
  </template>
<script>
  import faker from "faker";

    export default {
      data:() => ({
        active: false,
        showAlert:false,
        text:'',
        titleAlert:'',
        prod:{
          title:"",
          cat:"quesos",
          image: faker.image.image(),
          price:0.0,
          description: ''
        } 
      }),
      methods:{
        closeAll(){
          this.showAlert = false;
          if( this.titleAlert == "Done!" ){
            this.titleAlert = "";
            this.active = false;
            this.prod = {
              title:"",
          cat:"quesos",
          price:0.0,
          image: faker.image.image(),
          description: ''
            };
          }
        },
        insertProduct(){
          if( this.prod.title.length > 0 && this.prod.price > 0.0 && this.prod.description.length > 0 && this.validURL( this.prod.image ) ){
          this.$store.commit("mainstore/insertNewProduct",this.prod);
            this.titleAlert = "Done!";
            this.text = "Done!, the new product was added";
            this.showAlert = true;
          }else{
            this.titleAlert = "Error";
            this.text = "Err all fields are required";
              this.showAlert = true;
          }
        },
        validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
      }
    }
  </script>
<style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
        