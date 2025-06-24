export default class ResponseUtils {
    
    static hasStatus(data: {}) { 
       return data && data['resultType'] == 1 ? true : false;
    }

    static hasPayload(data:{}) {  
        return data && data['resultObject'] ? true : false ; 
    
    }
    
    static getStatus(data: {}) {
        if(ResponseUtils.hasStatus(data)) {
            return data['resultType'];
        }
        return null;

    }

    static getPayload(data:{}) {
        if(ResponseUtils.hasPayload(data)) {
            return data['resultObject'];
        }
        return null;
    }

    static isStatus200(data:{}) {
        console.log(ResponseUtils.getStatus(data) && ResponseUtils.getStatus(data) === 1 );
        return ResponseUtils.getStatus(data) && ResponseUtils.getStatus(data) === 1 ;
    }

    static isStatus404(data:{}) {
        return ResponseUtils.getStatus(data) && ResponseUtils.getStatus(data)===404;
    }

    static isStatus406(data:{}) {
        return ResponseUtils.getStatus(data) && ResponseUtils.getStatus(data)===406;
    }

    static isStatus409(data:{}) {
        return ResponseUtils.getStatus(data) && ResponseUtils.getStatus(data)===409;
    }

    static isStatus500(data: {}) { 
        return ResponseUtils.getStatus(data) && ResponseUtils.getStatus(data)===500;
     }

    static isSuccessAndPayload(data:{}) {
        return ResponseUtils.isStatus200(data) && ResponseUtils.hasPayload(data);
    }

}