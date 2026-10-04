import { terminal } from '../utils/Terminal.js';
import { setTimeout } from 'node:timers';
import { MenuAutores } from './MenuAutores.js';

export async function MenuPrincipal() {
    const aguardar = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
    let sair = false;

    while (!sair) {
        await aguardar(1000);
        console.clear();
        console.log("===============================");
        console.log("Bem-vindo ao Bookstore Manager!");
        console.log("===============================");
        console.log("1. Gerenciar Autores");
        console.log("2. Gerenciar Livros");
        console.log("3. Gerenciar Clientes");
        console.log("4. Gerenciar Empréstimos");
        console.log("5. Relatórios");
        console.log("6. Sair");
        console.log("===============================");
        const opcao = await terminal.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await MenuAutores();
                break;
            case "2":
                console.log("Gerenciando Livros...");
                break;
            case "3":
                console.log("Gerenciando Clientes...");
                break;
            case "4":
                console.log("Gerenciando Empréstimos...");
                break;
            case "5":
                console.log("Exibindo Relatórios...");
                break;
            case "6":
                console.log("Saindo do programa...");
                terminal.close();
                sair = true;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                await aguardar(1000);
                console.clear();
        }
    }
}