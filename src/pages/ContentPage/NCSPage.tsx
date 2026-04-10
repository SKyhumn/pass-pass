import NCSHeader from "../../components/Study/NCS/NCSHeader";
import NCSSelectSection from "../../components/Study/NCS/NCSSelectSection";

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