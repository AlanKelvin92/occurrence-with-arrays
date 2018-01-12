let ocurrences = (maxes, numbers) => {
    numbers.sort((a,b) => a - b);
  
    let result = maxes.map((m) =>{
        let cont = 0;
        for(let n of numbers){
            if(n <= m){
                cont++
            }else{
                break;
            }
        }
        return cont;
    });

    return result;
}