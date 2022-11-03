
export const AbrirMenu = ()=> { 
    let classBody = String(document.querySelector("body").classList) 

    if(window.innerWidth > 991){
      if(!classBody.includes('sidebar-collapse')){ 
        classBody.split(" ").forEach(item=> (item.length > 0 )? document.querySelector("body").classList.remove(item) : '' )
        document.querySelector("body").classList.add("sidebar-collapse")
      }else{ 
        document.querySelector("body").classList.remove("sidebar-collapse")
      }
    }else{
      if(!classBody.includes('sidebar-open') ){ 
        classBody.split(" ").forEach(item=> (item.length > 0 )? document.querySelector("body").classList.remove(item) : '' )
        document.querySelector("body").classList.add("sidebar-open")
      }else{ 
        document.querySelector("body").classList.remove("sidebar-open")
      }
    }
  }
