import Select from 'react-select';
import makeAnimated  from "react-select/animated"
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export const productOptions = [
  { nome: 'Produto A', categoria: 'Categoria 1', id: 1 },
  { nome: 'Produto B', categoria: 'Categoria 2', id: 2 },
  { nome: 'Produto C', categoria: 'Categoria 3', id: 3 },
  { nome: 'Produto D', categoria: 'Categoria 4', id: 4 },
  { nome: 'Produto E', categoria: 'Categoria 5', id: 5 },
];
const animatedComponents = makeAnimated();

export default function ProdutoRelacionado({DadoForm , handleInputSelectUpSell,  HandleInputChange})
{
  return (
    <div className='mt-3 '>
    <InputLabel>
    Upsells: 
    <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={false}
        name='upsells'
        value={DadoForm[0].upsells.map(item => ({
          value: item.id, 
          label: item.nome // Usamos o nome do produto como label
        }))}
        onChange={handleInputSelectUpSell}
        isMulti
        options={productOptions.map(product => ({
          value: product.id, // Para garantir que a chave 'value' seja única, utilizamos 'id'
          label: `${product.nome}` // Exibe nome e categoria juntos
        }))}
      />
    </InputLabel>
    <InputLabel className='mt-2'>
    Venda Cruzada:  <Select
        closeMenuOnSelect={false}
        name='vendaCruzada'
        value={DadoForm[0].vendaCruzada.map(item => ({
          value: item.id, 
          label: item.nome // Usamos o nome do produto como label
        }))}
        onChange={HandleInputChange}
        components={animatedComponents}
        defaultValue={false}
        isMulti
        options={productOptions.map(product => ({
          value: product.id, // Para garantir que a chave 'value' seja única, utilizamos 'id'
          label: `${product.nome}` // Exibe nome e categoria juntos
        }))}
      />
    </InputLabel>
   </div>
  )
}