import { Livro } from '../models/Livro.js';
import { LivroRepository } from '../repositories/LivroRepository.js';

const livroRepository = new LivroRepository();

export class LivroService {
    public async InserirLivro(titulo: string, idAutor: number, dataPublicacao: Date, numeroPaginas: number, isbn: string, quantidadeDisponivel: number, ativo: boolean): Promise<void> {
        
        if (titulo.trim().length === 0) {
            throw new Error("O título do livro não pode estar vazio.");
        }

        const novoLivro = new Livro(0, titulo, idAutor, '', dataPublicacao, numeroPaginas, isbn, quantidadeDisponivel, ativo);
        await livroRepository.InserirLivro(novoLivro);
    }

    public async ListarLivros(id: number = 0): Promise<Livro[]> {
        return await livroRepository.ListarLivros(id);
    }

    public async AtualizarLivro(id: number, titulo: string, idAutor: number, dataPublicacao: Date, numeroPaginas: number, isbn: string, quantidadeDisponivel: number, ativo: boolean): Promise<void> {
        
        if (titulo.trim().length === 0) {
            throw new Error("O título do livro não pode estar vazio.");
        }

        if (isbn.trim().length === 0) {
            throw new Error("O ISBN do livro não pode estar vazio.");
        }

        const livroAtualizado = new Livro(id, titulo, idAutor, '', dataPublicacao, numeroPaginas, isbn, quantidadeDisponivel, ativo);
        await livroRepository.AtualizarLivro(livroAtualizado);
    }

    public async RemoverLivro(id: number): Promise<void> {
        await livroRepository.RemoverLivro(id);
    }
}