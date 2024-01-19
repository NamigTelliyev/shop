const form=document.getElementById("form");
const inputOne=document.getElementById("inpOne");
const inputTwo=document.getElementById("inpTwo");
const inputThree=document.getElementById("inpThree");
const inputFour=document.getElementById("inpFour");

function myForm(e){
    e.preventDefault()
    axios.post("https://655c846525b76d9884fd70e4.mockapi.io/products",{
        title:inputOne.value,
        name:inputTwo.value,
        price:inputThree.value,
        image:inputFour.value,
    })
    .then(res=>{
        console.log(res);
        form.reset();
    })
}
form.addEventListener("submit",myForm)



const products=document.getElementById("products");

function getProducts(){
    axios.get("https://655c846525b76d9884fd70e4.mockapi.io/products")
    .then(res=>{
        data=res.data;
        db=data;
        let box
    })
}

