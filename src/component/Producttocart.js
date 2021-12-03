import React , {useState} from 'react'

// const productData =[
//   {name:"Shoe",cost:"Rs 300", 
//   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURQlG1UIJg9KZGGChENIVDrFt1o8tQ_VPBw&usqp=CAU"},
//   {name:"Shirt",cost:"Rs 300", 
//   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEtk0fKOeyW9ns49RYQKp_CtN6DFwAE8rFA&usqp=CAU"},
//   {name:"Top",cost:"Rs 300", 
//   image:"https://i.pinimg.com/originals/bd/57/fa/bd57fadda9ff54bc033c81fb13209e66.jpg"},
//   {name:"Earring",cost:"Rs 300", 
//   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hQI0RMd-QRReTdKYTQsrl2JZEaclHanE6g&usqp=CAU"},
  
// ] 

function Producttocart() {

  const [products] = useState([
    { 
    name:"Shoe",cost:"Rs 300", 
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURQlG1UIJg9KZGGChENIVDrFt1o8tQ_VPBw&usqp=CAU"},
  {name:"Shirt",cost:"Rs 300", 
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEtk0fKOeyW9ns49RYQKp_CtN6DFwAE8rFA&usqp=CAU"},
  {name:"Top",cost:"Rs 300", 
  image:"https://i.pinimg.com/originals/bd/57/fa/bd57fadda9ff54bc033c81fb13209e66.jpg"}
  ]);
  const [cart, setCart] = useState([])

const addToCart = (product)=>{
  setCart([...cart,{...product}])
}

const removeCart = (removeProduct)=>{
 setCart(cart.filter((product) => product !== removeProduct))
}

  const productList = products.map((product)=>{
    return <> 
    <div class="content">
      <img src={product.image}/>
        <h3>{product.name}</h3>
        <h6>{product.cost}</h6>
        
        <button class="buy-1" onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
        </>
  })

  const cartList = cart.length ? (
  cart.map((product)=>{
    return <> 
    <div class="content">
      <img src={product.image}/>
        <h3>{product.name}</h3>
        <h6>{product.cost}</h6>
        
        <button class="buy-1" onClick={()=>removeCart(product)}>Remove</button>
        </div>
        </>
  })
  ) : (
    <h1>No data found</h1>
  );

  return (
    <React.Fragment>
      <br/>
<h1 style={{textAlign:"center", color:"#fff"}}>2.Task to add cart </h1>
      <br/>
<h3 style={{textAlign:"center"}}>Items</h3> 
<div class="gallery">
      
        
        {productList}

     

    </div>

    <h3 style={{textAlign:"center"}}>Cart Items</h3> 
    <div class="gallery">
      
        
     

      {cartList}

  </div>
    </React.Fragment>
  )
}

export default Producttocart
