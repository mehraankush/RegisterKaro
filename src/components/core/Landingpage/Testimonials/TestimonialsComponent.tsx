import { Testimonials } from "@/data/testtimonial";
import { Carousel } from "./Carousel";


const TestimonialsComponent: React.FC = () => {
    return (
        <div className="mt-10 ">
            <h1 className='text-center font-bold text-2xl'>Client Testimonial</h1>
            <Carousel slides={Testimonials} interval={5000} />
        </div>
    );
};

export default TestimonialsComponent;