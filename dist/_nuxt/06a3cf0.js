(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,o){"use strict";o.r(t);o(197),o(200),o(135),o(34),o(46);var n=o(28),r=o.n(n),c={data:function(){return{active:!1,showAlert:!1,text:"",titleAlert:"",prod:{title:"",cat:"quesos",image:r.a.image.image(),price:0,description:""}}},methods:{closeAll:function(){this.showAlert=!1,"Done!"==this.titleAlert&&(this.titleAlert="",this.active=!1,this.prod={title:"",cat:"quesos",price:0,image:r.a.image.image(),description:""})},insertProduct:function(){this.prod.title.length>0&&this.prod.price>0&&this.prod.description.length>0&&this.validURL(this.prod.image)?(this.$store.commit("mainstore/insertNewProduct",this.prod),this.titleAlert="Done!",this.text="Done!, the new product was added",this.showAlert=!0):(this.titleAlert="Error",this.text="Err all fields are required",this.showAlert=!0)},validURL:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}}},l=(o(1478),o(15)),d={data:function(){return{active:"Inicio"}},components:{formDialog:Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"center"},[o("vs-button",{attrs:{success:""},on:{click:function(t){e.active=!e.active}}},[e._v("\n       Add new Product \n      ")]),e._v(" "),o("vs-dialog",{attrs:{blur:""},scopedSlots:e._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[e._v("\n            Welcome to "),o("b",[e._v("Diary")])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"footer-dialog"},[o("vs-button",{attrs:{block:""},on:{click:e.insertProduct}},[e._v("\n              Insert new Product\n            ")])],1)]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._v(" "),o("vs-dialog",{attrs:{width:"550px","not-center":"","not-close":!0,"prevent-close":""},scopedSlots:e._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[e._v("\n            "+e._s(e.titleAlert)+"\n          ")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:e.closeAll}},[e._v("\n              Ok\n            ")])],1)]},proxy:!0}]),model:{value:e.showAlert,callback:function(t){e.showAlert=t},expression:"showAlert"}},[e._v(" "),o("div",{staticClass:"con-content"},[o("p",[e._v("\n          "+e._s(e.text)+"\n          ")])])]),e._v(" "),o("div",{staticClass:"con-form"},[o("vs-input",{attrs:{placeholder:"title for the new product"},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v("\n             🐮 \n            ")]},proxy:!0}]),model:{value:e.prod.title,callback:function(t){e.$set(e.prod,"title",t)},expression:"prod.title"}}),e._v(" "),o("vs-input",{attrs:{placeholder:"image for the new product product"},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v("\n              🖼️\n            ")]},proxy:!0}]),model:{value:e.prod.image,callback:function(t){e.$set(e.prod,"image",t)},expression:"prod.image"}}),e._v(" "),o("vs-input",{attrs:{placeholder:"description for the new product product"},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v("\n              📝\n            ")]},proxy:!0}]),model:{value:e.prod.description,callback:function(t){e.$set(e.prod,"description",t)},expression:"prod.description"}}),o("vs-input",{attrs:{type:"number",placeholder:"price"},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v("\n              💸\n            ")]},proxy:!0}]),model:{value:e.prod.price,callback:function(t){e.$set(e.prod,"price",t)},expression:"prod.price"}}),e._v(" "),o("vs-select",{attrs:{placeholder:"Select"},model:{value:e.prod.cat,callback:function(t){e.$set(e.prod,"cat",t)},expression:"prod.cat"}},[o("vs-option",{attrs:{label:"Quesos",value:"quesos"}},[e._v("\n               Quesos \n              ")]),e._v(" "),o("vs-option",{attrs:{label:"Leche",value:"leche"}},[e._v("\n               Leche \n              ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}},f=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vs-navbar",{attrs:{"center-collapsed":""},scopedSlots:e._u([{key:"left",fn:function(){return[o("img",{attrs:{src:"",alt:""}})]},proxy:!0},{key:"right",fn:function(){return[o("form-dialog"),e._v(" "),o("vs-button",[o("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"https://github.com/shift14wx/DPWFINAL",target:"_blank"}},[o("i",{staticClass:"bx bx-github"}),e._v(" "),o("span",[e._v("Github")])])])]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._v(" "),o("vs-navbar-item",{attrs:{active:"Inicio"==e.active,id:"Inicio",to:"/"}},[e._v("\n     Home \n   ")]),e._v(" "),o("vs-navbar-group",{scopedSlots:e._u([{key:"items",fn:function(){return[o("vs-navbar-item",{attrs:{active:"leche"==e.active,to:"/cat?cat=leche",id:"leche"}},[e._v("\n       Milk  \n       ")]),e._v(" "),o("vs-navbar-item",{attrs:{active:"queso"==e.active,to:"/cat?cat=queso",id:"queso"}},[e._v("\n        Cheese \n       ")])]},proxy:!0}])},[e._v("\n     Categories \n     ")]),e._v(" "),o("vs-navbar-item",{attrs:{active:"cart"==e.active,id:"cart",to:"/cart"}},[e._v("\n    Cart \n   ")])],1)}),[],!1,null,null,null);t.default=f.exports},103:function(e,t,o){"use strict";var n=o(0),r=o(147),c=o.n(r);n.default.use(c.a)},104:function(e,t,o){"use strict";var n=o(0),r=o(148),c=o.n(r);n.default.use(c.a,{iconType:"MaterialDesign"})},105:function(e,t,o){"use strict";var n=o(28),r=o.n(n);o(0).default.use(r.a)},141:function(e,t,o){var content=o(1479);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("7ebe03ac",content,!0,{sourceMap:!1})},142:function(e,t,o){var content=o(1489);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("56b15182",content,!0,{sourceMap:!1})},146:function(e){e.exports=JSON.parse('{"products":[{"id":0,"cat":"quesos","title":"Queso fresco","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":0.25},{"id":1,"cat":"leche","title":"Leche Entera","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":1.26},{"id":2,"cat":"quesos","title":"Queso duro blando","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":1.25},{"id":3,"cat":"leche","title":"Leche fresca","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":6.25},{"id":4,"cat":"leche","title":"leche blanca","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":3.25},{"id":5,"cat":"quesos","title":"Queso duro","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":5.25},{"id":6,"cat":"leche","title":"Leche pura","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":3.15},{"id":7,"cat":"quesos","title":"Queso amarillo","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":2.55},{"id":8,"cat":"quesos","title":"Queso blanco","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":1.25},{"id":9,"cat":"quesos","title":"Queso azul","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":0.99},{"id":10,"cat":"quesos","title":"Queso rojo","image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Queso_fresco.JPG","description":"El queso fresco o queso blanco es un tipo de queso blando","price":0.1}]}')},1478:function(e,t,o){"use strict";o(141)},1479:function(e,t,o){(t=o(25)(!1)).push([e.i,".not-margin{margin:0;font-weight:400;padding:10px}.con-form{width:100%}.con-form .flex{display:flex;align-items:center;justify-content:space-between}.con-form .flex a{font-size:.8rem;opacity:.7}.con-form .flex a:hover{opacity:1}.con-form .vs-checkbox-label{font-size:.8rem}.con-form .vs-input-content{margin:10px 0;width:100%}.con-form .vs-input-content .vs-input{width:100%}.footer-dialog{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer-dialog .new{margin:20px 0 0;padding:0;font-size:.7rem}.footer-dialog .new a{color:rgba(var(--vs-primary),1)!important;margin-left:6px}.footer-dialog .new a:hover{text-decoration:underline}.footer-dialog .vs-button{margin:0}",""]),e.exports=t},1488:function(e,t,o){"use strict";o(142)},1489:function(e,t,o){(t=o(25)(!1)).push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),e.exports=t},1490:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return r})),o.d(t,"mutations",(function(){return c})),o.d(t,"getters",(function(){return l}));o(1491),o(1492),o(1493);var n=o(146),r=function(){return{store:"the dairy store",products:n.products,isAdded:!1,cart:[]}},c={setProducts:function(e,t){e.products=t},addToCarrito:function(e,t){var o=e.cart.findIndex((function(p){return p.id==t.id}));if(o>-1)e.cart[o].cant+=1;else{var n=Object.assign(t);n.cant=1,e.cart.push(n)}},deleteFromCarrito:function(e,t){if(t>0){var o=e.cart.findIndex((function(e){return e.id==t}));e.cart.splice(o,1)}else e.cart.splice(e.cart.length-1,1)},addCant:function(e,t){var o=e.cart.findIndex((function(e){return e.id==t}));e.cart[o].cant=e.cart[o].cant+1},dissCant:function(e,t){if(e.cart.find((function(e){return e.id==t})).cant>1){var o=e.cart.findIndex((function(e){return e.id==t}));e.cart[o].cant=e.cart[o].cant-=1}},isAddedMun:function(e,t){e.isAdded=t},insertNewProduct:function(e,t){t.id=e.products.length+1,e.products.push(t)}},l={getCart:function(e){return e.cart}}},150:function(e,t,o){"use strict";var n=o(100),r=(o(1480),{data:function(){return{}},components:{navbarComponent:n.default}}),c=(o(1488),o(15)),component=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("navbar-component"),this._v(" "),t("h1",[this._v("why")]),this._v(" "),t("Nuxt"),this._v(" "),t("vue-fab",{attrs:{mainBtnColor:"#3599DB",icon:"shopping_cart",title:"title"}})],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{NavbarComponent:o(100).default})},152:function(e,t,o){o(153),e.exports=o(154)},195:function(e,t,o){var content=o(196);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("d8b49050",content,!0,{sourceMap:!1})},196:function(e,t,o){(t=o(25)(!1)).push([e.i,'.title-font{font-family:"Pacifico",cursive}',""]),e.exports=t}},[[152,5,1,6]]]);