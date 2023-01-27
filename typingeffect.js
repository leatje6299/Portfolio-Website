var x = 0;
var textEffect = "LEA FEVRIER";
var container = document.getElementById('effect');

function animate()
{
    if(x<textEffect.length)
    {
        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate,100);
    }
}

animate();