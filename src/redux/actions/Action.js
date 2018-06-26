import store from '../store/store';

//redux Action
const Action={
    
    updateCustomerRefNum:(customerRef)=>(
        store.dispatch({type:'updateRefNum',customerRefNum:customerRef})
    ),
    resetCustomerInfo:()=>(
    store.dispatch({type:'resetCustomerInfo'})
    )
}

export  default Action;