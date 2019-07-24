const formatNumber = (string)=>{
    string = string + ""
    if (string==="undefined"){
        return ""
    }
    string = string.split(".").join("").replace(/\D/, "");

    let aux =  ""
    let cont = 0
    for (let index = string.length - 1; index >=  0; index--) {
        aux = aux + string[index]
        cont++
        if(cont === 3 & index !== 0){
            aux = aux + "."
            cont = 0
        }
    }
    aux = aux.split("").reverse().join("")
    return aux;
}
export default formatNumber