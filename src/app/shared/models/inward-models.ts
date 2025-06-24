import { Company } from "./master-models";

export interface PurchaseEntry{
    
}

export interface InwardHead {
    inwardHeadId:number,
    company:Company,
    inwardHeadNo:string,
    inwardDate:Date,
    tranTypeName:string,
    invNo:string,
    invDate:Date,
    account:Account,
    mode:string,
    taxCategoryId:number,
    inwardStatus:number,
    inwardLrNo:string,
    inwardLrdate:Date,
    transport:any,
    inwardWaybillNo:string,
    inwardWaybillDate:Date,
    noOfCases:number,
    grsValue:number,
    discValue:number,
    disc1Value:number,
    taxValue:number,
    freightValue:number,
    otherAddDescription:string,
    otherAdd:number,
    otherAddAccId:number,
    otherDedDescription:string,
    otherDed:number,
    otherDedAccId:number,
    hamaliValue:number,
    netValue:number,
    rndValue:number,
    invValue:number,
    remarks:string,
    transportId:any,
    pretaxes:Pretax[]
}

export interface Pretax {
    id:number;
    tranAccId:number;
    taxCategoryId:number;
    taxSlabId:number;
    tax:number;
    preTaxValue:number;
    iPreTaxValue:number;
    ledpost:number;
    taxes:Tax[];
}

export interface Tax {
    id:number;
    taxAccId:number;
    taxSlabId:number;
    taxStakeId:number;
    taxStakeName:String;
    stakeContribution:number;
    stakeValue:number;
    iStakeValue:number;
    ledpost:number;
}

export interface Country {
    id: number;
    name: string;
    continent: string;
}

export interface State {
    id: number;
    code: number;
    name: string;
    zone: string;
    country: Country;
}

export interface District {
    id: number;
    name: string;
    state: State;
}

export interface City {
    id: number;
    description: string;
    name: string;
    district: District;
}

export interface Category {
    id: number;
    name: string;
    isTypeRequired: boolean;
}

export interface Type {
    id: number;
    category: Category;
    name: string;
    alias: string;
}

export interface Firm {
    id: number;
    uid: string;
    name: string;
    firmLtos?: any;
    addressLine1: string;
    addressLine2: string;
    addressLine3?: any;
    phone?: any;
    mobile1: string;
    mobile2?: any;
    email: string;
    city: City;
    alias: string;
    type: Type;
}