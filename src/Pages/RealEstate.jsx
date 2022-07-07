import React from 'react'
import project2 from '../Assets/ui/portfolio9.png'

const RealEstate = () => {
  return (
    <div className='relative'>
        <div className="py-24 bg-primary text-center relative">
            <h1 className="text-2xl md:text-4xl font-semibold text-white md:w-2/3 mx-auto mb-20">How i built a <span className='text-secondary'>Real Estate</span> Web Application with Nextjs, Chakra UI, and RapidAPI</h1>
            <a href='https://real-estate-e4jnrednn-lakabosch-gmailcom.vercel.app/' className='cursor-hover'>
                <div className="relative">
                    <img src={project2} alt="" className='w-1/2 mx-auto left-full rounded-lg' />
                </div>
            </a>
        </div>
        <div className="mx-auto w-11/12 md:w-9/12">
        <div className='my-20'>
            <p>Realance will be the online office of Realance Homes and Property, A real estate firm with more than 5 offices in Africa. Visitors and buyers can view hundreds of property images, videos, and features before they ever need to schedule a live tour. All property features (bath, rooms, location, price, size and more) for each of the properties are displayed.</p>
            <p className='mt-4'>Visitors will be able to see details and furnished status of the properties. Buyers will be make to schedule a direct call or reach out to us through the contact us section.</p>

            <p className='mt-4'>The Definition of Done of the team included everything necessary for the team to release to production at least at the end a Sprint. It includes rules such as:

            <ul className='my-4'>
                <li className='ml-12 list-disc'>Web-pages don’t have temporary texts or images;</li>
                <li className='ml-12 list-disc'>Web-pages work in recent versions of Firefox, Chrome, and Safari and on a selection of mobile devices;</li>
                <li className='ml-12 list-disc'>Every item is verified against relevant and common OWASP attacks. This was automated to some extent in later Sprints;</li>
                <li className='ml-12 list-disc'>The code for an item is peer-reviewed by someone else in the team. Someone else in the team verified that the item worked as specified;</li>
                <li className='ml-12 list-disc'>The item is deployed to production.</li>
            </ul>
            </p>

            <div>
                <h1 className='text-bold'>Product & development strategy</h1>
                <p className='py-4'>Before work began, I used a story map to create a rough outline of the work needed. Every column in the story map involved a certain step in the flow (e.g. homepage to the listing page, listing to the property page, and so on). From there, I devised a rough strategy for the first Sprints:</p>

                <ul className='my-4'>
                <li className='ml-12 list-disc'>First focus on building a simple-as-possible website so we could at least present a site map of how the web app will look like;</li>
                <li className='ml-12 list-disc'>Then focus on building a dashboard with navigational links to major pages;</li>
                <li className='ml-12 list-disc'>Then focus on building a footer with quick links to major pages</li>
                <li className='ml-12 list-disc'>Then focus on creating blanc pages to act as placeholder for the coming pages</li>
                <li className='ml-12 list-disc'>This strategy helped inform the goals for the first dozen user stories. The Product Backlog was constantly revised as I learned more.</li>
                </ul>

                Since it is a fast tracked project, i determined to ship to production as frequently as possible.

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 1: “Set up deployment environment and deploy an empty site to production”</h1>
                This will enable everyone involved to have access to the website and provide immediate feedback as built. This means that I had to be up and running and open to recieve and implement feedbacks. 

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                    <li className='ml-12 list-disc'>create a project on Jira/Atlassian</li>
                    <li className='ml-12 list-disc'>Create a Sprint Backlog and Product Backlog;</li>
                    <li className='ml-12 list-disc'>Set up the production environment;</li>
                    <li className='ml-12 list-disc'>Set up repository to commits;</li>
                    <li className='ml-12 list-disc'>Before deploying to production, automatically back-up ;</li>
                    <li className='ml-12 list-disc'>Create and deploy an empty Nextjs, React website that connects with an empty API to show the version of the deployed release;</li>
                </ul>
            

                I ended up adding the header component which includes a logo and contact information to the website, as well as the version of the deployment in the footer. and this was good.

                <p>I proceeded to gather feedback on the visual designs created on the homepage and used this information to review my sprints. </p>

                Now, i was well equipped with the visual design and focus on refining the homepage.
            

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 2: “Show featured property on the homepage”</h1>
                For the second Sprint, I decided to show 6 of the featured properties on the homepage. And potential buyers can click on any of the properties straight from the homepage. 

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                <li className='ml-12 list-disc'>Configure Chakra UI for styling the elements</li>
                <li className='ml-12 list-disc'>write code to loop through and display the top 6 feautured property</li>
                <li className='ml-12 list-disc'>Implement a page where visitors can see details of a selected product</li>
                Test homepage in modern browsers;
                Deploy to production ;
                What we discovered during the Sprint
                </ul>

                <p><span className='font-semibold'> LESSON's LEARNT: </span>
                After getting feedback during sprint review, i discovered that featured products on the homepage whould be simple enough. I also got a better sense of how to organize the product information.</p>

                <h1 className='font-bold text-lg my-8'>The goal for Sprint 3: “Property page with information”</h1>
                The layout from top to bottom was a) Navbar, b) horiontally scrollable property images as header, c) property information and d) footer
                Customers could see different views of the houses, various information such as prices, phone nos, perimeter of house, location, furnished status and many more.

                Below are some of the items that ended up on the Sprint Backlog:

                <ul className='my-4'>
                <li className='ml-12 list-disc'>Scrollable views of houses</li>
                <li className='ml-12 list-disc'>House information</li>
                <li className='ml-12 list-disc'>navigable links</li>
                <li className='ml-12 list-disc'>show videos if available</li>
                </ul>


                <h1 className='font-bold text-lg my-8'>The goal for Sprint 4: “Listing Page with filtering functionality”</h1>
                Now that the homepage had been completed the homepage, I implemented the listing page to display all properties according to user's purpose. This page has various filtering states that loads properties as per selection.

                <ul className='my-4'>
                <li className='ml-12 list-disc'>Allow visitors to search the catalog by keyword and type of product;</li>
                <li className='ml-12 list-disc'>Present only information that matches users selection</li>
                <li className='ml-12 list-disc'>Fix all links to property page.</li>
                </ul>
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

export default RealEstate