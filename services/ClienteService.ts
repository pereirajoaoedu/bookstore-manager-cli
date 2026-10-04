import { Cliente } from '../models/Cliente.js';
import { ClienteRepository } from '../repositories/ClienteRepository.js';

const clienteRepository = new ClienteRepository();

export class ClienteService {
    public async InserirCliente(nome: string, email: string, telefone: string, dataNascimento: Date): Promise<void> {
        
        if (nome.trim().length === 0) {
            throw new Error("O nome do cliente não pode estar vazio.");
        }

        const novoCliente = new Cliente(0, nome, email, telefone, dataNascimento, true);
        await clienteRepository.InserirCliente(novoCliente);
    }
    
    public async ListarClientes(id: number = 0): Promise<Cliente[]> {
        return await clienteRepository.ListarClientes(id);
    }

    public async AtualizarCliente(id: number, nome: string, email: string, telefone: string, dataNascimento: Date, ativo: boolean): Promise<void> {
        if (nome.trim().length === 0) {
            throw new Error("O nome do cliente não pode estar vazio.");
        }

        const clienteAtualizado = new Cliente(id, nome, email, telefone, dataNascimento, ativo);
        await clienteRepository.AtualizarCliente(clienteAtualizado);
    }

    public async RemoverCliente(id: number): Promise<void> {
        await clienteRepository.RemoverCliente(id);
    }
}