export interface OutstandingBalance {
    switch:            Switch;
    account_statement: AccountStatement;
}

export interface AccountStatement {
    customer_name:           string;
    monthly_installment:     string;
    total_amount_doubt:      string;
    min_refinancing:         string;
    min_renegotiation:       string;
    allow_negotiation_flag:  string;
    prepay_amount:           string;
    total_amount_collection: string;
    penalty_amount:          string;
    morosity_message:        string;
    additional_message:      string;
}

export interface Switch {
    status:           string;
    status_reference: string;
}
