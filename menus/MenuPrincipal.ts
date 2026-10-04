import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { setTimeout } from 'node:timers';

export async function MenuPrincipal() {
    const terminal = readline.createInterface({ input, output });
    const aguardar = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

    aguardar(1000);
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
            console.log("Gerenciando Autores...");
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
        default:
            console.log("Opção inválida. Tente novamente.");
            await aguardar(1000);
            console.clear();
            await MenuPrincipal();
    }
}