const search = document.querySelector('#search');
search.addEventListener('keyup',filterNames);

function filterNames(){
const filtervalue = document.querySelector('#search').value.toUpperCase()

let ul =document.querySelector('#uname');


let li = ul.querySelectorAll('li.collection-item');
console.log(li)

for(let i = 0; i < li.length ; i++){
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
        li[i].style.display = '';
    }else{
        li[i].style.display = 'none';
    }
}
}