import { Separator } from '@/components/ui/separator'
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { questionData } from '@/data/question'

const QuestionsComponent = () => {
    return (
        <div>
            <div className='text-center mt-10 space-y-2'>
                <h2 className='text-2xl text-darkBlue font-semibold'>Questions in mind?</h2>
                <p>Read our FAQ</p>
                <div className='justify-center flex'>
                    <Separator className='w-[100px]' />
                    <Separator className='w-[100px] ml-8' />
                </div>
            </div>

            <Accordion type="single" collapsible className="w-full mt-10 space-y-5 text-black">
                {
                    questionData.map((question, i) => (
                        <AccordionItem key={i} value={question.ques} className='bg-slate-100 px-5'>
                            <AccordionTrigger className='hover:no-underline'>
                                {question.ques}
                            </AccordionTrigger>
                            <AccordionContent>
                                {question.ans}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }

            </Accordion>


        </div>
    )
}

export default QuestionsComponent