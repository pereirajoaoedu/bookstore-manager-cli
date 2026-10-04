import { Autor } from '../models/Autor.js';
import { AutorRepository } from '../repositories/AutorRepository.js';

const autorRepository = new AutorRepository();

export class AutorService {
    public async InserirAutor(nome: string, dataNascimento: Date, resumo: string): Promise<void> {
        
        if (nome.trim().length === 0) {
            throw new Error("O nome do autor não pode estar vazio.");
        }

        const novoAutor = new Autor(0, nome, dataNascimento, resumo, true);
        await autorRepository.InserirAutor(novoAutor);
    }
    
    public async ListarAutores(): Promise<Autor[]> {
        return await autorRepository.ListarAutores();
    }
}