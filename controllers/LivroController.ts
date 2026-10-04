import { LivroService } from '../services/LivroService.js';
import { aguardar, terminal } from '../utils/Terminal.js';
import { TrataData } from '../utils/TrataDados.js';

const livroService = new LivroService();

export class LivroController {
    
    public async AdicionarLivro(): Promise<void> {

        console.log("=== Cadastro de Livro ===");

        try {
            const titulo = await terminal.question('Título do livro: ');
            const idAutor = parseInt(await terminal.question('ID do autor: '), 10);
            const isbn = await terminal.question('ISBN: ');
            const dataString = await terminal.question('Data de publicação (DD/MM/AAAA): ');
            const dataPublicacao = await TrataData(dataString);
            const numeroPaginas = parseInt(await terminal.question('Número de páginas: '), 10);
            const ativo = (await terminal.question('Ativo? (Sim/Não): ')).toLowerCase() === 'sim';

            await livroService.InserirLivro(titulo, idAutor, dataPublicacao, numeroPaginas, isbn, ativo);

            console.log("Cadastro realizado com sucesso!");

        } catch (erro) {
            console.error("Falha ao cadastrar livro. Motivo:", erro);
        }
    }

    public async ListarLivros(id: number = 0): Promise<void> {
        try {
            await aguardar(1000);
            console.clear();
            const livros = await livroService.ListarLivros(id);

            if (livros.length === 0) {
                console.log(`Nenhum livro encontrado com o ID ${id}.`);
                return;
            }

            console.log("=== Lista de Livros ===");
            livros.forEach((livro) => {
                console.log("---------------------------");
                console.log("ID:", livro.id);
                console.log("Título:", livro.titulo);
                console.log("Autor:", livro.nomeAutor)
                console.log("ISBN:", livro.isbn);
                console.log("Data de Publicação:", livro.dataPublicacao);
                console.log("Número de Páginas:", livro.numeroPaginas);
                console.log("Ativo:", livro.ativo ? "Sim" : "Não");
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao listar livros. Motivo:", erro);
        }
    }

    public async AtualizarLivro(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do livro a ser atualizado: '), 10);

            if (id > 0) {
                const livro = await livroService.ListarLivros(id);

                const livroAtual = livro[0];

                if (!livroAtual) {
                    console.log(`Nenhum livro encontrado com o ID ${id}.`);
                    return;
                }

                console.log("=== Atualização de Livro ===");
                console.log("A seguir informe os dados do livro. Caso não queira alterar algum campo, apenas pressione Enter.");

                const tituloAtualizado = await terminal.question(`Título [${livroAtual.titulo}]: `) || livroAtual.titulo;
                const isbnAtualizado = await terminal.question(`ISBN [${livroAtual.isbn}]: `) || livroAtual.isbn;
                const dataString = await terminal.question(`Data de Publicação (DD/MM/AAAA) [${livroAtual.dataPublicacao}]: `);
                const dataPublicacaoAtualizada = dataString ? await TrataData(dataString) : livroAtual.dataPublicacao;
                const numeroPaginasAtualizado = parseInt(await terminal.question(`Número de Páginas [${livroAtual.numeroPaginas}]: `) || livroAtual.numeroPaginas.toString(), 10);
                const idAutorAtualizado = parseInt(await terminal.question(`ID do Autor [${livroAtual.idAutor}]: `) || livroAtual.idAutor.toString(), 10);
                const ativoString = await terminal.question(`Ativo [${livroAtual.ativo === true ? 'Sim' : 'Não'}] (Sim/Não): `) || livroAtual.ativo;
                const ativoAtualizado = ativoString === 'Sim' || ativoString === 'S' || ativoString === '1';

                await livroService.AtualizarLivro(id, tituloAtualizado, idAutorAtualizado, dataPublicacaoAtualizada, numeroPaginasAtualizado, isbnAtualizado, ativoAtualizado);

                console.log("Atualização realizada com sucesso!");
            }
        } catch (erro) {
            console.error("Falha ao atualizar livro. Motivo:", erro);
        }
    }

    public async RemoverLivro(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do livro a ser removido: '), 10);
            await livroService.RemoverLivro(id);
            console.log("Livro removido com sucesso!");
        }
        catch (erro) {
            console.error("Falha ao remover livro. Motivo:", erro);
        }
    }
}