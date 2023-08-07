import React, { useEffect, useState } from 'react';
import { Container, Label, Input, LabelUploud, ButtonProduct } from './styled';
import api from '../../../services/api';
import ReacSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from '../../../components';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push } = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue uma imagem', (value) => {
        return value?.length > 0;
      })
      // .test('fileSize', 'Carregue arquivos até 2mb', (value) => {
      //   return value[0]?.size <= 500000;
      // })
      .test('type', 'carregue apenas arquivos JPEG', (value) => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png';
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando novo produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar o produto',
    });

    setTimeout(() => {
      push('/listar-produtos');
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <>
      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Nome</Label>
            <Input type="text" {...register('name')} />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>

          <div>
            <Label>Preço</Label>
            <Input type="number" {...register('price')} />
            <ErrorMessage>{errors.price?.message}</ErrorMessage>
          </div>

          <div>
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
            <ErrorMessage>{errors.file?.message}</ErrorMessage>
          </div>

          <div>
            <Controller
              name="category"
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
            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </div>

          <ButtonProduct>Adicionar produto</ButtonProduct>
        </form>
      </Container>
    </>
  );
}

export default NewProduct;
