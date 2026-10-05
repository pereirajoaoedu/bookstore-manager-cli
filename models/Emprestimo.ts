export class Emprestimo {
    public id: number;
    public idCliente: number;
    public nomeCliente: string;
    public idLivro: number;
    public tituloLivro: string;
    public dataEmprestimo: Date | null;
    public dataDevolucao: Date | null;
    public quantidade: number;

    constructor(id: number, idCliente: number, nomeCliente: string, idLivro: number, tituloLivro: string, dataEmprestimo: Date | null, dataDevolucao: Date | null, quantidade: number) {
        this.id = id;
        this.idCliente = idCliente;
        this.nomeCliente = nomeCliente;
        this.idLivro = idLivro;
        this.tituloLivro = tituloLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.quantidade = quantidade;
    }
}