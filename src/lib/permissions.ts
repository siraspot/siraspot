import { SubscriptionLevel } from "./subscription";

export function canCreateResume(
  subscriptionLevel: SubscriptionLevel,
  currentResumeCount: number,
) {
  const maxResumeMap: Record<SubscriptionLevel, number> = {
    free: 0,
    pro: 10,
    pro_plus: 3,
  };

  const maxResumes = maxResumeMap[subscriptionLevel];

  return currentResumeCount < maxResumes;
}

export function canUseAITools(subscriptionLevel: SubscriptionLevel) {
  return subscriptionLevel == "free";
}

export function canUseCustomizations(subscriptionLevel: SubscriptionLevel) {
  return subscriptionLevel === "pro_plus";
}
