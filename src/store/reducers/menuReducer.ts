import { MenuTypes } from '../constants';

interface IReduxAction<T> {
    type: T;
    payload: any;
}

export interface IMenuState {
    styleView: boolean,
    menuData:any,
    filterData:any
}


export const initialState: IMenuState = {
    styleView: true,
    menuData:[],
    filterData:[]
}
const menuReducer = (state = initialState, action: IReduxAction<MenuTypes>) => {
    switch (action.type) {
        case MenuTypes.CHANGE_MENU_TYPE:
            //console.log("action.type", action.payload, state)
            return {...state, styleView: action.payload };
        case MenuTypes.SET_MENU_DATA:
            
            return {...state,menuData:action.payload}
             case MenuTypes.CHANGE_FILTER_DATA:
                 const array=[]
         for (let index = 0; index < state.menuData.length; index++) {
                const element = state.menuData[index];
               if (element.ci && element.ci.length>0) {
                   for (let index = 0; index < element.ci.length; index++) {
                    const elem = element[index];
                    console.log(elem);

                    // if(elem.id==action.payload){
                    //     console.log(elem);
                        
                    // }
                }
               } 
                
            }
            //console.log(array);
            
            return {...state,filterData:[]}
        default:
            
            return state;
    }
}
export default menuReducer;