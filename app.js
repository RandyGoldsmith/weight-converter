    document.getElementById('output').style.visibility = 'hidden';


    document.getElementById('poundsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    
    let lbs = e.target.value;
    
    document.getElementById('getKg').innerHTML = (lbs * 0.45359237).toFixed(2);

    document.getElementById('getOz').innerHTML = (lbs * 16).toFixed(2);

    document.getElementById('getGr').innerHTML = (lbs / 0.0022046).toFixed(2);
    });