import { NavigationScreenProp } from 'react-navigation';

 export interface IMenuProps {
    styleView:boolean;
    onChangeMenuType(type:boolean):void;
    ongetMenuData():void; 
    onchangeplayItem(payload:any):void; 
    onchangeswipeablePanelActive(payload:boolean):void;
    menuReducer:any,
    navigation: NavigationScreenProp<any, any>,
    filterReducer: any,

} 
export interface IGanresProps {
    styleView:boolean;
    onChangeMenuType(type:boolean):void;
    ongetGanresData():void;
    menuReducer:any,
    ganresReducer:any,
    navigation: NavigationScreenProp<any, any>;

} 
export interface ICitiesProps {
    styleView:boolean;
    onChangeMenuType(type:boolean):void;
    onchangeFilterData(type:any):void;
    onGetCities():void;
    citiesReducer:any,
    menuReducer:any,
    navigation: NavigationScreenProp<any, any>;

}
export interface IRadioMenuElementProps {
    title:string,
    image:string,
    addInFavorite():void,
    isFavorite:boolean
}
export interface ICitiesMenuElementProps {
    info:ICitiesConnect,
    
}
export interface ICitiesConnect{
    pa:string,
    id:number
    // color?:string
}
export interface ISimpleSwitchProps{

}