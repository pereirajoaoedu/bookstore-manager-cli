import { IniciarConexao, FecharConexao } from "../database/ConnectionFactory.js";
import * as schemas from "../database/Schemas.js";
import { Cliente } from '../models/Cliente.js';

export class ClienteRepository {

    public async InserirCliente(cliente: Cliente): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.InserirCliente, [cliente.nome, cliente.email, cliente.telefone, cliente.dataNascimento, true]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao inserir cliente no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async ListarClientes(id: number = 0): Promise<Cliente[]> {
        try {
            const pool = await IniciarConexao("DB1");
            const resultado = await pool.query(id > 0 ? schemas.ListarClientesPorId : schemas.ListarClientes, id > 0 ? [id] : []);
            await FecharConexao("DB1");
            return resultado.rows.map((row: any) => new Cliente(row.id, row.nome, row.email, row.telefone, row.data_nascimento, row.ativo));

        } catch (erro) {
            console.error("Erro ao listar clientes no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async AtualizarCliente(cliente: Cliente): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.AtualizarCliente, [cliente.nome, cliente.email, cliente.telefone, cliente.dataNascimento, cliente.ativo, cliente.id]);
            await FecharConexao("DB1");

        } catch (erro) {
            console.error("Erro ao atualizar cliente no banco de dados. Motivo:", erro);
            throw erro;
        }   
    }

    public async RemoverCliente(id: number): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.RemoverCliente, [id]);
            await FecharConexao("DB1");

        } catch (erro) {

            const mensagemErro = erro as { code: string };

            if (mensagemErro.code === '23503') {
                console.error("\x1b[31mNão foi possível excluir o cliente, pois existem livros cadastrados e vinculados ao mesmo. Favor editar seu autor e inativá-lo.\x1b[0m")
            }
            else {
                console.error("Erro ao remover cliente no banco de dados. Motivo:", erro);
            }

            throw erro;
        }
    }
}