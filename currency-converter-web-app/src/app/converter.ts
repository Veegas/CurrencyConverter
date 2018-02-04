export class Converter {

    baseCurrency: string = '';
    baseAmount: number;

    targetCurrency: string = '';
    targetAmount: number;

    constructor(values: Object = {baseCurrency: "USD", targetCurrency: "EUR", baseAmount: 1}) {
        Object.assign(this, values);
    }    
}
