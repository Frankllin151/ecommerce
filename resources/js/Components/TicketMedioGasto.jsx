import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
export default function TicketMedioGasto({totalperdido})

{
  const [selectedAll , setSelectedAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState({})

  console.log(totalperdido);
 const toggleSelectAll = () =>{
  const newSelectedState = !selectedAll;
  setSelectedAll(newSelectedState); 
  setSelectedRows(
    newSelectedState ? clientes.reduce((acc, _, index) => ({ ...acc, [index]: true }), {}) : {}
  )
 }
const toggleSelectRow = (index) => {
  setSelectedRows((prev) => ({
    ...prev, 
    [index]: !prev[index],
  }))
}

const handleCheckSelected = () => {
  const selectedClients  = totalperdido.filter(cliente => selectedRows[cliente.id])
  console.log("clientes selecionado:" , selectedClients);
  
}

  return (
    <>
    <div className="mt-12 flex justify-between bg-white shadow-sm sm:rounded-lg  px-3 py-3 ">
      <h1 className="text-2xl">Ticket Medio Gasto por Cliente</h1>
      <PrimaryButton
    onClick={handleCheckSelected}
    >Aplicar desconto</PrimaryButton></div>
<div className="mt-6 px-3 py-3 overflow-hidden bg-white shadow-sm sm:rounded-lg">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3">
             check
            </th>
            <th className="p-3">Cliente</th>
            <th className="p-3">Email</th>
            <th className="p-3">Total Gasto</th>
            <th className="p-3">Pedidos Feitos</th>
            <th className="p-3">Ticket Médio</th>
            <th className="p-3">Desconto Aplicado</th>
          </tr>
        </thead>
        <tbody>
          {totalperdido.map((cliente, index) => (
            <tr key={cliente.id} className="border-b">
              <td className="p-3 text-center">
                <input
                  type="checkbox"
                  checked={!!selectedRows[index]}
                  onChange={() => toggleSelectRow(index)}
                />
              </td>
              <td className="p-3">{cliente.nome}</td>
              <td className="p-3">{cliente.email}</td>
              <td className="p-3">{cliente.total}</td>
              <td className="p-3">{cliente.pedidos}</td>
              <td className="p-3">{cliente.ticket}</td>
              <td className={`p-3 ${cliente.descontoClasse}`}>{cliente.desconto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}