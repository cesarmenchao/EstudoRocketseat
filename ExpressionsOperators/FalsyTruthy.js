/*
        FALSY
        Quando o valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)

        false
        0
        -0
        ""
        null
        undefined
        NaN
*/

console.log(0 ? "verdadeiro " : "falso"); // falso

/*
        TRUTHY
        Quando um valorm é considerado true em contextos onde um booleano é obrigatorio (condicionais e loops)]
                
        true 
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
*/

console.log({} ? "verdadeiro" : "falso"); // verdadeiro
