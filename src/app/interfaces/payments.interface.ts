export interface Pagos {
    items: Item[];
}

export interface Item {
    id:                   number;
    payment_date:         Date;
    rut:                  string;
    payment_amount:       number;
    payment_channel:      PaymentChannel;
    payment_operation_id: string;
    payment_codaut:       string;
    state:                State;
    created_date:         Date;
    updated_date:         Date;
    response_code:        string;
    response_switch:      ResponseSwitch;
    voucher:              string;
}

export enum PaymentChannel {
    Webpay = "WEBPAY",
}

export enum ResponseSwitch {
    Empty = "",
    The00 = "00",
    The01 = "01",
}

export enum State {
    Anulado = "ANULADO",
    Aprobado = "APROBADO",
    EnProceso = "EN-PROCESO",
    Fallida = "FALLIDA",
    Iniciado = "INICIADO",
    Rechazado = "RECHAZADO",
}
