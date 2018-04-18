window.addEventListener('load', function(e){
   var inp = document.querySelectorAll('.check');
   var btn = document.querySelector('.btn');
    
    btn.addEventListener('click', function (e){    

        for(var i = 0;i < inp.length;i++){  
                    
            if(inp[i].value == ""){
                e.preventDefault();    
                inp[i].classList.add('err');
            
            }
        }    
    
    })
    for(var i = 0;i < inp.length;i++){
        inp[i].addEventListener('input', function(e){
            if(this.classList.contains('err')){
                this.classList.remove('err');
            }
        })
    }

});
