const formatRut = (string)=>{

    string = string + ""
    var exist_k = false

    if (string==="undefined"){
        return ""
    }

    if(string.length === 13){
        return string.substring(0,12)
    }

    string = string.split(".").join("")

    const posSlash = string.indexOf("-")
    const posK = string.indexOf("k")

    if(posSlash  !== -1){
        string = string.split("-").join("");
    }   
    if(posK  === -1){
        string = string.replace(/\D/, "");
    }
    else{
        if(posK !== -1 && posK < posSlash )
        {
            string = string.replace(/\D/, "");
        }
        else{
            exist_k = true
        }

    }

    if (string.length < 2){
        return string
    }

    

    let aux =  ""
    let cont = 0
    let DV = string[string.length-1]
    let rut = string.substring(0,string.length-1)


    for (let index = rut.length - 1; index >=  0; index--) {

        aux = aux + rut[index]
        cont++
        if(cont === 3 & index !== 0){
            aux = aux + "."
            cont = 0
        }
    }
    aux = aux.split("").reverse().join("")
    aux = aux + "-" + DV
    
    return aux;
}
export default formatRut