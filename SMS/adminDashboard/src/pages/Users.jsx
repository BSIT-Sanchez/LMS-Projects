import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { subData } from '../data/Data'


const Users = ({children}) => {
  return (
    <Layout>
      <div className="w-full flex flex-col lg:flex-row justify-start items-start ">
        <div className="bg-[#fff] lg:mt-[2px] border-b-[.5px] flex-none lg:w-[350px] border-y-[.5px] pb-0 lg:pb-[10rem] w-[90%] mx-[5%] lg:mx-0 mt-20">
          <div className="border-x-[.5px]">
            <div  className="pl-7 py-8 lg:mt-0">
              <h1 className="font-[900] text-[30px] text-[#1e293c]">Settings</h1>
            </div>        
              {
                subData.map((item,index) => (
                  <Link to={item.link} key={index} className="flex justify-start items-start gap-3 border-y-[.5px] pl-7 py-4 cursor-pointer bg-none hover:bg-slate-100">
                      <div>
                        {item.icon}
                      </div>
                      <div>
                        <h1 className="text-[#262731] text-[14.5px] font-[300]">{item.name}</h1>
                        <p className="text-[#9ca3af] text-[13.5px] font-medium">{item.description}</p>
                      </div>
                  </Link>
                ))
              }
            
          </div>
        </div>
        
        <div className="w-[95%] lg:w-full mx-[2%] mt-1" >
          {
            children
          }

        </div>
        
      </div>
    </Layout>
  )
}

export default Users