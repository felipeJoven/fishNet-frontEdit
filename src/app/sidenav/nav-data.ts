import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'welcome',
    icon: 'fal fa-home',
    label: 'Bienvenido'
  },
  {
    routeLink: 'unidad',
    icon: 'fa fa-product-hunt',
    label: 'Unidad Productiva',
    items: [
      {
        routeLink: 'unidad/consultar',
        label: 'Consultar'
        },
      {
      routeLink: 'unidad/registropes',
      label: 'Registro de Pesca'
      },
      {
        routeLink: 'unidad/crear-unidad',
        label: 'Crear Unidad Productiva'
        }
    ]
  },
  {
    routeLink: 'inventario',
    icon: 'fa-solid fa-boxes-stacked',
    label: 'Inventario de Alimento',
    items:[
      {
        routeLink: 'inventario/consultar-alimento',
        label: 'Consultar Tipo de Alimentos'
      },
      {
        routeLink: 'inventario/informe',
        label: 'Informe de Entrada y Salida'
      },
      {
        routeLink: 'inventario/consultar-entrada',
        label: 'Consultar Entrada'
      },

      {
        routeLink: 'inventario/consultar-salida',
        label: 'Consultar Salida'
      },

    ]
  },
  {
    routeLink: 'proveedor',
    icon: 'fal fa-home',
    label: 'Proveedores',
    items: [
      {
        routeLink: 'proveedor/consultar',
        label: 'Consultar'
      },
      {
        routeLink: 'proveedor/crear-proveedor',
        label: 'Agregar Proveedor'
      },
    ]
  },
  {
    routeLink: 'lote',
    icon: 'fa fa-product-hunt',
    label: 'Lote  ',
    items: [
      {
        routeLink: 'lote/consultar',
        label: 'Consultar lote'
        },
      {
      routeLink: 'lote/crear-lote',
      label: 'Crear-lote'
      }

    ]
  },
  {
    routeLink: 'especies',
    icon: 'fal fa-home',
    label: 'Especies',
    items: [
      {
        routeLink: 'especies/consultar',
        label: 'Consultar Especies'
      },
      {
        routeLink: 'especies/registro-especies',
        label: 'Registrar Especies'
      },
    ]
  },

];
