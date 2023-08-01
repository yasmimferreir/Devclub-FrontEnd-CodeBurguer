import React, { useEffect, useState } from 'react';
import { Container, Label, Input, LabelUploud, ButtonProduct } from './styled';
import api from '../../../services/api';
import ReacSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      console.log(data);
      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <>
      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />

          <Label>Preço</Label>
          <Input type="number" {...register('price')} />

          <LabelUploud>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
              }}
            />
          </LabelUploud>

          <Controller
            name="category_id"
            control={control}
            render={({ field }) => {
              return (
                <ReacSelect
                  {...field}
                  className="select"
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categorias"
                />
              );
            }}
          ></Controller>

          <ButtonProduct>Adicionar produto</ButtonProduct>
        </form>
      </Container>
    </>
  );
}

export default NewProduct;
