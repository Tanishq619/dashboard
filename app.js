const color1=document.querySelector('.color-1')
const color2=document.querySelector('.color-2')
const color3=document.querySelector('.color-3')
const listItems=document.querySelector(' .centre-list-items')
const sideBar=document.querySelector('.sidebar')

color1.addEventListener('click',()=>{
    sideBar.className="sidebar"
listItems='centre-list-items centre-list-items'
})

color2.addEventListener('click',()=>{
    sideBar.className="sidebar sidebar-night"
    listItems.className='centre-list-items centre-list-items-night'
})

color3.addEventListener('click',()=>{
    sideBar.className="sidebar sidebar-light"
    listItems='centre-list-items centre-list-items-light'
})