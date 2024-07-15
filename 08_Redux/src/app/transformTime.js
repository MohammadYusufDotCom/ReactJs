import { createTransform } from 'redux-persist';

export const custumTransform = createTransform(
    (inboundState)=>{
        return {
            ...inboundState,
            _persistedAt: Date.now()
        }
    },
    (outboundState)=>{
        if(outboundState && outboundState._persistedAt){
            const EXPIRATION_TIME = 15*60*1000;
            const currentTime = Date.now()
            const persistedTime = outboundState._persistedAt;
            if(currentTime - persistedTime > EXPIRATION_TIME){
                delete outboundState._persistedAt;
                // return initialState;
                return undefined;
            }
        }
        else{
            return outboundState;
        }
    },
    {whitelist:['todo']}
)