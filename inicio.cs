using System;
using System.Collections.Generic;

public class Veiculo
{
    public string Placa { get; set; }
    public string Modelo { get; set; }
    public DateTime HoraEntrada { get; set; }
}

public class Estacionamento
{
    private List<Veiculo> veiculos = new List<Veiculo>();
    private const decimal TarifaPorHora = 5.0m; 

    public void AdicionarVeiculo(Veiculo veiculo)
    {
        veiculo.HoraEntrada = DateTime.Now;
        veiculos.Add(veiculo);
    }

    public void RemoverVeiculo(string placa)
    {
        Veiculo veiculo = veiculos.Find(v => v.Placa == placa);
        if (veiculo != null)
        {
            decimal valorCobrado = CalcularValor(veiculo.HoraEntrada, DateTime.Now);
            veiculos.Remove(veiculo);
            Console.WriteLine($"Veículo {placa} removido. Valor cobrado: R${valorCobrado}");
        }
        else
        {
            Console.WriteLine("Veículo não encontrado.");
        }
    }

    public void ListarVeiculos()
    {
        foreach (var veiculo in veiculos)
        {
            Console.WriteLine($"Placa: {veiculo.Placa}, Modelo: {veiculo.Modelo}, Hora de Entrada: {veiculo.HoraEntrada}");
        }
    }

    private decimal CalcularValor(DateTime horaEntrada, DateTime horaSaida)
    {
        var duracao = (horaSaida - horaEntrada).TotalHours;
        return Math.Ceiling((decimal)duracao) * TarifaPorHora; 
    }
}

class Program
{
    static void Main()
    {
        var estacionamento = new Estacionamento();

        estacionamento.AdicionarVeiculo(new Veiculo { Placa = "ABC123", Modelo = "Fusca" });
        estacionamento.AdicionarVeiculo(new Veiculo { Placa = "XYZ789", Modelo = "Civic" });

        estacionamento.ListarVeiculos();

        estacionamento.RemoverVeiculo("ABC123");

        estacionamento.ListarVeiculos();
    }
}
