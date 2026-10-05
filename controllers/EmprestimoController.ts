import { EmprestimoService } from '../services/EmprestimoService.js';
import { aguardar, terminal } from '../utils/Terminal.js';
import { TrataData } from '../utils/TrataDados.js';

const emprestimoService = new EmprestimoService();

export class EmprestimoController {
    
    public async AdicionarEmprestimo(): Promise<void> {

        console.log("=== Registro de Empréstimo ===");

        try {
            const idCliente = parseInt(await terminal.question('Informe o Id do seu Cliente: '), 10);
            const idLivro = parseInt(await terminal.question('Informe o Id do Livro: '), 10);
            const dataString = await terminal.question('Data do Empréstimo: (DD/MM/AAAA): ');
            const dataEmprestimo = await TrataData(dataString);
            const quantidade = parseInt(await terminal.question('Quantidade: '), 10);

            await emprestimoService.InserirEmprestimo(idCliente, idLivro, dataEmprestimo, quantidade);

            console.log("Empréstimo registrado com sucesso!");

        } catch (erro) {
            await terminal.question("Pressione qualquer tecla para continuar...")
        }
    }

    public async ListarEmprestimos(): Promise<void> {
        try {
            await aguardar(1000);
            console.clear();
            const emprestimos = await emprestimoService.ListarEmprestimos();

            if (emprestimos.length === 0) {
                console.log(`Nenhum empréstimo encontrado.`);
                return;
            }

            console.log("=== Lista de Empréstimos ===");
            emprestimos.forEach((emprestimo) => {
                console.log("---------------------------");
                console.log("ID:", emprestimo.id);
                console.log("Cliente:", emprestimo.nomeCliente);
                console.log("Livro:", emprestimo.tituloLivro)
                console.log("Data Empréstimo:", emprestimo.dataEmprestimo);
                console.log("Data Devolução:", emprestimo.dataDevolucao);
                console.log("Quantidade: ", emprestimo.quantidade);
            });
            console.log("---------------------------");

        } catch (erro) {
            await terminal.question("Pressione qualquer tecla para continuar...")
        }
    }

    public async RegistrarDevolucao(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do empréstimo a ser devolvido: '), 10);

            if (id > 0) {
                const emprestimo = await emprestimoService.ListarEmprestimos(id);

                const emprestimoAtual = emprestimo[0];

                if (!emprestimoAtual) {
                    console.log(`Nenhum empréstimo encontrado com o ID ${id}.`);
                    return;
                }

                console.log("=== Registro de Devolução ===");

                const dataString = await terminal.question('Data da Devolução: (DD/MM/AAAA): ');
                const dataDevolucao = await TrataData(dataString);

                await emprestimoService.RegistrarDevolucao(id, emprestimoAtual.idLivro, dataDevolucao, emprestimoAtual.quantidade);

                console.log("Atualização realizada com sucesso!");
            }
        } catch (erro) {
            await terminal.question("Pressione qualquer tecla para continuar...")
        }
    }
}