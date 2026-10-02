// debugger
// var a
// let y
// // const z
// console.log(a);
// console.log(y);
// console.log(z);


// var a = 10
// let y = 20
// const z=30

// console.log(a);
// console.log(y);
// console.log(z);
// forEach()
// map()
// filter()
// reduce()
// for in
// for of

// let container=document.querySelector(".card1")
// console.log(container.innerHTML);

// const products =async () => {
//     let res = await fetch("https://dummyjson.com/products")
//     let data = await res.json()
//     dataproducts=data.products
//     container.innerHTML=""
//     dataproducts.forEach((product) => {
//         // console.log(product);
//         container.innerHTML += `
//             <div class="card">
//             <img src=${product.thumbnail}
//                 alt="">
//             <div class="card-body">
//                 <h2>${product.title}</h2>
//                 <p>${product.description}</p>
//                 <button>Add to cart</button>
//             </div>
//         </div>
        
//         `
//     })
//     // console.log(data.products[1].title);
    
// }
// products()


// let x=alert("Welcome to my website")
// console.log(x);

// confirm("Are you sure to delete?")

// let x=prompt("Enter your name and age")
// console.log(x);

// let str = "hello world"
// // console.log(str);
// // console.log(str.replace("h","sdf"));

// console.log(str);
// console.log(str.split(" "));

// let text = "5";
// // let padded = text.padEnd(6, "X");
// // console.log(padded);




// let arr = [10, 20, 30, 40]
// console.log(arr);
// console.log(arr.slice(2,3));
// // // arr.push(100, 200)
// // // arr.pop()
// // // arr.unshift(200, 300)
// // // arr.shift()
// // // arr.shift()
// // // console.log(arr);
// // // console.log(arr.slice(0,3));
// // // let newArra=
// // console.log(arr.splice(2,0,"400"));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newArr=fruits.splice(1,0,"dsfss","jsdf",203,34)
// console.log(newArr);
// console.log(fruits);






// const nameAndNumberList = [
//   ['Adarsh', 75],
//   ['Akash', 90],
//   ['Anurag', 9],
// ]

// console.log(nameAndNumberList.flat());

// debugger
// let x = 10
// console.log(x);
// let y = x
// console.log(y);
// y = 20
// console.log(x);

// function createCounter() {
//   let count = 0; // "Enclosed" variable

//    function f2() {
//     count++; // The inner function accesses 'count' from the outer scope
//     return count;
//     };
//     return f2;
// }
// createCounter();
// const counter = createCounter();

// console.log(counter()); // 1
// // console.log(counter()); // 2
// // console.log(counter()); // 3




// function f1(...rest) {
//   console.log(rest);

//   // console.log(abc.name);
//   for (let i = 0; i < rest.length; i++){
//     // console.log(rest[i]);
//   }
  
// }

// // f1("coreXtrime",{
// //   name:"abc"
// // }, 10, 20, 30, 40, 50, 60, 70, )
// let arr=[10,20,30,40,50]
// f1(...arr)

// const fruits = ['apple', 'banana'];
// let newarr = fruits
// console.log([...newarr]);


// let x = 10
// let y = x
// y=20
// console.log(x);
// console.log(y);

// let arr=[10,20,30]
// let newArr = arr
// newArr[3]=50
// console.log(arr);
// console.log(newArr);

// const swiggyapi = async() => {
//   const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//   const data = await res.json()
//   console.log(data);
//   console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.
//     restaurants);
//   swiggy=data.data.cards[4].card.card.gridElements.infoWithStyle.
//     restaurants
//   swiggy.forEach((data) => {
//     // <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${}' alt=""></img>
//     console.log(data);
//   })
// }

// swiggyapi()



// function f1() {
//   let x = 10
  
// }
// f1()

// let h1=document.getElementsByClassName('h1')
// console.log(h1);
// // h1.style.back=
// let newh1=h1.innerText='welcome to coreXtrime'
// console.log(newh1);
// let createElement = document.createElement('h2')
// createElement.innerHTML='kdfkgf fgd fgdfgdfg dfg'
// // createElement.setAttribute('vakuye','fdk')
// let att=createElement.classList='fjsdf dfg dfg dfg'
// console.log(att);
// let div=document.createElement('div')
// console.log(createElement);
// console.log(div);

// function g1() {
  
// }

// let f1=()=>cvbfgh

// let btn = document.querySelector("button")
// let h2=document.querySelector("h2")
// console.log(btn);
// // btn.onclick=function display() {
// //     console.log("skdfdsfdfs");
// // }

// btn.addEventListener("click", (e) => {
//     console.log(e);
//     // h2.style.backgroundColor="red"
//     // h2.style.color="white"
//     // h2.style.fontSize = "30px"
//     // h2.classList="a b c"
//    let div= document.createElement("div")
//     console.log(div);
    
// },false)
// let ul=document.querySelector("ul")
// console.log(ul.innerText);

// console.log(ul);
// let child = ul.firstElementChild
// // child.addEventListener("")
// let next = child.nextElementSibling
// console.log(next);
// next.previousElementSibling
// console.log(child);

// let h2=document.createElement("h2")
// h2.innerHTML="skjdfsldf"
// console.log(h2);
// document.body.appendChild(h2)

let p=document.querySelector("p")
// p.className="a b c dsfsd sdf "
// p.className="ds "
p.classList.add('sdf')
p.classList.add('fdskf')
p.classList.remove('fdskf')
p.classList.toggle('fdskf')
p.classList.toggle('fdskf')
p.classList.toggle('fdskf')
console.log(p);