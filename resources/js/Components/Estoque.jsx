import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
export default function Estoque({DadoForm ,setDadoForm , HandleInputChange, handleCheckedEstoque, isCheckedEstoque, StatusEstoque, CheckLimitarCompras, typePermissao})
{
  return (
    <div className='mt-3'>
    <InputLabel className='text-[16px]'>Estoque quantidade:
   <TextInput
   value={DadoForm[0].quantidade}
   onChange={HandleInputChange}
   className="ml-2" 
    placeholder="ex. 99"
    id="quantidade"
    name="quantidade"
    type="text"
   />
  </InputLabel>

  <InputLabel className='text-[16px]'>Gestão de Estoque:
  < Checkbox className='ml-2'
  onChange={handleCheckedEstoque}
  /> &nbsp; Acompanhe a quantidade de estoque para este produto
  </InputLabel>
  {isCheckedEstoque === true && 
  <div>
   <InputLabel className='mt-2'>
    Limiar estoque baixo: 
    <TextInput
    value={DadoForm[0].limiarEstoque}
    onChange={HandleInputChange}
    name="limiarEstoque"
    id="limiarEstoque" 
    type="number"
    placeholder="Limiar esse produto(2)"
    />
   </InputLabel>

    <InputLabel className='flex mt-2'>
    <p>Permitir Encomendas? </p>
    <div className='ml-2'>
      <select name="permissao"  id="permisao" className='  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
      onChange={HandleInputChange}
      value={DadoForm[0].permissao}
      
      >
      {typePermissao.map((permissao) =>(
        <option key={permissao.id}>{permissao.permitir}</option>
      ))}
      </select>
    </div>
    </InputLabel>
  
  </div>
  }
  {isCheckedEstoque === false && 
   <div className='mt-2'>
    <InputLabel>
    Status do Estoque:
    <select name="status" id="status"
    onChange={HandleInputChange}
    className='ml-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
    value={DadoForm[0].status}
    >
      {StatusEstoque.map((statusE) =>(
        <option key={statusE.id} value={statusE.estoque}>{statusE.estoque}</option>
      ))}
    </select>
    </InputLabel>
    <InputLabel className='mt-2'> 
    Vendido  individualmente <Checkbox onChange={CheckLimitarCompras}/> Limitar compras 1 item por pedido
    </InputLabel>
   </div>
  }
 
  </div>
  )
}