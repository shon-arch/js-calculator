function operate(a,b,o){
    let ans = 0; 
    switch(o){
        case '+' : ans = a+b; 
        break; 
        case '-' : ans = a-b; 
        break; 
        case '*' : ans = a*b; 
        break; 
        case '/' : ans = a/b; 
        break; 
    }
    return ans; 
}

