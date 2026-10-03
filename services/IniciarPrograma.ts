import {TestarConexao} from "../database/ConnectionFactory.js";
import { CriarBancoDeDados } from "../database/CreateDb.js";

export async function IniciarPrograma() {
  const prefixo = "DB1";

  console.log('Iniciando o programa...');
  console.log('(0%) Verificando existência do banco de dados...');
  const retorno = await TestarConexao(prefixo);

  switch (retorno) {
    case `Conexão com o banco de dados ${process.env[`${prefixo}_NAME`]} estabelecida com sucesso!`:
      console.log("Programa iniciado com sucesso!");
      break;
    case `Banco de dados ${process.env[`${prefixo}_NAME`]} não existe.`:
      console.log("(25%) Banco de dados não existe. Criando banco de dados...");
      const sucesso = await CriarBancoDeDados();
      break;
    case `Senha incorreta para o usuário ${process.env[`${prefixo}_USER`]}.`:
      console.error("Erro ao iniciar o programa: Senha incorreta.");
      break;
    default:
      console.error("Erro ao iniciar o programa.");
  }
}