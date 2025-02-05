import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Dropdown from '@/Components/Dropdown'



export default function PeriodoPedido()
{
 const [filter, setFilter] = useState(null);

  // Dados dos produtos
  const produtos = [
    { id: 1, nome: "Produto 1", status: "Pendente", data: "2025-02-01", preco: 100 },
    { id: 2, nome: "Produto 2", status: "Concluído", data: "2024-12-15", preco: 150 },
    { id: 3, nome: "Produto 3", status: "Pendente", data: "2024-11-05", preco: 200 },
    { id: 4, nome: "Produto 4", status: "Em andamento", data: "2024-10-10", preco: 250 },
    { id: 5, nome: "Produto 5", status: "Concluído", data: "2024-08-30", preco: 300 },
    { id: 6, nome: "Produto 6", status: "Pendente", data: "2024-07-01", preco: 350 },
    { id: 7, nome: "Produto 7", status: "Concluído", data: "2024-05-20", preco: 400 },
    { id: 8, nome: "Produto 8", status: "Em andamento", data: "2024-04-12", preco: 450 },
    { id: 9, nome: "Produto 9", status: "Pendente", data: "2024-02-25", preco: 500 },
    { id: 10, nome: "Produto 10", status: "Concluído", data: "2024-01-05", preco: 550 },
];




  // funçao para formatar data 
  const formatarData = (data) => {
    const date = new Date(data);
    const options = {year: "numeric", month: "long", day: "numeric"}
    
    return date.toLocaleDateString("pt-BR", options)
  }

  // Função para aplicar o filtro (exemplo básico)
  const aplicarFiltro = (filtro) =>{
    setFilter(filtro)
  }
  
    // Filtrar produtos com base na data
    const filtrarProdutos = (produtos) => {
      if (!filter) return produtos;
  
      const now = new Date();
      return produtos.filter((produto) => {
        const productDate = new Date(produto.data);
        const diffDays = Math.floor((now - productDate) / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  
      // Verificação dos filtros
    if (filter === "1m" && diffDays <= 30) {
      console.log("Filtro 1m"); // Debug para verificar o filtro
      return true;
    }
    if (filter === "1y" && diffDays <= 365) {
      console.log("Filtro 1y");
      return true;
    }
    if (filter === "3m" && diffDays <= 90) {
      console.log("Filtro 3m");
      return true;
    }
    if (filter === "3w" && diffDays <= 21) {
      console.log("Filtro 3w");
      return true;
    }
    if (filter === "2w" && diffDays <= 14) {
      console.log("Filtro 2w");
      return true;
    }
    if (filter === "2m" && diffDays <= 60) {
      console.log("Filtro 2m");
      return true;
    }

    return false
      });
    };
 // Produtos filtrados
    const  produtosFiltrados = filtrarProdutos(produtos)
  return (
    <>
    <div className="mt-12 flex justify-end">
      <Dropdown>
      <Dropdown.Trigger><PrimaryButton>Filtrar</PrimaryButton></Dropdown.Trigger>
      <Dropdown.Content>
        <li className="list-none p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => aplicarFiltro("1m")}
        >1 Mês</li>
        <li className="list-none p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => aplicarFiltro("1y")}>1 ano</li>
        <li className="list-none p-4 cursor-pointer hover:bg-gray-200"
         onClick={() => aplicarFiltro("3m")}>3 Meses</li>
        <li className="list-none p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => aplicarFiltro("3w")}>3 semanas</li>
        <li className="list-none p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => aplicarFiltro("2w")}>2 semanas</li>
         <li className="list-none p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => aplicarFiltro("2m")}>2 meses</li>
      </Dropdown.Content>
      </Dropdown>
    </div>
    <div className="flex mt-6 gap-4">
    <div className="bg-white w-full md:w-1/2 border rounded-lg shadow-sm p-4 cursor-pointer max-h-80 overflow-y-auto container-filtro">
    
    {produtosFiltrados.map((produto) => (
    <div key={produto.id} className="grid grid-cols-1 gap-4 border-b pb-4 mb-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">{produto.nome}</p>
        <p className="text-sm text-gray-500">{produto.status}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Data:</p>
        <p className="text-gray-800 font-medium">{formatarData(produto.data)}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Preço:</p>
        <p className="text-gray-800 font-medium">R${produto.preco.toFixed(2)}</p>
      </div>
    </div>
  ))}
   </div>
 
   <div className="bg-white w-full md:w-1/2 border rounded-lg shadow-sm p-4 cursor-pointer">ola</div>
    </div>
    </>
  )
}