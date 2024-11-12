import { Given,When,Then } from "@cucumber/cucumber"; // To make our import getting recognised by node js we have write the "require-module":["ts-node/register"]  in json file
import{chromium,Page,Browser} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";


         Given('a {string} to launch the google website', async function (url:string) {
         
                //await pageFixture.page.goto(process.env.BASEURL);-- this line gave the error so i have added as string in the below line
             await pageFixture.page.goto(process.env.BASEURL as string) ; 
              
         });

         When('searched for {string} keyword in the google search', async function (searchcontent:string) {
                console.log("test")
         });


         Then('verify the searchresult page with the title {string}', async function (expectedTitle:string) {
                console.log("test")
         });


         Given('a user searched the playwright in google', async function () {
                console.log("test")
         });

         When('Click on the required Playwright link', async function () {
                console.log("test")
         });

 

         Then('verify if we are landed in the playwright homepage with title {string}', async function (ExpectedHomePageTitle:string) {
                console.log("test")
         });



         When('in the homepage, search the doc with {string}', async function (content:string) {
                console.log("test")
         });



