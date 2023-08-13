
    let input = document.getElementById('search');

    search.addEventListener('keyup', e =>   {
    let input1 = e.target.value.toLowerCase();

  //  let y = document.getElementsByClassName('h-article');
   let y= document.querySelectorAll('h4.title');

    y.forEach(yi => {
          if(yi.textContent.toLowerCase().includes(input1))
          {
            yi.parentNode.parentNode.parentNode.style.display = 'block';

          }
          else
          {
            yi.parentNode.parentNode.parentNode.style.display = 'none';
            //document.getElementById('msg').style.visibility= "hidden";
          }
    });
});


