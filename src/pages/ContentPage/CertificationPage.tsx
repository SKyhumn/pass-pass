import StudyMainHeader from "../../components/Study/StudyMainHeader";
import JobSelectSection from "../../components/Study/Certification/JobSelectSection";

export default function CertificationPage() {
    return(
        <div className="p-6 md:p-8">
            <div className="mx-auto max-w-7xl space-y-8">

                <StudyMainHeader
                title="자격증"
                description="준비하고자 하는 직무의 자격증을 학습해보세요."
                />

                <JobSelectSection/>
                
            </div>
        </div>
    );
}