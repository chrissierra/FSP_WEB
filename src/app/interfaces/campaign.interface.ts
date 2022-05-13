export interface Campañas {
    items: Item[];
}

export interface Item {
    id:           number;
    name:         string;
    url_link:     string;
    url_img:      string;
    target:       string;
    state:        string;
    order:        number;
    created_date: Date;
    updated_date: Date;
}
