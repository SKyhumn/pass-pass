import StudyMainHeader from "../../components/Study/StudyMainHeader";
import NCSSelectSection from "../../components/Study/NCS/NCSSelectSection";

export default function NCSPage() {
    return(
        <div className="p-6 md:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <StudyMainHeader
                title="NCS 직업기초능력평가"
                description="필수과목, 전공과목, 모의고사를 통해 체계적으로 학습하세요."
                />
                <NCSSelectSection/>
            </div>
        </div>
    );
}