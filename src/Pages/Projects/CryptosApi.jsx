import React from 'react'
import cryptosAPI from "../../Assets/ui/API.png"

const CryptosApi = () => {
  return (
    <div>
      <div className="py-24 bg-primary text-center relative">
            <h1 className="text-2xl md:text-4xl font-semibold text-white md:w-2/3 mx-auto mb-20">How i developed a <span className='text-secondary'>REST API</span> with Nodejs, Express and MongoDB</h1>
            <a href="https://github.com/janto-pee/Cryptocurrency-REST-API">
              <div className="relative">
                  <img src={cryptosAPI} alt="" className='w-1/2 mx-auto left-full rounded-lg' />
              </div>
            </a>
            
        </div>
        <div className="mx-auto w-11/12 md:w-9/12">
        <div className='my-20'>
            <p>Cryptolance is a cryptocurrency REST API built with Nodejs, Expressjs, MongoDB, and Mongoose. Due to the rise in the adoption of the microservice architecture where products are built as modular components of services with API as a communication mechanism between the various services, there is a need for a robust and secure API. </p>
            <p className='mt-4'>This API can perform CREATE, READ, UPDATE & DELETE (CRUD) operations.</p>
            <p className='mt-4'>Users will be able to query a list of data, add to the list of data, update a cryptocurrency or remove from the cryptocurrency list</p>

            <p className='mt-4'>The Definition of done is that the product is fully developed and has everything needed to release to production. It includes rules such as:

            <ul className='my-4'>
                <li className='ml-12 list-disc'>Create Operation</li>
                <li className='ml-12 list-disc'>Read Operation</li>
                <li className='ml-12 list-disc'>Update Operation;</li>
                <li className='ml-12 list-disc'>Delete Operation</li>
                <li className='ml-12 list-disc'>Deployment to Production</li>
            </ul>
            </p>

            <div>
                <h1 className='text-bold'>Product & development strategy</h1>
                <p className='py-4'>The first thing I did was to lay out a story of what the end product will look like and how I want users to use the API. Every column in the story map involved a certain step in the flow (e.g. setup, MongoDB Atlas account, express server, and dependencies). From there, I devised a rough strategy for the first Sprints and created the first sprint</p>

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 1: “NPM INIT & DEPENDENCIES”</h1>
                I initialized the node package manager and installed all necessary dependencies such as express, dotenv, nodemon and mongoose. I created the index file and run with nodemon so that the API reloads automatically on save.

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                    <li className='ml-12 list-disc'>create a project on Jira/Atlassian</li>
                    <li className='ml-12 list-disc'>Create a Sprint Backlog and Product Backlog;</li>
                    <li className='ml-12 list-disc'>Set up a repository to commits;</li>
                    <li className='ml-12 list-disc'>install dependencies</li>
                    <li className='ml-12 list-disc'>setup express server</li>
                </ul>
            

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 2: “Database Integration & Models”</h1>
                For the second Sprint, I created a new account on the MongoDB cloud platform and connected using mongoose(mongoose.connect). I also created Models(schemas) which represent how the API will look.

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                <li className='ml-12 list-disc'>Create MongoDB account</li>
                <li className='ml-12 list-disc'>Connect with mongoose</li>
                <li className='ml-12 list-disc'>Use dotenv for security</li>
                <li className='ml-12 list-disc'>Create schemas with mongoose</li>
                
                </ul>

                <p><span className='font-semibold'> LESSON's LEARNT: </span>
                For connection security, I used dotenv as an environmental variable to save the mongoDB username and password  which ordinarily would have been exposed</p>

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 3: “ROUTES & CONTROLLERS”</h1>
                I proceeded to create the CRUD routes. I also created a GET request to get a single cryptocurrency from the list of cryptocurrencies. For simplicity, I created a controller file to make the codes easy to read.

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                <li className='ml-12 list-disc'>Routes</li>
                <li className='ml-12 list-disc'>Controllers</li>
                <li className='ml-12 list-disc'>Test each route</li>
                </ul>


                <h1 className='font-bold text-lg my-8'>The goal for Sprint 4: “TESTING & POSTMAN”</h1>
                Now that the dashboard is completion, I tested the routes. I also used postman to test all the requests before deployment.
                <p> <span className='font-semibold'> LESSON's LEARNT: </span>

                A step by step process help deploy the restAPI easily and swiftly
                </p>
                </div>

        </div>
        </div>
    </div>
  )
}

export default CryptosApi