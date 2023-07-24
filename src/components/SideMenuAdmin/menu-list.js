import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import paths from '../../constants/paths';

const ListLink = [
  {
    icon: LocalMallIcon,
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
  },

  {
    icon: ShoppingCartIcon,
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
  },
  {
    icon: AddShoppingCartIcon,
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
  },
];

export default ListLink;
