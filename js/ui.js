class UI {
    constructor(){
        this.printCryptoCurr();
    }
    printCryptoCurr(){
        let cryptoCurrencies = cryptoAPI.getCryptoAPI();
        cryptoCurrencies.then(data => {
            return data.dataJson;
        }).then(data => {
            return data.json();
        }).then(data => {
            console.log(data);
        })
        
    }

    
}