export class Livro {
    public id: number;
    public titulo: string;
    public idAutor: number | null;
    public nomeAutor: string | null;
    public dataPublicacao: Date | null;
    public numeroPaginas: number | null;
    public isbn: string | null;
    public quantidadeDisponivel: number | null;
    public ativo: boolean | null;

    constructor(id: number, 
                titulo: string, 
                idAutor: number | null, 
                nomeAutor: string | null, 
                dataPublicacao: Date | null, 
                numeroPaginas: number | null, 
                isbn: string | null, 
                quantidadeDisponivel : number | null, 
                ativo: boolean) {
                    
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