import { menu } from 'src/app/shared/models/menu-json';
import * as jwt_decode from 'jwt-decode';

export default class AppCoreTransformer {
    
    static getAuthDetails(payload:any) {
        let authDetails:AuthDetails=null;

         if(payload && payload.token) {
            authDetails={} as AuthDetails;
            authDetails.token=payload.token;
            authDetails.isAuthenticated=true;
            let decodedToken=jwt_decode(payload.token);
            if(decodedToken) {
                authDetails.isFirstLogin=decodedToken.isNew?decodedToken.isNew:false;
                authDetails.userName=decodedToken.firmUserName;
                authDetails.name=decodedToken.name;
                authDetails.roles=decodedToken.roles;
                authDetails.email=decodedToken.firmUserEmail;
                authDetails.phone=decodedToken.firmUserMobile;
                authDetails.firmName=decodedToken.firmName;
                authDetails.firmStateId= decodedToken.firmStateId;
                authDetails.exp= decodedToken.exp;
                authDetails.firmAlias= decodedToken.firmAlias;
                authDetails.firmGSTIN= decodedToken.firmGSTIN;
                authDetails.firmId= decodedToken.firmId;
                authDetails.firmMainId= decodedToken.firmMainId;
                authDetails.firmUserFullName= decodedToken.firmUserFullName;
                authDetails.firmUserId= decodedToken.firmUserId;
                authDetails.firmYearId= decodedToken.firmYearId;
                authDetails.isFirstLogIn= decodedToken.isFirstLogIn;
                //authDetails.menu=[...menu];
                if(payload.menu) {
                    authDetails.menu=[...payload.menu];
                }
            }
        }
        
        // if(payload && payload.tokenType && payload.accessToken) {
        //     authDetails={} as AuthDetails;
        //     authDetails.token=payload.tokenType+" "+payload.accessToken;
        //     authDetails.isAuthenticated=true;
        //     let decodedToken=jwt_decode(payload.accessToken);
        //     if(decodedToken) {
        //         authDetails.isFirstLogin=decodedToken.isNew?decodedToken.isNew:false;
        //         authDetails.userName=decodedToken.userName;
        //         authDetails.name=decodedToken.name;
        //         authDetails.roles=decodedToken.roles;
        //         authDetails.email=decodedToken.email;
        //         authDetails.phone=decodedToken.phone;
        //         authDetails.firmName=decodedToken.firmName;
        //         //authDetails.menu=[...menu];
        //         if(payload.menu) {
        //             authDetails.menu=[...payload.menu];
        //         }
        //     }
        // }
        return authDetails;
    }

    static getAppData(payload:any) {
        let appDataArray:AppData[]=null;
        if(payload) {
            appDataArray=[] as AppData[];
            payload.forEach(data => {
                let appData={} as AppData;
                appData.id=data.id;
                appData.code=data.code;
                appData.name=data.name;
                appDataArray.push(appData);
            });    
        }
        return appDataArray;
    }

    static getUserFirmDetails(payload:any) {
        let userFirmDetails:UserDetails | UserDetails[]=null;
        if(payload) {
            if(payload instanceof Array) {
                userFirmDetails= [...payload].map(userDetailsItem=>{return {...userDetailsItem} as UserDetails});
            } else {
                userFirmDetails={...payload} as UserDetails;
            }
        }
        return userFirmDetails;
    }

    static getRoles(payload:any) {
        let roles:Role | Role[]=null;
        if(payload) {
            if(payload instanceof Array) {
                roles= [...payload].map(role=>{return {...role} as Role});
            } else {
                roles={...payload} as Role;
            }
        }
        return roles;
    }

    static getMenus(payload:any) {
        let menus:any | any[]=null;
        if(payload) {
            if(payload instanceof Array) {
                menus= [...payload].map(menu=>{return {...menu} as any});
            } else {
                menus={...payload} as any;
            }
        }
        return menus;

    }
}