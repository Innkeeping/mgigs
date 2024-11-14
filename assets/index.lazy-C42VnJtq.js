import{r,j as e,c as h}from"./index-CNWP7TEN.js";import{N as g}from"./Navbar-CChhFCP0.js";const j=({setFilter:s})=>{const[t,l]=r.useState(""),a=n=>{l(n.target.value),s(n.target.value)};return e.jsx("div",{className:"card rounded-md card-side bg-base-100 shadow-xl w-fit h-fit sticky top-4 mx-auto border border-white",children:e.jsxs("div",{className:"card-body items-center",children:[e.jsx("h1",{className:"card-title text-1xl pb-2 pt-4",children:"Welcome to mGigs"}),e.jsx("h2",{className:"card-subtitle mb-4",children:"Find your next gig here!"}),e.jsx("input",{type:"text",className:"input input-bordered input-sm w-full mt-2",placeholder:"Search by title",value:t,onChange:a}),e.jsxs("div",{className:"flex flex-col justify-center mt-2",children:[e.jsxs("div",{className:"flex flex-wrap gap-2 w-full justify-center mb-2",children:[e.jsx("button",{className:"btn btn-sm btn-primary hover:bg-primary-focus",children:"New"}),e.jsx("button",{className:"btn btn-sm btn-secondary hover:bg-secondary-focus",children:"Trending"}),e.jsx("button",{className:"btn btn-sm btn-accent hover:bg-accent-focus",children:"Popular"}),e.jsx("button",{className:"btn btn-sm btn-info hover:bg-info-focus",children:"Hot"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 w-full justify-center mb-0",children:[e.jsx("button",{className:"btn btn-sm btn-success hover:bg-success-focus",children:"DAOs"}),e.jsx("button",{className:"btn btn-sm btn-warning hover:bg-warning-focus",children:"Web3"}),e.jsx("button",{className:"btn btn-sm btn-error hover:bg-error-focus",children:"Design"})]})]})]})})},f=({title:s,description:t,image:l,onClick:a})=>e.jsxs("div",{className:"card rounded-md bg-base-100 shadow-xl h-48 md:h-40 lg:h-48 lg:w-3/4 md:-1/2 sm:w-full sm:ml-6 md:ml-0 ml-0 mr-4 border border-white hover:bg-slate-700 flex",onClick:a,children:[e.jsx("div",{className:"flex",children:e.jsx("img",{src:l,className:"w-16 rounded-full ml-4 mt-4"})}),e.jsxs("div",{className:"pl-4",children:[e.jsx("h2",{className:"card-title",children:s}),e.jsx("p",{className:"font-medium text-accent",children:t})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"tooltip","data-tip":"This gig is open to bids or has a set reward.",children:e.jsx("div",{className:"btn btn-xs btn-neutral rounded-md mr-4",children:"Bid/Reward$"})})}),e.jsx("div",{className:"flex pl-4",children:e.jsxs("div",{className:"pb-2",children:[e.jsx("div",{className:"badge badge-neutral rounded-md mx-1",children:"categories"}),e.jsx("div",{className:"badge badge-primary rounded-md mx-1",children:"skills"}),e.jsx("div",{className:"badge badge-accent rounded-md mx-1",children:"no. apply"})]})})]}),N=({isOpen:s,onClose:t})=>{const[l,a]=r.useState([]),[n,d]=r.useState(""),[o,i]=r.useState(""),m=c=>{a([c.target.value])},x=c=>{d(c.target.value)},p=c=>{i(c.target.value)},b=c=>{c.preventDefault()};return s?e.jsx("dialog",{id:"apply_modal",className:"modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001]",open:s,style:{width:"fit-content"},children:e.jsxs("div",{className:"modal-box p-4",children:[e.jsx("form",{onSubmit:b,children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-4 top-4",onClick:t,children:"✕"})}),e.jsxs("div",{className:"overflow-y-auto h-full pb-10",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Apply for Opportunity"}),e.jsx("label",{className:"label",children:"Availability:"}),e.jsx("input",{type:"date",value:l.join(", "),onChange:m}),e.jsx("label",{className:"label",children:"Token:"}),e.jsx("input",{type:"text",value:n,onChange:x}),e.jsx("label",{className:"label",children:"Message:"}),e.jsx("textarea",{value:o,onChange:p})]}),e.jsx("button",{className:"btn btn-accent rounded-sm mt-2 left-4 mb-6",children:"Submit"})]})}):null},v=({isOpen:s,onClose:t,children:l})=>{const[a,n]=r.useState(!1),d=()=>{n(!0)};return e.jsxs("div",{children:[a&&e.jsx(N,{isOpen:a,onClose:()=>n(!1)}),e.jsx("dialog",{id:"my_modal_3",className:"modal",open:s,children:e.jsxs("div",{className:"modal-box max-w-7xl sm:max-w-1/2 h-screen/3 mt-24 px-4 overflow-y-auto",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-4 top-4",onClick:t,children:"✕"})}),e.jsx("div",{className:"overflow-y-auto h-full pb-10",children:l}),e.jsx("button",{className:"btn btn-accent rounded-sm mt-2 left-4 mb-6",onClick:d,children:"Apply"})]})})]})},y=[{title:"New gig0.",description:"Posted on date.",image:"src/assets/laptop.svg"},{title:"New gig1.",description:"Posted on date2.",image:"src/assets/laptop.svg"},{title:"New gig2.",description:"Posted on date3.",image:"src/assets/laptop.svg"},{title:"New gig3.",description:"Posted on date4.",image:"src/assets/laptop.svg"},{title:"New gig4.",description:"Posted on date5.",image:"src/assets/laptop.svg"},{title:"New gig5.",description:"Posted on date6.",image:"src/assets/laptop.svg"}];function u(){const[s,t]=r.useState(!1),[l,a]=r.useState(""),n=()=>{t(!0)},d=()=>{t(!1)},o=y.filter(i=>i.title.toLowerCase().includes(l.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx("h1",{className:"text-2xl text-center mx-auto mt-16",children:"All Bounties"}),e.jsx("h2",{className:"text-center text-lg mt-4 mb-4 text-accent",children:"Explore gigs and bounties"}),e.jsx("div",{className:"container mt-4",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-0 sm:justify-center",children:[e.jsx(j,{setFilter:i=>a(i)}),e.jsx("div",{className:"flex flex-col gap-4 flex-1",children:o.map((i,m)=>e.jsx(f,{title:i.title,description:i.description,image:i.image,onClick:n},m))})]})}),e.jsxs(v,{isOpen:s,onClose:d,children:[e.jsx("h2",{className:"text-lg font-light mt-2 text-neutral-400",children:"Organization Offering Gig"}),e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Gig/Bounty Title"}),e.jsxs("div",{className:"flex justify-start mb-4",children:[e.jsx("div",{className:"badge badge-accent rounded-md mx-1",children:"Open Application"}),e.jsx("div",{className:"badge badge-neutral rounded-sm mx-1",children:"Bid/Reward$"})]}),e.jsx("div",{className:"callout callout-info bg-primary text-primary-content p-4 mb-4",children:e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})}),e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."})]})]})}const S=h("/")({component:u}),k=()=>e.jsx("div",{children:e.jsx(u,{})});export{S as Route,k as default};
