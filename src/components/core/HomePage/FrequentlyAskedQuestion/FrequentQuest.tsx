import React from 'react'
import { MailQuestion } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { FrequentQuestion } from '@/data/question'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FrequentQuest = () => {
    return (
        <div className='pb-[100px] max-w-7xl mx-auto'>
            <div className='text-center mt-10 space-y-2'>
                <h2 className='text-2xl text-blue500 font-semibold'>Questions in mind?</h2>
                <p>Read our FAQ</p>
                <div className='justify-center flex'>
                    <Separator className='w-[100px]' />
                    <Separator className='w-[100px] ml-8' />
                </div>
            </div>

            <Accordion type="single" collapsible className="w-full mt-10  grid grid-cols-2 gap-10  text-black">
                {
                    FrequentQuestion.map((ques, i) => (
                        <AccordionItem key={i} value={ques.ques} className='bg-slate-100 px-5'>
                            <AccordionTrigger className='hover:no-underline text-sm text-left'>
                                {ques.ques}
                            </AccordionTrigger>
                            <AccordionContent>
                                {ques.ans}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }

            </Accordion>
        </div>
    )
}

export default FrequentQuest