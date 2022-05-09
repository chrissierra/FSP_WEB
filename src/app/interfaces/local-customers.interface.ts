export interface LocalCustomers {
    items: Item[];
}

export interface Item {
    id:            number;
    rut:           number;
    dv:            string;
    first_name:    string;
    last_name:     string;
    address:       string;
    county:        string;
    city:          string;
    region:        string;
    phone:         string;
    mail:          string;
    birth_date:    Date;
    state:         string;
    eecc_dispatch: EeccDispatch;
    created_date:  Date;
    updated_date:  Date;
}

export enum EeccDispatch {
    Asd = "asd",
    Email = "EMAIL",
    SMS = "SMS",
    Test = "test",
}
