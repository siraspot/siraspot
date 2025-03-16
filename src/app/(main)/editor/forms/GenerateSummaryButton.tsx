import React from "react";
import { ResumeValues } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import LoadingButton from "@/components/LoadingButton";
import { WandSparklesIcon } from "lucide-react";
import { generateSummary } from "./actions";
import { useSubscriptionLevel } from "../../SubscriptionLevelProvider";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}

export default function GenerateSummaryButton({
    resumeData,
    onSummaryGenerated,
  }: GenerateSummaryButtonProps) {
    const subscriptionLevel = useSubscriptionLevel();

  const premiumModal = usePremiumModal();

    const { toast } = useToast();

    const [loading, setLoading] = React.useState(false);

    async function handleClick() {
        // TODO: Block for non-premium users

    try {
        setLoading(true);
        const aiResponse = await generateSummary(resumeData);
        onSummaryGenerated(aiResponse);
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          description: "Something went wrong. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    }
    return (
        <LoadingButton
          variant="outline"
          type="button"
          onClick={handleClick}
          loading={loading}
        >
          <WandSparklesIcon className="size-4" />
          Generate (AI)
        </LoadingButton>
      );
}
