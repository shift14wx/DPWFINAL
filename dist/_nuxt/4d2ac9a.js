(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1494:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{loadingDone:!1}},methods:{addToCart:function(t){this.$store.commit("mainstore/isAddedMun",!0),this.$store.commit("mainstore/addToCarrito",t)}},watch:{loadingDone:function(){this.loadingDone}},components:{},computed:{products:function(){return this.$store.state.mainstore.products},added:function(){return this.$store.state.mainstore.isAdded}}},r=e(15),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.products?e("vs-card-group",t._l(t.products,(function(n,o){return e("vs-card",{key:o,scopedSlots:t._u([{key:"title",fn:function(){return[e("h3",{staticClass:"text-truncate"},[t._v(t._s(n.title))])]},proxy:!0},{key:"img",fn:function(){return[e("img",{attrs:{src:n.image,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[e("p",[t._v("\n        "+t._s(n.description)+"\n      ")])]},proxy:!0},{key:"interactions",fn:function(){return[e("vs-button",{attrs:{danger:"",icon:"",to:"/cat/?cat="+n.cat}},[e("i",{staticClass:"bx bx-category"})]),t._v(" "),e("vs-button",{attrs:{success:""}},[e("i",{staticClass:"bx bx-money"}),t._v(" "),e("span",[t._v("   "+t._s(n.price))])]),t._v(" "),e("vs-button",{staticClass:"btn-chat",attrs:{shadow:"",primary:""},on:{click:function(e){return t.addToCart(n)}}},[e("i",{staticClass:"bx bx-shopping-bag"}),t._v(" "),e("span",[t._v("+")])])]},proxy:!0}],null,!0)})})),1):t._e()}),[],!1,null,null,null);n.default=component.exports},1495:function(t,n,e){"use strict";e(50);var o={data:function(){return{}},computed:{isShowing:{get:function(){return this.$store.state.mainstore.isAdded},set:function(t){this.$store.commit("mainstore/isAddedMun",t)}}},watch:{isShowing:function(){var t=this;this.isShowing&&setTimeout((function(){t.isShowing=!1}),600)}},mounted:function(){console.log("alert mounted")}},r=e(15),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("vs-alert",{attrs:{closable:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      new item added!\n  ")]},proxy:!0}]),model:{value:t.isShowing,callback:function(n){t.isShowing=n},expression:"isShowing"}},[t._v("\n    the item was added to the current cart \n")])}),[],!1,null,null,null);n.a=component.exports},1496:function(t,n,e){var content=e(1500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("1b7833da",content,!0,{sourceMap:!1})},1499:function(t,n,e){"use strict";e(1496)},1500:function(t,n,e){(n=e(25)(!1)).push([t.i,'.containe CardGroupComponentr{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:55px;color:#35495e;letter-spacing:1px;text-transform:capitalize;margin:25px 0}.subtitle{font-weight:300;font-size:1.1rem;color:#526488;word-spacing:2px;padding-bottom:15px;max-width:600px}.subtitle a{font-weight:500;color:inherit}.links{padding-top:15px;margin-bottom:20px}.content-logos{display:flex;align-items:center;justify-content:center;min-width:500px}.plus{font-size:2.5rem;margin:15px;color:#35495e}.h3{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;margin:10px}',""]),t.exports=n},1503:function(t,n,e){"use strict";e.r(n);var o=e(100),r=e(1494),c=e(1495),l={data:function(){return{}},computed:{title:function(){return this.$store.state.mainstore.store}},components:{navbarComponent:o.default,cardGroupComponent:r.default,alertComponent:c.a}},d=(e(1499),e(15)),component=Object(d.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"center grid"},[n("vs-row",[n("vs-col",[n("alert-component")],1)],1),this._v(" "),n("vs-row",[n("vs-col",{staticStyle:{},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[n("div",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"}},[n("h1",{staticClass:"title-font",staticStyle:{"text-align":"center"}},[this._v(this._s(this.title))])])])],1),this._v(" "),n("vs-row",[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[n("card-group-component")],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CardGroupComponent:e(1494).default})}}]);