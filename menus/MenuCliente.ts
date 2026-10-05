import { aguardar, terminal } from '../utils/Terminal.js';
import { ClienteController } from '../controllers/ClienteController.js';

export async function MenuClientes() {

    const clienteController = new ClienteController();
    let voltar = false;

    while (!voltar) {
        await aguardar(1000);
        console.clear();
        console.log("===============================");
        console.log("Gerenciamento de Clientes");
        console.log("===============================");
        console.log("1. Cadastrar Cliente");
        console.log("2. Listar Clientes");
        console.log("3. Consultar Cliente por ID");
        console.log("4. Atualizar Cliente");
        console.log("5. Remover Cliente");
        console.log("6. Voltar ao Menu Principal");
        console.log("===============================");
        const opcao = await terminal.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await clienteController.AdicionarCliente();
                break;
            case "2":
                await clienteController.ListarClientes();
                await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "3":
                const idString = await terminal.question('Digite o ID do cliente: ');
                const id = parseInt(idString, 10);
                await clienteController.ListarClientes(id);
                await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "4":
                await clienteController.AtualizarCliente();
                break;
            case "5":
                await clienteController.RemoverCliente();
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