import { Livro } from '../models/Livro.js';
import { Cliente } from '../models/Cliente.js';
import { RelatorioRepository } from '../repositories/RelatorioRepository.js';

const relatorioRepository = new RelatorioRepository();

export class RelatorioService {

    public async GerarRelatoriosLivro(tipoRelatorio: number) : Promise<Livro[]> {
        return await relatorioRepository.ExibirRelatorio(tipoRelatorio);
    }

    public async GerarRelatoriosCliente() : Promise<Cliente[]> {
        return await relatorioRepository.ExibirRelatorioClientes();
    }
}