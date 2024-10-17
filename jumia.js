// Get the menu icon and menu elements
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Add an event listener to the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Function to toggle the menu
function toggleMenu() {
  // Toggle the display of the menu
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}


//menu end//



//function FetchData() {

fetch('https://fakestoreapi.com/products').then((data)=>{
 // console.log(data);
 return data.json();
}).then((completedata)=>{
  //console.log(completedata[1].title);
  let data1="";
  completedata.map((values)=>{
    data1+=`<h2 class="title">PRODUCTS</h2>
        <div class="product">
            <div class="product-info">
                <i class="fas fa-star star-icon"></i>
                <div>
                    <h3 class="product-name">${values.title}</h3>
                    <p class="product-category">${values.category}</p>
                    <p class="product-id">${values.price}</p>
                </div>
            </div>
            <button class="view-button">View product</button>
        </div>
        <hr class="divider">`
  });

  document.getElementById("postBody").innerHTML=data1
  
}).catch((err)=>{
  console.log(err);
});


fetch('https://fakestoreapi.com/products').then((data)=>{
  // console.log(data);
  return data.json();
 }).then((completedata)=>{
   //console.log(completedata[1].title);
   let data2="";
   completedata.map((values)=>{
     data2=`<div class="flex">
            <div class="Television" id="image">
                <img src="${values.image}" alt="Television" width="400" height="400">
                <div class="mt-4">
                    <p class="text-gray-600">SHARE THIS PRODUCT</p>
                    <div class="flex space-x-4 mt-2">
                        <i class="fab fa-facebook fa-2x text-gray-600"></i>
                        <i class="fab fa-twitter fa-2x text-gray-600"></i>
                    </div>
                </div>
            </div>
            <div class="w-1/2 pl-6">
                <div class="flex items-center space-x-2">
                    <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded">Official Store</span>
                    <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">Pay on Delivery</span>
                </div>
                <h1 class="text-2xl font-bold mt-2">${values.title}</h1>
                <p class="text-blue-600 mt-1">Brand: <span class="text-blue-500">DANVOUY</span> | Similar products from Skyrun</p>
                <div class="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mt-4">
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-white-500">Flash Sales</span>
                        <span class="text-sm">Time Left: 17h : 43m : 26s</span>
                    </div>
                    <div class="text-3xl font-bold text-red-500 mt-2">
                       ${values.price} <span class="line-through text-gray-500 text-xl">$15.5</span> <span class="text-green-500 text-xl">-29%</span>
                    </div>
                    <span><p class="text-gray-600 mt-1">25 items left</p>
                    </span><div class="progess-bar">
                        <div class="progess"></div>
                    </div>
                    </div>
                    <p class="text-gray-600 mt-1">+ shipping from ₦ 2,730 to LEKKI-AJAH (SANGOTEDO)</p>
                    <div class="flex items-center mt-2">
                        <div class="flex items-center text-yellow-500">
                            <i class="fas fa-star text-yellow-500"></i>
                            <i class="fas fa-star text-yellow-500"></i>
                            <i class="fas fa-star text-yellow-500"></i>
                            <i class="fas fa-star text-yellow-500"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text-gray-600 ml-2">(11 verified ratings)</p>
                </div>
                <button class="bg-orange-500 text-white text-lg font-bold py-2 px-4 rounded mt-4 w-full"><span><i class="fas fa-shopping-cart"></i></span>
                    ADD TO CART</button>
                <div class="mt-6">
                    <h2 class="text-lg font-bold">PROMOTIONS</h2>
                    <ul class="mt-2 space-y-2">
                        <li class="flex items-center">
                            <img src="jumia (1).png" class="jumia">
                            <p class="ml-2">Call 07006000000 To Order</p>
                        </li>
                        <li class="flex items-center">
                           <img src="jumia (1).png" class="jumia">
                            <p class="ml-2">Need extra money? Loan up to ₦500,000 on the JumiaPay Android app.</p>
                        </li>
                        <li class="flex items-center">
                            <img src="jumia (1).png" class="jumia">
                            <p class="ml-2">Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-lg font-bold">${values.description}</h2>
            
        </div>`
   });
 
   document.getElementById("postHeading").innerHTML=data2
   
 }).catch((err)=>{
   console.log(err);
 });
