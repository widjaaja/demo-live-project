export interface LoginResponse {
    success: String,
    statusDetails: String
    userName: String

}

export interface AuthOTPGeneration {
    success: string,
    token: string,
    client: string
}

export interface CreateEditPromo {
    promo_code: String,
    addCashOnWalletCreate: boolean,
    isActive: boolean,
    max_cashback: number,
    onWalletCreate: boolean,
    min_bill: number,
    expiry: number,
    promo_percent: number,
    service_id: String,
    partner_id: String
}

export interface QueryPromo{
    promo_code: String,
    addCashOnWalletCreate: boolean,
    isActive: boolean,
    max_cashback: number,
    onWalletCreate: boolean,
    min_bill: number,
    expiry: number,
    promo_percent: number,
    promo_id: number,
}
export interface CreateCategory {
    name: String,
    super_cat_id: String,
}
export interface CreateSuperCategory {
    name: String,
}
export interface CreateSubCategory {
    name: String,
    cat_id: String,
}
export interface CreatePackagingCategory {
    name: String,
}
export interface CreateEditBilling {
    unit: String,
    type: String,
    promo_id: String,
    commission_id: String,
    partner_id: String,
}