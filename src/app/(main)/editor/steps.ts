// import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";

export const steps: {
  title: string;
  component: React.ComponentType;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
];






// import EducationForm from "./forms/EducationForm";
// import SkillsForm from "./forms/SkillsForm";
// import SummaryForm from "./forms/SummaryForm";
// import WorkExperienceForm from "./forms/WorkExperienceForm";

// {
//   title: "Work experience",
//   component: WorkExperienceForm,
//   key: "work-experience",
// },
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
