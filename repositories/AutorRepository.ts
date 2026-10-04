import { IniciarConexao, FecharConexao } from "../database/ConnectionFactory.js";
import * as schemas from "../database/Schemas.js";
import { Autor } from '../models/Autor.js';

export class AutorRepository {

    public async InserirAutor(autor: Autor): Promise<void> {
        try {
            const pool = await IniciarConexao("DB1");
            await pool.query(schemas.InserirAutor, [autor.nome, autor.dataNascimento, autor.resumo, autor.ativo]);
            await FecharConexao("DB1");
        } catch (erro) {
            console.error("Erro ao inserir autor no banco de dados. Motivo:", erro);
            throw erro;
        }
    }

    public async ListarAutores(): Promise<Autor[]> {
        try {
            const pool = await IniciarConexao("DB1");
            const resultado = await pool.query(schemas.ListarAutores);
            await FecharConexao("DB1");
            return resultado.rows.map((row: any) => new Autor(row.id, row.nome, row.data_nascimento, row.resumo, true));
        } catch (erro) {
            console.error("Erro ao listar autores no banco de dados. Motivo:", erro);
            throw erro;
        }
    }
}