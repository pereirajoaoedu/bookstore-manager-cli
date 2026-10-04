import { AutorService } from '../services/AutorService.js';
import { aguardar, terminal } from '../utils/Terminal.js';
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

    public async ListarAutores(id: number = 0): Promise<void> {
        try {
            await aguardar(1000);
            console.clear();
            const autores = await autorService.ListarAutores(id);

            if (autores.length === 0) {
                console.log(`Nenhum autor encontrado com o ID ${id}.`);
                return;
            }

            console.log("=== Lista de Autores ===");
            autores.forEach((autor) => {
                console.log("---------------------------");
                console.log("ID:", autor.id);
                console.log("Nome:", autor.nome);
                console.log("Data de Nascimento:", autor.dataNascimento);
                console.log("Resumo:", autor.resumo);
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao listar autores. Motivo:", erro);
        }
    }

    public async AtualizarAutor(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do autor a ser atualizado: '), 10);

            if (id > 0) {
                const autor = await autorService.ListarAutores(id);

                const autorAtual = autor[0];

                if (!autorAtual) {
                    console.log(`Nenhum autor encontrado com o ID ${id}.`);
                    return;
                }

                console.log("=== Atualização de Autor ===");
                console.log("A seguir informe os dados do autor. Caso não queira alterar algum campo, apenas pressione Enter.");

                const nomeAtualizado = await terminal.question(`Nome [${autorAtual.nome}]: `) || autorAtual.nome;
                const dataString = await terminal.question(`Data de nascimento (DD/MM/AAAA) [${autorAtual.dataNascimento}]: `);
                const dataNascimentoAtualizada = dataString ? await TrataData(dataString) : autorAtual.dataNascimento;
                const resumoAtualizado = await terminal.question(`Resumo [${autorAtual.resumo}]: `) || autorAtual.resumo;
                const ativoString = await terminal.question(`Ativo [${autorAtual.ativo === true ? 'Sim' : 'Não'}] (Sim/Não): `) || autorAtual.ativo;
                const ativoAtualizado = ativoString === 'Sim' || ativoString === 'S' || ativoString === '1';

                await autorService.AtualizarAutor(id, nomeAtualizado, dataNascimentoAtualizada, resumoAtualizado, ativoAtualizado);

                console.log("Atualização realizada com sucesso!");
            }
        } catch (erro) {
            console.error("Falha ao atualizar autor. Motivo:", erro);
        }
    }

    public async RemoverAutor(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do autor a ser removido: '), 10);
            await autorService.RemoverAutor(id);
            console.log("Autor removido com sucesso!");
        }
        catch (erro) {
            console.error("Falha ao remover autor. Motivo:", erro);
        }
    }
}