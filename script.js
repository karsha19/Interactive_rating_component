var ratings = document.querySelectorAll(".noOf");
const button = document.getElementById('btn');
var selection = document.querySelector('.selection');
var thankYou = document.querySelector('.thankYou');
var span = document.getElementById('rating');


    for(var i=0;i<ratings.length;i++)
    {
        document.querySelectorAll(".noOf")[i].addEventListener("click", function()
        {   
            var btn = this.name;
            for (var j = 0; j < ratings.length; j++) 
            {
                if(ratings[j].classList.contains('selected'))
                {
                   ratings[j].classList.remove('selected');
                } 
            }
            this.classList.add('selected');  

            button.addEventListener("click",function()
            {
                selection.style.display = 'none';
                thankYou.style.display = 'flex';
                span.innerHTML = btn;
            });
        });
    }

    