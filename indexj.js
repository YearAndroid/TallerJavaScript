

(function() {
    console.log("hola");


    /* 
        let atributo= document.querySelector('#btn');
        atributo.addEventListener('click',function(){
            alert('En un evento');
        })
     */




    /*   let atr=document.querySelector('#btn');
      atr.addEventListener('click',saludar);

      function saludar(e){
          alert(e.target);
      } */
    //guardar datos
    /* localStorage.setItem('nombre','Maycol');
    let n=localStorage.getItem('nombre'); */

    /* //eliminar ese dato
    localStorage.removeItem('nombre');
 */
    //parametro rest
    /*  function enviarnombre(...idnombre){
         idnombre.forEach(id=>console.log(id));
     }
     enviarnombre("maycol","arauz");
      */

    //destruyendo arrays
    /* let uraccan =["siuna","waslala"];
    let [rs1,rs2]=uraccan;

    alert(rs2);
 */
    //destruy array con rest
    /*       let colore= ["rojo","blanco","negro"];   
        let color1, colorN;
        [color1,... colorN]=colore;
        console.log(colorN);
 */
    //objeto con rest
    /*  let ferreteria ={
     id:1,
     nombre:'maycol',
     dirrecion:'Waslala',
     celular:23232526
     }
     let {id, ... datos}= ferreteria
     console.log(datos); */
    //sintaxis spread
    /*  function iniciarcel(chayomi,samsung,LG){
         console.log(chayomi,samsung,LG);
     }
         let celular=['chayomi','samsung','LG'];
         iniciarcel(...celular); */
    //iife

    /*      (function(){
             console.log('en la funcion');

             let app =(function(){
                 let celid=123;
                 console.log('123');
                 return{};
             })();
         })(); */
    //closures
    /*    let app=(function(){
           let celid=123;
           let getId = function(){
                   return celid;
           };
           return{
               getId: getId
           };
           
       })
       console.log(app.getId()); */
    //la palabra clave this
    /*  let fn= function(){
         console.log(this === window);
     };
     fn();//true

     let o = {
         celid:123,
         getid: function(){
             return this.celid;
         }
     };
     console.log( o.getid()); */
    //call
    /*    let o ={
           celid:123,
           getid: function(){
               return this.celid;
           }
           
       };
       let newcel= {celid: 456};
       console.log(o.getid.call(newcel)); */
    //aplly
    /*   let objet = {
          celid:123,
          getid:function(prefix){
              return prefix + this.celid; 
          }
         
      };
      let newcel = {celid: 45678951};
      console.log(objet.getid.apply(newcel ,['id:'])); */
    //bin
    /* let objet = {
        celid: 123,
        getid: function(){
            return this.celid;
        }
    };
    let newcel = {celid: 456789};
    let newfn= objet.getid.bind(newcel);
    console.log( newfn()); */

    //funciones de flecha
    /* let getid = () => 123;
    console.log(getid()); */

    /* let getid = pref => pref + 1515;
    console.log( getid('id: ')); */
    /* 
                let getid = (pref,suf)=>{
                    return pref + 1515 +suf;

                }
                console.log( getid('id:','!')); */

    /* 
                let multi = (a,b,c) => (a*b*c);

                alert(multi(2,2,2));
     */

    //iterando array

    /*     let abc=[
            {celid: 123 , estilo: 'negro'},
            {celid: 456 , estilo: 'blanco'},
            {celid: 987 , estilo: 'rosa'}
        ];
        abc.forEach(cel => console.log(cel) );
        abc.forEach((cel,index)=>console.log(cel,index)) ;  */
    //filtando array
    /*   let abc=[
          {idcel:123, estilo: 'Arauz'},
          {idcel:321, estilo: 'negro'},
          {idcel:987, estilo: 'blanco'}
      ];
      let convertibles = abc.filter(
          cel => cel.estilo === 'negro'
      );
      console.log(convertibles); */

    //probando array
    /*  let abc = [
         {idcel:123, estilo: 'rojo'},
         {idcel:321, estilo: 'negro'},
         {idcel:987, estilo: 'blanco'}
     ];
     let resultado= abc.every(
         cel => cel.idcel > 0
     );
     console.log(resultado);

     //encontrar primer coincidencia
     let abcd = [
         {idcell:123, estilo: 'rojo'},
         {idcell:321, estilo: 'negro'},
         {idcell:987, estilo: 'blanco'},
         {idcell:1003, estilo: 'RGB'}
     ];
     let cell= abcd.find(
         cell => cell.idcell > 1000
     );
     console.log(cell); */
    /*        let cel = {
               id: 2525,
               estilo: 'blanco'
           };
           console.log(JSON.stringify(cel));
            */
    //convertir array a json
    /* 
                let celid=[
                    {celid: 235},
                    {celid: 586},
                    {celid: 98745}
                ];
                console.log(JSON.stringify(celid)); */
    //convertiendo json
    /* let jsonCel = ´[ 
        { "celid": 123 },
        { "celid": 654 },
        { "celid": 98745 }
        ]´;


    let celid = JSON.parse(jsonCel);
    console.log(celid); */

    //consumiendo con ajax
   /*   const xpr = new XMLHttpRequest();
     xpr.open('get','http://jsonplaceholder.typicode.com/posts')
     xpr.onload = function(){
         if (this.status === 200)
         {
             const respuesta = JSON.parse(this.responseText);
             console.log(respuesta);
         }
     }
     xpr.send(); */
     //consumiendo con fetch    
    /*  fetch('https://jsonplaceholder.typicode.com/todos')
     .then(Response =>Response.json())
     .then(function(json){
         let usu ='';
         json.forEach(function (usuario) {
            usu += '<li>${usuario.title{</li>';
         });
         
         document.getElementById('listar').innerHTML = usu;
     }); */
        //usando async await
    /*     async function leertodos(){
            const resp = fetch('https://jsonplaceholder.typicode.com/todos');
            const datos = await resp.json();
            return datos;
                
            }
            leertodos()
            .then(usuario => console.log(usuario));
       
 */

            //creando una promesa 
        /*     let promesa = new promise(
                function(resolve,reject){
                    setTimeout(resolve,200,'Otro Valor');
                        
                }
            );
 */
            //settlin una promesa 
          /*   let promesa = new promise(
                    function(resolve,reject){
                        setTimeOut(resolve,200,'Otro Valor');

                }
            );
            promesa.then(
                value => console.log('resultados:'+ value),
                error => console.log('rechazado:'+error),
            ); */

     
})();