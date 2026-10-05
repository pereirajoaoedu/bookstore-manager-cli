export class Cliente {
    public id: number;
    public nome: string;
    public email: string | null;
    public telefone: string | null;
    public dataNascimento: Date | null;
    public ativo: boolean;
    public quantidadeEmprestimos?: number;

    constructor(id: number, nome: string, email: string | null, telefone: string | null, dataNascimento: Date | null, ativo: boolean, quantidadeEmprestimos: number = 0) {
        this.id = id; 
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.ativo = ativo;
        this.quantidadeEmprestimos = quantidadeEmprestimos;
    }
}