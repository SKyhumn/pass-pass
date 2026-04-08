type Props = {
    icon: string;
    title: string;
    desc: string;
    bgColor: string;
};

export default function FeatureCard({ icon, title, desc, bgColor }: Props) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm">
        
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor} mb-3`}>
                <img src={icon} className="h-5"/>
            </div>

            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>

        </div>
    );
}