import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { router } from '@inertiajs/react';
const todoprodutos = {
  produtos: [
    {
      id: 1,
      img: 'https://picsum.photos/150/150',
      nome: 'Produto 1',
      sku: '001',
      estoque: 10,
      preco: 100.00,
      categoria: 'Categoria 1'
    },
    {
      id: 2,
      img: 'https://picsum.photos/150/150',
      nome: 'Produto 2',
      sku: '002',
      estoque: 20,
      preco: 200.00,
      categoria: 'Categoria 2'
    },
    {
      id: 3,
      img: 'https://picsum.photos/150/150',
      nome: 'Produto 3',
      sku: '003',
      estoque: 30,
      preco: 300.00,
      categoria: 'Categoria 3'
    }
  ]
};



const ProdutoAll = () => {
const [modalopen , setModalopen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState("");
   
  const handleExcluir = (produto) =>{
    setSelectedProduct(produto)
    setModalopen(true);
    
  }
  
  const handleModalClosed = () =>{
    setModalopen(false);
setSelectedProduct("")
  }

  const handlesubmitExcluir = (id) => {
    router.delete(`/todoproduto/excluir-produto/${id}`, {
      onSuccess: () => {
        setModalopen(false);
        setSelectedProduct(null);
      }
    });
  };
  return (
    <>
    <table className="min-w-full bg-white mt-2 rounded-md">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">Produto</th>
          <th className="py-2 px-4 border-b border-gray-200">SKU</th>
          <th className="py-2 px-4 border-b border-gray-200">Estoque</th>
          <th className="py-2 px-4 border-b border-gray-200">Preço</th>
          <th className="py-2 px-4 border-b border-gray-200">Categoria</th>
          <th className='py-2 px-4 border-b'>Ação</th>
        </tr>
      </thead>
      <tbody>
        {todoprodutos.produtos.map((produto) => (
       
          <tr key={produto.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b border-gray-200 flex items-center">
              <img src={produto.img} alt={produto.nome} className="w-10 h-10 mr-4" />
              <span>{produto.nome}</span>
            </td>
            <td className="py-2 px-4 border-b border-gray-200">{produto.sku}</td>
            <td className="py-2 px-4 border-b border-gray-200">{produto.estoque}</td>
            <td className="py-2 px-4 border-b border-gray-200">{produto.preco.toFixed(2)}</td>
            <td className="py-2 px-4 border-b border-gray-200">{produto.categoria}</td>
            <td className="py-2 px-4 border-b border-gray-200">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleExcluir(produto)}
              >Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Modal show={modalopen} onClick={handleModalClosed}>
      <div className='p-6'>
    <h2 className="text-lg font-bold mb-4">Excluir Produto</h2>
            <p>Tem certeza que deseja excluir o produto abaixo?</p>
            <div className="flex items-center mt-4">
              <img src={selectedProduct.img} alt={selectedProduct.nome} className="w-10 h-10 mr-4" />
              <span>{selectedProduct.nome}</span>
            </div>
            <div className="mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleModalClosed}
              >
                Cancelar
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() =>handlesubmitExcluir(selectedProduct.id)}>Excluir</button>
            </div>
          </div>
    </Modal>
    </>
  );
};

export default ProdutoAll;