import { AutorService } from '../services/AutorService.js';
import { terminal } from '../utils/Terminal.js';
import { TrataData } from '../utils/TrataDados.js';

const autorService = new AutorService();

export class AutorController {
    
    public async AdicionarAutor(): Promise<void> {

        console.log("=== Cadastro de Autor ===");

        try {
            const nome = await terminal.question('Nome do autor: ');
            const dataString = await terminal.question('Data de nascimento (DD/MM/AAAA): ');
            const dataNascimento = await TrataData(dataString);
            const resumo = await terminal.question('Resumo: ');

            await autorService.InserirAutor(nome, dataNascimento, resumo);

            console.log("Cadastro realizado com sucesso!");

        } catch (erro) {
            console.error("Falha ao cadastrar autor. Motivo:", erro);
        }
    }

    public async ListarAutores(): Promise<void> {
        try {
            const autores = await autorService.ListarAutores();
            console.log("=== Lista de Autores ===");
            autores.forEach((autor) => {
                console.log(`ID: ${autor.id}, Nome: ${autor.nome}, Data de Nascimento: ${autor.dataNascimento}, Resumo: ${autor.resumo}`);
            });
        } catch (erro) {
            console.error("Falha ao listar autores. Motivo:", erro);
        }
    }
}