

export type RegisterStudentParams = {
    student:{
    name: string,
    email:string,
    password:string,
    instituion:string
    mobile:string
    }
}

export type StudentLoginParams = {
    student:{
    email:string,
    password:string,
    }
}

export type registerOrganizationParams = {
    organization:{
        orgName:string
        orgEmail:string
        orgPassword:string
        orgCategory:string
        orgPhone:string
        orgHq:string
    }
}

export type LoginOrganizationParams = {
    organization:{
        orgEmail:string
        orgPassword:string
    }
}



export type OrgCategoryParams = {
    categoryName: string
}

export type createServiceParams = {
    service:{
        serviceName:string,
         serviceCategory:string
    }
}


export type CreateServiceCategoryParams = {
    category:{
        name: string
    }
}