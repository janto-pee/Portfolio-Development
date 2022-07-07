import React from 'react'
import cryptoboard from "../../Assets/ui/portfolio2.png"

const Cryptoboard = () => {
  return (
    <div>
      <div className="py-24 bg-primary text-center relative">
            <h1 className="text-2xl md:text-4xl font-semibold text-white md:w-2/3 mx-auto mb-20">How i built a <span className='text-secondary'>Cryptocurrency Dashboard</span> with Reactjs, AntDesign UI, and RapidAPI</h1>
            <a href="https://cryptoboard-app.netlify.app/">
              <div className="relative">
                  <img src={cryptoboard} alt="" className='w-1/2 mx-auto left-full rounded-lg' />
              </div>
            </a>
        </div>
        <div className="mx-auto w-11/12 md:w-9/12">
        <div className='my-20'>
            <p>Cryptoboard is the latest cryptocurrency web application built with Reactjs, Ant Design, Redux Toolkit, and RapidAPI. Due to a rise in the popularity of cryptocurrencies, cryptoboard was developed to solve accessibility problems. It provides real-time data about more than 90 cryptocurrencies which helps visitors in good decision-making.  However, there is more.</p>
            <p className='mt-4'>Visitors will be able to see details, trends, and historical data about each cryptocurrency. </p>

            <p className='mt-4'>The Definition of done is that the product is fully developed and has everything needed to release to production. It includes rules such as:

            <ul className='my-4'>
                <li className='ml-12 list-disc'>All webpages page are indexed and made accessible</li>
                <li className='ml-12 list-disc'>Web pages don’t have dead links or buttons that don’t work;</li>
                <li className='ml-12 list-disc'>Every item is verified against relevant and common OWASP attacks.</li>
                <li className='ml-12 list-disc'>The code for an item is peer-reviewed by someone else.</li>
                <li className='ml-12 list-disc'>The item is deployed to production.</li>
            </ul>
            </p>

            <div>
                <h1 className='text-bold'>Product & development strategy</h1>
                <p className='py-4'>The first thing I did was to use a user story to draw a rough outline of the work. Every column in the story map involved a certain step in the flow (e.g. dashboard, cryptocurrency listing, crypto news, exchanges, and more). From there, I devised a rough strategy for the first Sprints:</p>

                <ul className='my-4'>
                <li className='ml-12 list-disc'>First focus on building a simple-as-possible website so we could at least present a site map of how the web app will look like;</li>
                <li className='ml-12 list-disc'>Then focus on building a dashboard with navigational links to major pages;</li>
                <li className='ml-12 list-disc'>Then focus on building a footer with quick links to major pages</li>
                <li className='ml-12 list-disc'>Then focus on creating blanc pages to act as placeholder for the coming pages</li>
                </ul>
                This strategy helped inform the goals for the first dozen user stories. The Product Backlog was constantly revised as I learned more.

                As usual, I determined to ship to production as frequently as possible.

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 1: “Set up deployment environment and deploy an empty site to production”</h1>
                This will enable everyone involved to have access to the website and provide immediate feedback as built. This means that I had to be up and running and open to receiving and implementing feedback. 

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                    <li className='ml-12 list-disc'>create a project on Jira/Atlassian</li>
                    <li className='ml-12 list-disc'>Create a Sprint Backlog and Product Backlog;</li>
                    <li className='ml-12 list-disc'>install dependencies and set up the production environment;</li>
                    <li className='ml-12 list-disc'>Set up repository to commits;</li>
                    <li className='ml-12 list-disc'>Before deploying to production, automatically back-up ;</li>
                    <li className='ml-12 list-disc'>Create and deploy an empty Nextjs, React website that connects with an empty API to show the version of the deployed release;</li>
                </ul>
            

                I installed all dependencies and progressed work on the homepage. 
                Also, I added the sidebar component which includes a list of menu items as specified by AntDesign, including the version of the deployment in the footer. and this was good.


                <p>I proceeded to gather feedback on the visual designs created on the dashboard and then used this information to review my sprints. </p>

                Now,I was well equipped with the visual design and focus on refining the dashboard.
            

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 2: “Set up Redux Toolkit and Fetch Data from API”</h1>
                For the second Sprint, I decided to fetch data from coinranking API. The data received will be used on the frontend. Then, Redux Toolkit was used for state management.

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                <li className='ml-12 list-disc'>Configure redux toolkit</li>
                <li className='ml-12 list-disc'>test coinranking API</li>
                <li className='ml-12 list-disc'>make GET request</li>
                <li className='ml-12 list-disc'>create components for cryptocurrencies</li>
                <li className='ml-12 list-disc'>loop through cryptocurrencies and style accordingly</li>
                <li className='ml-12 list-disc'>Deploy to production</li>
                <li className='ml-12 list-disc'>What we discovered during the sprint</li>
                </ul>

                <p><span className='font-semibold'> LESSON's LEARNT: </span>
                After getting feedback during the sprint review, I discovered that I needed to differentiate between cryptocurrencies whose value increased and decreased. I used red for decrease and green for increase.</p>

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 3: “Fetch and Style Cryptocurrency News”</h1>
                The news component was created and a GET request was made to the bing API to fetch the latest cryptocurrency news.
                Then, the array of news was looped through and styled accordingly.

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                <li className='ml-12 list-disc'>list of news</li>
                <li className='ml-12 list-disc'>cryptocurrency information</li>
                <li className='ml-12 list-disc'>navigable links</li>
                </ul>


                <h1 className='font-bold text-lg my-8'>The goal for Sprint 4: “Cryptocurrency Details Page”</h1>
                Now that the dashboard is new completion, I implemented a details page for each of the cryptocurrencies. This page has a chart showing the historical data of the cryptocurrencies. Other information about the cryptos is shown on this page with links to various sites.

                <p> <span className='font-semibold'> LESSON's LEARNT: </span>

                The flow of Sprint Goals. 
                After a couple of completed sprints, this project came to an end and it was such an interesting project. I am proud to have done this project.
                </p>
                </div>

        </div>
        </div>
        
</div>
  )
}

export default Cryptoboard