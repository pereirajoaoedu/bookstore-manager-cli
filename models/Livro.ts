export class Livro {
    public id: number;
    public titulo: string;
    public idAutor: number;
    public nomeAutor: string;
    public dataPublicacao: Date;
    public numeroPaginas: number;
    public isbn: string;
    public quantidadeDisponivel: number;
    public ativo: boolean;

    constructor(id: number, titulo: string, idAutor: number, nomeAutor: string, dataPublicacao: Date, numeroPaginas: number, isbn: string, quantidadeDisponivel: number, ativo: boolean) {
        this.id = id;
        this.titulo = titulo;
        this.idAutor = idAutor;
        this.nomeAutor = nomeAutor;
        this.dataPublicacao = dataPublicacao;
        this.numeroPaginas = numeroPaginas;
        this.isbn = isbn;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.ativo = ativo;
    }
}