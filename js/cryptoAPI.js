class CryptoAPI {
    constructor(){
        this.getCryptoAPI();
    }
    async getCryptoAPI(){
        let data = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCH,XRP,BCH,EOS,LTC,BNB,USDT,XLM,ADA,TRX,XMR,BSV,XTZ,NEO,ETC&tsyms=USD,EUR');
        let dataJson = await data.json();
        return {dataJson}
    }
}