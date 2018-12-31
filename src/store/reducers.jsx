import { ADD_CITY_DATA} from './actions';

const initState = {
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
}

const reducer = (state=initState, action) => {
    console.log('in rducer', action.payload)
    
    switch(action.type){
        case ADD_CITY_DATA:
            const newtemp = action.payload.main.temp;
            const newcity = action.payload.name;
            const newcountry = action.payload.sys.country;
            const newhumid = action.payload.main.humidity;
            const newdescription = action.payload.weather[0].description;
            return {
                ...state,
                temperature:newtemp,
                city: newcity,
                country: newcountry,
                humidity:newhumid,
                description: newdescription
            }
        default:
            return state
    }

}


export default reducer