interface AuthDetails {
    userName: string;
    isFirstLogin: boolean;
    isAuthenticated: boolean;
    token: string;
    logoutFunction: () => void;
    menu?: Menu[];
    roles: [];
    name: string;
    email: string;
    phone: string;
    firmName: string;
    firmStateId: string;
    exp: number;
    firmAlias: string;
    firmGSTIN: string;
    firmId: string;
    firmMainId: string;
    firmUserFullName: string;
    firmUserId: string;
    firmYearId: string;
    isFirstLogIn: string;
}

interface Menu {
    menuId: number;
    menuName: string;
    menuPath: string;
    mainMenuId?: number;
    menuIcon?: string;
    menus?: Menu[];
    displayInd?: boolean;
}

interface UserDetails {
    id?: number;
    userName: string;
    fullName: string;
    mobile: string;
    email: string;
    firm: FirmDetails;
    roles: Role[];
}

interface Role {
    id?: number;
    name: string;
    menus: Menu[];
}

interface FirmDetails extends Address {
    id: number;
    uid: string;
    name: string;
    type?: FirmType;
    phone?: string;
    mobile1?: string;
    mobile2?: string;
    email?: string;
    alias?: string;
    ltos: FirmLTO[];
    city: City;
    branches?: FirmDetails[];
}

interface FirmLTO {
    id?: number;
    prefix?: LTOPrefix;
    ltoNo?: string;
    order?: number;
}

interface Address {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
}

interface City extends Place {
    description?: string;
    district: District;
}

interface District extends Place {
    state: States;
}

interface States extends Place {
    code?: number;
    zone?: string;
    country: Country;
}

interface Country extends Place {
    continent?: string;
}

interface Place {
    id: number;
    name: string;
}

interface AppData {
    id: number;
    parentId: number;
    code: string;
    name: string;
}

interface cityPayload {

}


interface FirmType {
    id: number;
    name: string;
    category: FirmCategory;
    alias: string;
}

interface FirmCategory {
    id: number;
    name: string;
    isTypeRequired: boolean;
}

interface LTOPrefix {
    id: number;
    name: string;
    order: number;
    lto: LTO;
}

interface LTO {
    id: number;
    name: string;
    type: LTOType;
    firmType: FirmType;
    activeFlag: boolean;
    activationDate: string;
    terminationDate: string;
}

interface LTOType {
    id: number;
    name: string;
}