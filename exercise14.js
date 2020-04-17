function changeVocals (str) {
    //code di sini
    var vok = 'aiueoAIUEO'
    var vokpass = 'bjvfpBJVFP'
    var output = ''

    for(i = 0; i < str.length; i++){
        var cek = false
        for(j = 0; j < vok.length-1;j++ ){
            if(str[i] == vok[j]){
                output += vokpass[j]
                cek = true
            }
        }
        if (cek == false){
            output += str[i]
        }
    }
  return output

  }
  
  function reverseWord (str) {
    //code di sini
    var output = ''
    for(i = str.length-1 ; i >= 0 ; i--){
        output += str[i]
    }
    return output
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var output = ''
    for(i = 0 ; i < str.length ; i++){
      if(str[i] == str[i].toLowerCase()){
        output += str[i].toUpperCase()
      }
      else{
        output += str[i].toLowerCase()
      }

    }
    return output
  }
  
  function removeSpaces (str) {
    //code di sini
    var output = ''
    for(i = 0; i < str.length; i++){
        if(str[i] != ' '){
            output += str[i]
        }
    }
    return output
  }
  
  function passwordGenerator (name) {
    //code di sini
    var fokal = changeVocals(name)
    var balik = reverseWord(fokal)
    var decil = setLowerUpperCase(balik)
    var nospace = removeSpaces(decil)
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
    return nospace
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'