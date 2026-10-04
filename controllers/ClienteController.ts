import { ClienteService } from '../services/ClienteService.js';
import { aguardar, terminal } from '../utils/Terminal.js';
import { TrataData } from '../utils/TrataDados.js';

const clienteService = new ClienteService();

export class ClienteController {
    
    public async AdicionarCliente(): Promise<void> {

        console.log("=== Cadastro de Cliente ===");

        try {
            const nome = await terminal.question('Nome do cliente: ');
            const email = await terminal.question('E-mail: ');
            const telefone = await terminal.question('Telefone: ');
            const dataString = await terminal.question('Data de nascimento (DD/MM/AAAA): ');
            const dataNascimento = await TrataData(dataString);

            await clienteService.InserirCliente(nome, email, telefone, dataNascimento);

            console.log("Cadastro realizado com sucesso!");

        } catch (erro) {
            await terminal.question("Pressione qualquer tecla para continuar...")
        }
    }

    public async ListarClientes(id: number = 0): Promise<void> {
        try {
            await aguardar(1000);
            console.clear();
            const clientes = await clienteService.ListarClientes(id);

            if (clientes.length === 0) {
                console.log(`Nenhum autor encontrado com o ID ${id}.`);
                return;
            }

            console.log("=== Lista de Autores ===");
            clientes.forEach((cliente) => {
                console.log("---------------------------");
                console.log("ID:", cliente.id);
                console.log("Nome:", cliente.nome);
                console.log("E-mail: ", cliente.email);
                console.log("Telefone: ", cliente.telefone)
                console.log("Data de Nascimento:", cliente.dataNascimento);
            });
            console.log("---------------------------");

        } catch (erro) {
            await terminal.question("Pressione qualquer tecla para continuar...")
        }
    }

    public async AtualizarCliente(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do cliente a ser atualizado: '), 10);

            if (id > 0) {
                const cliente = await clienteService.ListarClientes(id);

                const clienteAtual = cliente[0];

                if (!clienteAtual) {
                    console.log(`Nenhum cliente encontrado com o ID ${id}.`);
                    return;
                }

                console.log("=== Atualização de Cliente ===");
                console.log("A seguir informe os dados do cliente. Caso não queira alterar algum campo, apenas pressione Enter.");

                const nomeAtualizado = await terminal.question(`Nome [${clienteAtual.nome}]: `) || clienteAtual.nome;
                const emailAtualizado = await terminal.question(`E-mail [${clienteAtual.email}]: ` || clienteAtual.email);
                const telefoneAtualizado = await terminal.question(`Telefone [${clienteAtual.telefone}]: ` || clienteAtual.telefone);
                const dataString = await terminal.question(`Data de nascimento (DD/MM/AAAA) [${clienteAtual.dataNascimento}]: `);
                const dataNascimentoAtualizada = dataString ? await TrataData(dataString) : clienteAtual.dataNascimento;
                const ativoString = await terminal.question(`Ativo [${clienteAtual.ativo === true ? 'Sim' : 'Não'}] (Sim/Não): `) || clienteAtual.ativo;
                const ativoAtualizado = ativoString === 'Sim' || ativoString === 'S' || ativoString === '1';

                await clienteService.AtualizarCliente(id, nomeAtualizado, emailAtualizado, telefoneAtualizado, dataNascimentoAtualizada, ativoAtualizado);

                console.log("Atualização realizada com sucesso!");
            }
        } catch (erro) {
            terminal.question("Pressione qualquer tecla para continuar...");
        }
    }

    public async RemoverCliente(): Promise<void> {
        try {
            const id = parseInt(await terminal.question('Digite o ID do cliente a ser removido: '), 10);
            await clienteService.RemoverCliente(id);
            console.log("Cliente removido com sucesso!");
        }
        catch (erro) {
            await terminal.question("Pressione qualquer tecla para continuar...")
        }
    }
}