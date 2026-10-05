import { IniciarConexao, FecharConexao } from "../database/ConnectionFactory.js";
import * as schemas from "../database/Schemas.js";
import { Emprestimo } from '../models/Emprestimo.js';

export class EmprestimoRepository {

    public async InserirEmprestimo(emprestimo: Emprestimo): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.InserirEmprestimo, [emprestimo.idCliente, emprestimo.idLivro, emprestimo.dataEmprestimo, emprestimo.dataDevolucao, emprestimo.quantidade]);
            await pool.query(schemas.AtualizaQuantidadeLivroEmprestimo, [emprestimo.quantidade, emprestimo.idLivro])
            await FecharConexao("DB1");

        }
        catch (erro) {
            console.error("Erro ao inserir o empréstimo no banco de dados. Motivo: ", erro);
            throw erro;
        }
    }

    public async ListarEmprestimos(id: number = 0): Promise<Emprestimo[]> {

        try {
            const pool = await IniciarConexao("DB1");
            const resultado = await pool.query(id > 0 ? schemas.ListarEmprestimosPorId : schemas.ListarEmprestimos, id > 0 ? [id] : []);
            await FecharConexao("DB1");
            return resultado.rows.map((row: any) => new Emprestimo(row.id, row.id_cliente,row.nome_cliente, row.id_livro, row.nome_livro, row.data_emprestimo, row.data_devolucao, row.quantidade));
        
        } catch (erro) {
            console.error("Erro ao listar empréstimos no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async RegistrarDevolucao(emprestimo: Emprestimo): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.RegistrarDevolucao, [emprestimo.dataDevolucao, emprestimo.id]);
            await pool.query(schemas.AtualizaQuantidadeLivroDevolucao, [emprestimo.quantidade, emprestimo.idLivro]);
            await FecharConexao("DB1");
        }
        catch (erro) {
            console.error("Erro ao registrar a devolução no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

}