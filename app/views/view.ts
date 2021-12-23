export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor); 
        if (elemento) {
            this.elemento = elemento as HTMLElement;
            if (escapar) {
                this.escapar = escapar;
            }
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM!`);
        }
    }
 
    protected abstract template(model: T): string;
    
    public update(model: T): void {
        let template = this.template(model);

        if (this.escapar) {
            template = template //
                        .replace('/<script>[\s\S]*?<\/script>', '');
        }
        this.elemento.innerHTML = template;
    }
}