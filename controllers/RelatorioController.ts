import { RelatorioService } from '../services/RelatorioService.js';
import { aguardar } from '../utils/Terminal.js';

const relatorioService = new RelatorioService();

export class RelatorioController {
    
    public async RelatorioLivrosDisponiveis (): Promise<void> {
        try {
            
            await aguardar(1000);
            console.clear();
            const relatorios = await relatorioService.GerarRelatoriosLivro(1);

            if (relatorios.length === 0) {
                console.log(`Nenhum dado encontrado para o relatório desejado.`);
                return;
            }

            console.log("=== Lista de Livros Disponíveis ===");
            relatorios.forEach((relatorio) => {
                console.log("---------------------------");
                console.log("ID:", relatorio.id);
                console.log("Título:", relatorio.titulo);
                console.log("Autor:", relatorio.nomeAutor)
                console.log("ISBN:", relatorio.isbn);
                console.log("Data de Publicação:", relatorio.dataPublicacao);
                console.log("Número de Páginas:", relatorio.numeroPaginas);
                console.log("Quantidade Disponível: ", relatorio.quantidadeDisponivel);
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao gerar relatório. Motivo:", erro);
        }
    }

    public async RelatorioLivrosEmprestados (): Promise<void> {
        try {
            
            await aguardar(1000);
            console.clear();
            const relatorios = await relatorioService.GerarRelatoriosLivro(2);

            if (relatorios.length === 0) {
                console.log(`Nenhum dado encontrado para o relatório desejado.`);
                return;
            }

            console.log("=== Lista de Livros Emprestados ===");
            relatorios.forEach((relatorio) => {
                console.log("---------------------------");
                console.log("ID:", relatorio.id);
                console.log("Título:", relatorio.titulo);
                console.log("Autor:", relatorio.nomeAutor)
                console.log("ISBN:", relatorio.isbn);
                console.log("Data de Publicação:", relatorio.dataPublicacao);
                console.log("Número de Páginas:", relatorio.numeroPaginas);
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao gerar relatório. Motivo:", erro);
        }
    }

    public async RelatorioLivrosPorAutor (): Promise<void> {
        try {
            
            await aguardar(1000);
            console.clear();
            const relatorios = await relatorioService.GerarRelatoriosLivro(3);

            if (relatorios.length === 0) {
                console.log(`Nenhum dado encontrado para o relatório desejado.`);
                return;
            }

            console.log("=== Lista de Livros Por Autor ===");
            relatorios.forEach((relatorio) => {
                console.log("---------------------------");
                console.log("ID:", relatorio.idAutor);
                console.log("Autor:", relatorio.nomeAutor)
                console.log("Título:", relatorio.titulo);
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao gerar relatório. Motivo:", erro);
        }
    }

    public async RelatorioQuantidadeLivrosEmprestados (): Promise<void> {
        try {
            
            await aguardar(1000);
            console.clear();
            const relatorios = await relatorioService.GerarRelatoriosLivro(4);

            if (relatorios.length === 0) {
                console.log(`Nenhum dado encontrado para o relatório desejado.`);
                return;
            }

            console.log("=== Lista de Quantidade Empréstimos Por Livro ===");
            relatorios.forEach((relatorio) => {
                console.log("---------------------------");
                console.log("ID:", relatorio.id);
                console.log("Título:", relatorio.titulo)
                console.log("Quantidade:", relatorio.quantidadeDisponivel);
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao gerar relatório. Motivo:", erro);
        }
    }

    public async RelatorioEmprestimosPorCliente(): Promise<void> {
        try {
            
            await aguardar(1000);
            console.clear();
            const relatorios = await relatorioService.GerarRelatoriosCliente();

            if (relatorios.length === 0) {
                console.log(`Nenhum dado encontrado para o relatório desejado.`);
                return;
            }

            console.log("=== Lista de Quantidade Empréstimos Por Cliente ===");
            relatorios.forEach((relatorio) => {
                console.log("---------------------------");
                console.log("ID:", relatorio.id);
                console.log("Cliente:", relatorio.nome)
                console.log("Quantidade:", relatorio.quantidadeEmprestimos);
            });
            console.log("---------------------------");

        } catch (erro) {
            console.error("Falha ao gerar relatório. Motivo:", erro);
        }
    }
}
