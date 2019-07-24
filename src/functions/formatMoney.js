import Ocurrences from './ocurrency'
const formatMoney = (string)=>{

    string = string + ""
    if (string==="undefined"){
        return ""
    }
    string = string.split(".").join("")
    string = Ocurrences(string,"$") === 1 ? string.substring(1,string.length):string 
    string = string.replace(/\D/, "");

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
    aux = "$" + aux.split("").reverse().join("")
    return aux;
}
export default formatMoney