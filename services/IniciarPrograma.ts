import { TestarConexao } from "../database/ConnectionFactory.js";
import { VerificarBancoDeDados, SincronizarTabelas } from "./EtapasInicializacaoPrograma.js";

export async function IniciarPrograma() {
  const prefixo = "DB1";

  console.log('Iniciando o programa...');
  console.log('(0%) Verificando existência do banco de dados...');
  const retornoBanco = await TestarConexao(prefixo);

  const bancoVerificado = await VerificarBancoDeDados(retornoBanco);

  if (bancoVerificado) {
    const tabelasSincronizadas = await SincronizarTabelas();

    if (tabelasSincronizadas) {
      console.log('(100%) Programa iniciado com sucesso!');
    }
  }
}