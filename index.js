let productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn")

btn[0].onclick = function(){
  productImg.src = "IMG_4916.jpg"
  for (bt of btn){
    bt.classList.remove("active")
  }
  this.classList.add("active")
}
btn[1].onclick = function(){
  productImg.src = "IMG_4914.jpg"
  for (bt of btn){
    bt.classList.remove("active")
  }
  this.classList.add("active")  
}
btn[2].onclick = function(){
  productImg.src = "IMG_4915.jpg"
  for (bt of btn){
    bt.classList.remove("active")
  }
  this.classList.add("active")
}