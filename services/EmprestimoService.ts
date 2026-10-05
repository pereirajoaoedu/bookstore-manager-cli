import { Emprestimo } from '../models/Emprestimo.js';
import { EmprestimoRepository } from '../repositories/EmprestimoRepository.js';
import { LivroRepository } from '../repositories/LivroRepository.js'

const emprestimoRepository = new EmprestimoRepository();
const livroRepository = new LivroRepository();

export class EmprestimoService {
    public async InserirEmprestimo(idCliente: number, idLivro: number, dataEmprestimo: Date, quantidade: number): Promise<void> {
        
        try {
            if (idLivro === 0) {
                throw new Error("É necessário informar o id de um livro.");
            }

            if (idCliente === 0) {
                throw new Error("É necessário informar o id de um cliente.");
            }

            const livros = await livroRepository.ListarLivros(idLivro);
            const livroEncontrado = livros[0];
            const quantidadeDisponivel = livroEncontrado?.quantidadeDisponivel;

            if (quantidadeDisponivel === undefined) {
                throw new Error("Livro não encontrado.");
            }

            if (quantidade > quantidadeDisponivel) {
                throw new Error("Quantidade solicitada maior que a quantidade disponível.");
            }
            else {
                const novoEmprestimo = new Emprestimo(0, idCliente, '', idLivro, '', dataEmprestimo, null, quantidade);
                await emprestimoRepository.InserirEmprestimo(novoEmprestimo);
            }   
        } catch (erro) {
            console.error(erro);
        }
    }
    
    public async ListarEmprestimos(id: number = 0): Promise<Emprestimo[]> {
        return await emprestimoRepository.ListarEmprestimos(id);
    }

    public async RegistrarDevolucao(id: number, idLivro: number, dataDevolucao: Date, quantidade: number): Promise<void> {
        
        if (dataDevolucao === null) {
            dataDevolucao = new Date();
        }

        const registroDevolucao = new Emprestimo(id, 0, '', idLivro, '', null, dataDevolucao, quantidade);
        await emprestimoRepository.RegistrarDevolucao(registroDevolucao);
    }
}