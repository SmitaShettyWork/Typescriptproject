import * as dotenv from 'dotenv'
export const getEnvironmet=() =>{

    dotenv.config({
        override:true,
        path:`src/helper/env/.env.${process.env.ENV}`
    })

}