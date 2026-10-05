import { aguardar, terminal } from '../utils/Terminal.js';
import { RelatorioController } from '../controllers/RelatorioController.js';

export async function MenuRelatorios() {

    const relatorioController = new RelatorioController();
    let voltar = false;

    while (!voltar) {
        await aguardar(1000);
        console.clear();
        console.log("===============================");
        console.log("Relatórios");
        console.log("===============================");
        console.log("1. Livros Disponíveis");
        console.log("2. Livros Emprestados");
        console.log("3. Livros Cadastrados Por Autor");
        console.log("4. Quantidade de Empréstimos Por Livro");
        console.log("5. Clientes com Empréstimos Ativos");
        console.log("6. Voltar ao Menu Principal");
        console.log("===============================");
        const opcao = await terminal.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await relatorioController.RelatorioLivrosDisponiveis();
                await terminal.question("Pressione enter para continuar...");
                break;
            case "2":
                await relatorioController.RelatorioLivrosEmprestados();
                await terminal.question("Pressione enter para continuar...");
                break;
            case "3":
                await relatorioController.RelatorioLivrosPorAutor();
                await terminal.question("Pressione enter para continuar...");
                break;
            case "4":
                await relatorioController.RelatorioQuantidadeLivrosEmprestados();
                await terminal.question("Pressione enter para continuar...");
                break;
            case "5":
                await relatorioController.RelatorioEmprestimosPorCliente();
                await terminal.question("Pressione enter para continuar...");
                break;
            case "6":
                console.log("Voltando ao Menu Principal...");
                await aguardar(1000);
                console.clear();
                voltar = true;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                await aguardar(1000);
                console.clear();
        }
    }
}