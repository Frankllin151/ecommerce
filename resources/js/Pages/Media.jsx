import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import { router } from '@inertiajs/react';

const mediaTypes = ['Imagens', 'Arquivos', 'Planilhas', 'Vídeos', 'Áudios'];
const mediaDates = ['Julho 2024', 'Abril 2023', 'Janeiro 2023', 'Dezembro 2022'];

const Media = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: 'Imagens', date: 'Julho 2024', src: 'https://picsum.photos/150/150?1' },
    { id: 2, type: 'Arquivos', date: 'Abril 2023', src: 'https://picsum.photos/150/150?2' },
    { id: 3, type: 'Planilhas', date: 'Janeiro 2023', src: 'https://picsum.photos/150/150?3' },
    { id: 4, type: 'Vídeos', date: 'Dezembro 2022', src: 'https://picsum.photos/150/150?4' },
    // Adicione mais itens conforme necessário
  ]);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    
  };

  const handleMediaClick = (id) => {
    setSelectedMedia((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((mediaId) => mediaId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    setMediaItems((prevItems) =>
      prevItems.filter((item) => !selectedMedia.includes(item.id))
    );
    setSelectedMedia([]);
  };

  const filteredMedia = mediaItems.filter(
    
    (item) =>
      (selectedType === '' || item.type === selectedType) &&
      (selectedDate === '' || item.date === selectedDate) &&
      item.type.includes(searchTerm)
      
  );

 const handleUpload = () => {
  setIsUploadModalOpen(true);
};

const handleUploadFileChange = (e) => {
  setUploadFile(e.target.files[0]);
};

const handleUploadSubmit = (e) => {
  e.preventDefault();
  if (uploadFile) {
    const formData = new FormData();
    formData.append('file', uploadFile);

    router.post('/media/postarquivo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: () => {
        setIsUploadModalOpen(false);
        setUploadFile(null);
      },
    });
  }
};
  return (
    <AuthenticatedLayout>
      <div className="p-6 bg-white shadow-sm sm:rounded-lg">
       <div className='flex'>
       <h1 className="text-2xl mb-4">Gerenciamento de Mídia</h1>
       <div className='mb-4 ml-2'>
       <PrimaryButton  onClick={handleUpload}>Adicionar Nova mídia</PrimaryButton>
       </div>
       </div>
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <div>
              <InputLabel for="mediaType" value="Tipo de Mídia" />
              <select
                id="mediaType"
                value={selectedType}
                onChange={handleTypeChange}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Todos</option>
                {mediaTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <InputLabel for="mediaDate" value="Data" />
              <select
                id="mediaDate"
                value={selectedDate}
                onChange={handleDateChange}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Todas</option>
                {mediaDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <InputLabel for="search" value="Pesquisar" />
            <TextInput
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Pesquisar..."
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <PrimaryButton onClick={handleDeleteSelected} disabled={selectedMedia.length === 0}>
            Excluir Selecionados
          </PrimaryButton>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className={`border p-2 rounded cursor-pointer ${
                selectedMedia.includes(item.id) ? 'border-red-500' : 'border-gray-300'
              }`}
              onClick={() => handleMediaClick(item.id)}
            >
              <img src={item.src} alt={`Mídia ${item.id}`} className="w-full h-32 object-cover" />
              <p className="text-center mt-2">{item.type}</p>
              <p className="text-center text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal show={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)}>
        <form onSubmit={handleUploadSubmit} encType="multipart/form-data">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Upload de Mídia</h2>
            <InputLabel for="uploadFile" value="Selecione o arquivo" />
            <input
              type="file"
              id="uploadFile"
              onChange={handleUploadFileChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end p-6">
            <PrimaryButton onClick={() => setIsUploadModalOpen(false)} className="mr-2">
              Cancelar
            </PrimaryButton>
            <PrimaryButton type="submit">Upload</PrimaryButton>
          </div>
        </form>
      </Modal>
    </AuthenticatedLayout>
  );
};

export default Media;