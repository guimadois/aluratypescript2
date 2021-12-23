export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(strData: string, strQuantidade: string, strValor: string): Negociacao {
        const exp = /-/g;
        const date = new Date(strData.replace(exp, ','));
        const quantidade = parseInt(strQuantidade);
        const valor = parseFloat(strValor);
        return new Negociacao(date, quantidade, valor);
    }
}