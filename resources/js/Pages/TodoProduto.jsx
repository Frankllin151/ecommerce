import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import { useState } from 'react';

export default function TodoProduto()
{

 const [showModal, setShowModal] = useState(false);


  return (
    <>
    <AuthenticatedLayout>
      <div className='flex justify-between px-4'>
        <h3 className='text-2xl'>Produtos</h3>  
        <PrimaryButton onClick={() => setShowModal(true)}>Add</PrimaryButton>
      </div>
      <Modal show={showModal} onClose={() =>setShowModal(false)}>

      <div className="p-4">
          <h2 className="text-xl font-bold">Adicionar Produto</h2>
          <p>Formulário ou conteúdo do modal aqui.</p>
          <button 
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded" 
            onClick={() => setShowModal(false)}
          >
            Formulario 
          </button>
        </div>
      </Modal>
    </AuthenticatedLayout>
    </>
  )
}