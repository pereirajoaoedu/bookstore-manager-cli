import { LivroController } from '../controllers/LivroController.js';
import { aguardar, terminal } from '../utils/Terminal.js';

export async function MenuLivros() {

    const livroController = new LivroController();
    let voltar = false;

    while (!voltar) {
        await aguardar(1000);
        console.clear();
        console.log("===============================");
        console.log("Gerenciamento de Livros");
        console.log("===============================");
        console.log("1. Cadastrar Livro");
        console.log("2. Listar Livros");
        console.log("3. Consultar Livro por ID");
        console.log("4. Atualizar Livro");
        console.log("5. Remover Livro");
        console.log("6. Voltar ao Menu Principal");
        console.log("===============================");
        const opcao = await terminal.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await livroController.AdicionarLivro();
                break;
            case "2":
                await livroController.ListarLivros();
                await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "3":
                const idString = await terminal.question('Digite o ID do autor: ');
                const id = parseInt(idString, 10);
                await livroController.ListarLivros(id);
                await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "4":
                await livroController.AtualizarLivro();
                break;
            case "5":
                await livroController.RemoverLivro();
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