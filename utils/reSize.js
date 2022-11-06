
export const AbrirMenu = ()=> { 
    let classBody = String(document.querySelector("body").classList) 

    if(window.innerWidth > 991){
      classBody.split(" ").forEach(item=> (item.length > 0 && item === 'sidebar-open' )? document.querySelector("body").classList.remove(item) : '' )
      document.querySelector("body").classList.toggle("sidebar-collapse")

    }else{
      classBody.split(" ").forEach(item=> (item.length > 0 && item === 'sidebar-collapse' )? document.querySelector("body").classList.remove(item) : '' )
      document.querySelector("body").classList.toggle("sidebar-open")

    }
  }
