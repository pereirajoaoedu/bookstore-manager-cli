export class Cliente {
    public id: number;
    public nome: string;
    public email: string;
    public telefone: string;
    public dataNascimento: Date;
    public ativo: boolean;

    constructor(id: number, nome: string, email: string, telefone: string, dataNascimento: Date, ativo: boolean) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.ativo = ativo;
    }
}