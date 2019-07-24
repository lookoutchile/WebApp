import Ocurrences from './ocurrency'

const formatPercent = (string,exist=false)=>{

    
    string = string + ""

    if (exist){
        string = string.replace(".",",") + "%"
        return string;
    }
    string = string.replace(".",",")
    
    var counter = Ocurrences(string,",")
    if (counter > 1){
        string = string.substring(0,string.length-1)
    }
    else if (counter === 1){

        var [first,second] = string.split(',')
        first = first.length !== 0 ? first.replace(/\D/, "")[0]:"0"
        second = second.length !== 0 ? second.replace(/\D/, ""):""
        second = second.length > 3 ? second.substring(0,3):second
        string = first+","+second
        
    }
    else{

        string = string.replace(/\D/, "")
        string = string.length > 1 ? string.substring(1,string.length):string
        
    }

    
    return string ;
}
export default formatPercent