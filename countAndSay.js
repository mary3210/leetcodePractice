var countAndSay = function(n) {
    let output = '1';
    if (n === 1){
        return '1';
    }

    function calc(num){
        if ( num == n ){
            return output;
        }

        arr = output.split('');
        let occur = 0;
        let currentNum = arr[0];
        let temp = "";

        for (let i = 0; i < arr.length; i++){
            
            if (currentNum !== arr[i] ){
                temp = temp + occur;
                temp = temp + currentNum;
                occur = 0;
                currentNum = arr[i];
            }
            occur++;
            if (i === arr.length-1){
                temp = temp + occur;
                temp = temp +currentNum;
                occur = 0;
                currentNum = arr[i];
            }  
        }

        output = temp;
        num++;
        return calc(num)
    }

    return calc(1);
};