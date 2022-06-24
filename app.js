const app = Vue.createApp({

   data() {
    return {
      title: 'hello',
      products:[
        {
          title: "computer",
          number: 6 ,
        },
        {
          title: "tablet",
          number: 8,
        },
        {
          title: "phone",
          number: 5,
        },
        {
          title: "mouse",
          number: 9,
        },
        {
          title: "monitor",
          number: 0,
        }
        ],
     
        basket:[]
      }
   },
       
       methods:{
        arttır: function(){
          this.number++;
        }
       ,
       addtoBasket(product){
        console.log("product", product)
        //find fonskiyonu ile productı bulup varsa numberi arttır yoksa push et 
      
      this.products.find(p => p.title == product.title).number--

      var basket = this.basket.find(b => b.title == product.title)
      if(basket){
        basket.number++
      }
      else{
        var newProduct = {
          title : product.title,
          number: 1
        }
        this.basket.push(newProduct)
      }

       },
       removeFromBasket(product,i) {
        console.log("product", product)

        var removeProduct = this.basket.find(b => b.title == product.title)
        removeProduct.number--

        if(removeProduct.number <=0 ){
         this.basket.splice(i, 1)
        }

        var product = this.products.find(p => p.title == product.title)
        
        if(product){
          product.number++
        }
        else{
         var newProduct={
          title: basket.title,
          number:1
        
         }
         this.product.push(newProduct)
        }
     }         
    }
})
app.mount('#app')
