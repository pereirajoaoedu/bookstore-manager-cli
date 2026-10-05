import { aguardar, terminal } from '../utils/Terminal.js';
import { MenuAutores } from './MenuAutores.js';
import { MenuEmprestimos } from './MenuEmprestimos.js';
import { MenuLivros } from './MenuLivros.js';
import { MenuClientes } from './MenuCliente.js';
import { MenuRelatorios } from './MenuRelatorios.js'
 
export async function MenuPrincipal() {
    
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
                await MenuLivros();
                break;
            case "3":
                await MenuClientes();
                break;
            case "4":
                await MenuEmprestimos();
                break;
            case "5":
                await MenuRelatorios();
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