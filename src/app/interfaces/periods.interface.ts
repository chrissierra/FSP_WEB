export interface Period {
  items: Item[];
}

export interface Item {
    fecha_estado_cuenta: string | Date;
    nombre: string;
    utilizado_compra: string;
    disponible_compra: string;
    total_avance: string;
    utilizado_avance: string;
    disponible_avance: string;
}
