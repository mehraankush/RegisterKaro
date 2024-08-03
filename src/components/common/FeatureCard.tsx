// FeatureCard.tsx
import Image from 'next/image';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface FeatureCardProps {
    feature: Feature;
    className?: string;
    color?: string;
    titleColor?: string; 
    descriptionColor?: string; 
}


const FeatureCard: React.FC<FeatureCardProps> = ({
    feature,
    className = '',
    color = '#000',
    titleColor = 'black',
    descriptionColor = 'slate-400'
}) => {
    return (
        <div className={`w-[280px] bg-${color} shadow-lg rounded-xl p-6 ${className}`}>
            <div>
                <Image
                    width={100}
                    height={100}
                    alt="UserIcon"
                    src={feature.icon}
                    className="w-8 h-8"
                />
            </div>
            <p className={`font-semibold text-lg text-${titleColor}`}>{feature.title}</p>
            <p className={`text-xs text-${descriptionColor}`}>{feature.description}</p>
        </div>
    );
};

export default FeatureCard;