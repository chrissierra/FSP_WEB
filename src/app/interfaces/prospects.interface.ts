export interface Prospectos {
    items: Item[];
}

export interface Item {
    id:           number;
    rut:          number;
    dv:           string;
    first_name:   string;
    last_name:    string;
    address:      Address;
    county:       Address;
    city:         Address;
    region:       Address;
    phone:        string;
    mail:         string;
    birth_date:   Date;
    state:        string;
    created_date: Date;
    updated_date: Date;
}

export enum Address {
    Empty = "",
    Test = "test",
}
