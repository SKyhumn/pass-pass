import NCSHeader from "../../components/NCS/NCSHeader";
import NCSSelectSection from "../../components/NCS/NCSSelectSection";

export default function NCSPage() {
    return(
        <div className="p-6 md:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <NCSHeader/>
                <NCSSelectSection/>
            </div>
        </div>
    );
}