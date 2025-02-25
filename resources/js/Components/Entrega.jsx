import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
export default function Entrega({DadoForm, HandleInputChange})
{
  return(
    <div className='mt-3'>
    <InputLabel className='flex items-center'>
     <p>Peso (KG):</p>
     <TextInput 
     name="peso"
     id="peso"
     onChange={HandleInputChange}
     value={DadoForm[0].dimensao[0].peso}
     className="mt-1"
     placeholder="0"
     type="text"
     />
    </InputLabel>
    <InputLabel className='flex items-center'>
     <p>Dimensões (cm):</p> <div className='flex'>
     <TextInput  className="m-1"
     placeholder="comprim"
     name="comprimento"
    id="comprimento"
     value={DadoForm[0].dimensao[0].comprimento}
     onChange={HandleInputChange}
     />
     <TextInput  className="m-1"
     placeholder="Largura"
     name="largura"
     value={DadoForm[0].dimensao[0].largura}
     onChange={HandleInputChange}
     id="largura"
     />
     <TextInput  className="m-1"
      name="altura"
     id="altura"
     value={DadoForm[0].dimensao[0].altura}
     onChange={HandleInputChange}
     placeholder="Altura"/>
     </div>
    </InputLabel>
  </div>
  )
}