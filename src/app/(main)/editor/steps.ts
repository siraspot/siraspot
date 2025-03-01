import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
];






// import EducationForm from "./forms/EducationForm";
// import SkillsForm from "./forms/SkillsForm";
// import SummaryForm from "./forms/SummaryForm";

// {
//   title: "Education",
//   component: EducationForm,
//   key: "education",
// },
// {
//   title: "Skills",
//   component: SkillsForm,
//   key: "skill",
// },
// {
//   title: "Summary",
//   component: SummaryForm,
//   key: "summary",
// },
