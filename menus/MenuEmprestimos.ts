import { aguardar, terminal } from '../utils/Terminal.js';
import { EmprestimoController } from '../controllers/EmprestimoController.js';

export async function MenuEmprestimos() {

    const emprestimoController = new EmprestimoController();
    let voltar = false;

    while (!voltar) {
        await aguardar(1000);
        console.clear();
        console.log("===============================");
        console.log("Gerenciamento de Empréstimos e Devoluções");
        console.log("===============================");
        console.log("1. Registrar Empréstimo");
        console.log("2. Listar Empréstimos");
        console.log("3. Registrar Devolução");
        console.log("4. Voltar ao Menu Principal");
        console.log("===============================");
        const opcao = await terminal.question("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await emprestimoController.AdicionarEmprestimo();
                break;
            case "2":
                await emprestimoController.ListarEmprestimos();
                await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "3":
                await emprestimoController.RegistrarDevolucao();
                await terminal.question("\nPressione qualquer tecla para continuar...");
                break;
            case "4":
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