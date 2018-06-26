const customerInfo={customerRef:null}
const customer=(state=customerInfo,action)=>{
  
    switch(action.type){

        case 'updateRefNum':
        console.log(action)
        return{...state,...{customerRef:action.customerRefNum}}

        case 'resetCustomerInfo':
        console.log(action)
        return {...state,...{customerRef:null}}

        default:
        return state;

    }  
     
}

export default customer;
    