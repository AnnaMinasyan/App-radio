import { FilterTypes } from '../constants';

interface IReduxAction<T> {
    type: T;
    payload: any;
}

export interface IFilterState {
    isFavorite:boolean,
    swipeablePanelActive:boolean | null,
    playItem:any,
    isLooking:boolean
}


export const initialState: IFilterState = {
    isFavorite:false,
    swipeablePanelActive:null,
    playItem:{},
    isLooking:false,
}
const filterReducer = (state = initialState, action: IReduxAction<FilterTypes>) => {
    switch (action.type) {
        
        case FilterTypes.CHANGE_IS_FAVORITE:
            
            return {... state,isFavorite:!state.isFavorite} 
        case FilterTypes.CHANGE_IS_LOOKING:
            
            return {... state,isLooking:!state.isLooking} 
        case FilterTypes.CHANGE_SWIPEABLEPANELACTIVE:
            console.log("action.payload",action.payload);
            
            return {... state,swipeablePanelActive:action.payload} 
        case FilterTypes.CHANGE_PLAY_ITEM:
            return {... state,playItem:action.payload} 
        default:
            return state;
    }
}
export default filterReducer;