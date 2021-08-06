import React from 'react'

function Footer() {
    return (
       <div className="bg-gray-300 pb-5 pt-7 grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32">
           <div className="space-y-4 text-sm text-gray-800">
               <h5 className="font-bold">ABOUT</h5>
               <p>How Airbnb works</p>
               <p>Newsroom</p>
               <p>Airbnb 2021</p>
               <p>Investors</p>
               <p>Airbnb Plus</p>
               
           </div>
           <div className="space-y-4 text-sm text-gray-800">
           <h5 className="font-bold">COMMUNITY</h5>
               <p>Acessibility</p>
               <p>This is not a real site!</p>
               <p>It is a pretty awesome clone</p>
               <p>Referral accepted</p>
               <p>Papafam here</p>
           </div>
           <div className="space-y-4 text-sm text-gray-800">
           <h5 className="font-bold">HOST</h5>
               <p>Host your home</p>
               <p>Host an Online Experience</p>
               <p>Resource Centre</p>
               <p>Community Centre</p>
               <p>Host an Experience</p>
           </div>
           <div className="space-y-4 text-sm text-gray-800">
           <h5 className="font-bold">SUPPORT</h5>
               <p>Our COVID-19 Responses</p>
               <p>Neighbourhood</p>
               <p>Help Centre</p>
               <p>Cancellation Options</p>
               <p>Trust & Safety</p>
           </div>
       </div> 
    );
}

export default Footer
