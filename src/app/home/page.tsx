import React from 'react'
import HomeNavbar from '@/components/common/HomeNavbar'
import HeroComponent from '@/components/core/HomePage/HeroSection/HeroComponent'
import FeaturesComponent from '@/components/core/HomePage/Feature/FeaturesComponent'
import WorkspaceCompoent from '@/components/core/HomePage/workpace-design/WorkspaceCompoent'
import WorkplaceSolution from '@/components/core/HomePage/workpace-design/WorkplaceSolution'
import ExpertComponent from '@/components/core/HomePage/workpace-design/ExpertComponent'
import CompanyComponent from '@/components/core/HomePage/Partners/CompanyConponent'
import Testimponials from '@/components/core/HomePage/Testimonials/Testimponials'
import CompanyVision from '@/components/core/HomePage/Vision/CompanyVision'
import FrequentQuest from '@/components/core/HomePage/FrequentlyAskedQuestion/FrequentQuest'
import HomeFooter from '@/components/core/HomePage/HomeFooter/HomeFooter'



const Page = () => {
    return (
        <div className='min-h-screen bg-white'>
            <HomeNavbar />
            <div className="bg-[url('/home/background.png')] h-[80vh] bg-no-repeat bg-cover">
                <HeroComponent />
            </div>
            <div className='max-w-7xl mx-auto'>
                <FeaturesComponent />
            </div>
            <div className='bg-slate-100'>
                <WorkspaceCompoent />
            </div>
            <div className='max-w-7xl mx-auto'>
                <WorkplaceSolution />
            </div>
            <div className='bg-slate-100 '>
                <ExpertComponent />
            </div>

            <div>
                <CompanyComponent />
            </div>
            <div className='bg-slate-100 '>
                <Testimponials />
            </div>
            <div >
                <CompanyVision />
            </div>
            <div >
                <FrequentQuest />
            </div>
            <div className='bg-black'>
                <HomeFooter />
            </div>

        </div>
    )
}

export default Page