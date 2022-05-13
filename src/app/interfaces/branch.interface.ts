export interface Sucursales {
    items: Item[];
}

export interface Item {
    id:           number;
    name:         string;
    address:      string;
    county:       string;
    city:         string;
    region:       string;
    latitude:     string;
    longitude:    string;
    info:         string;
    created_date: Date;
    updated_date: Date;
}
