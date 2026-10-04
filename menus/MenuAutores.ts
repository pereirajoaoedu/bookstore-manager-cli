import { terminal } from '../utils/Terminal.js';
import { setTimeout } from 'node:timers';
import { AutorController } from '../controllers/AutorController.js';

export async function MenuAutores() {
    const aguardar = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
    const autorController = new AutorController();
    let voltar = false;

    while (!voltar) {
        await aguardar(1000);
        console.clear();
        console.log("===============================");
        console.log("Gerenciamento de Autores");
        console.log("===============================");
        console.log("1. Cadastrar Autor");
        console.log("2. Listar Autores");
        console.log("3. Consultar Autor por ID");
        console.log("4. Atualizar Autor");
        console.log("5. Remover Autor");
        console.log("6. Voltar ao Menu Principal");
        console.log("===============================");
        const opcao = await terminal.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await autorController.AdicionarAutor();
                break;
            case "2":
                await autorController.ListarAutores();
                const teclar = await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "3":
                console.log("Consultando Autor por ID...");
                break;
            case "4":
                console.log("Atualizando Autor...");
                break;
            case "5":
                console.log("Removendo Autor...");
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