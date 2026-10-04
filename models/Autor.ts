export class Autor {
    public id: number;
    public nome: string;
    public dataNascimento: Date;
    public resumo: string;
    public ativo: boolean;

    constructor(id: number, nome: string, dataNascimento: Date, resumo: string, ativo: boolean) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.resumo = resumo;
        this.ativo = ativo;
    }
}