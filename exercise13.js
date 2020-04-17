function sorting(arrNumber) {
    // code di sini
    for(i =0; i < arrNumber.length; i++){
        for(j = 0; j < arrNumber.length; j++){
            if(arrNumber[j] > arrNumber[j+1]){
                var temp = arrNumber[j+1]
                arrNumber[j+1] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    return arrNumber
  }

  
  function getTotal(arrNumber) {
    // code di sini
    var angkaBesar = arrNumber[arrNumber.length -1]
    var hitung = 0

    for(i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] == angkaBesar){
            hitung++
        }
    }
    if(arrNumber == 0){
        return "''"
    }else{
        return 'angka paling besar adalah '+ angkaBesar +' dan jumlah kemunculan sebanyak '+hitung + ' kali'
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''

  console.log(mostFrequentLargestNumbers([100, 25, 25, 101, 101, 100]))