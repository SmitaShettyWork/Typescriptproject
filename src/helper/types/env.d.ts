// this file has the type defination file which will help us to suggestion for process.env.browser or any other value
//d.ts file are called type declaration files S
export{};

declare global{
    namespace NodeJS{
        interface ProcessEnv{


        BROWSER:"chrome"|"firefox"|"webkit",
        ENV:" staging"|"prod"|"test",
        BASEURL: string,
        HEAD:"true"|"false"  
        }
    }
}