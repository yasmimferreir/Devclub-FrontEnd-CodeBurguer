import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import paths from "../../constants/paths";

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

];

export default ListLink;
