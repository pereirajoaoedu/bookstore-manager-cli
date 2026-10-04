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
}