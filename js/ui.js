class UI {
    constructor(){
        this.printCryptoCurr();
    }
    printCryptoCurr(){
        let cryptoCurrencies = cryptoAPI.getCryptoAPI();
        cryptoCurrencies.then(data => {
            return data.dataJson;
        }).then(data => {
            let a = data;
            console.log(a);
            let cryptoNames = [];
            let output = '';
            for (let item in a) {
                console.log(typeof item.USD)
                cryptoNames.push(item);
            };

            cryptoNames.forEach(el => {
                let pattern = `<option value="${el}">${el}</option>`;
                output += pattern;
            })
            setTimeout(function(){
                let target = document.querySelector('.dropdown-content ');
                target.innerHTML = output;
                console.log(output);
                console.log('111');
            }, 5000)
            

        })
        
    }

    
}