import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate with shared schema first (client-side check)
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Məlumatları yoxlayın");
        }
        throw new Error("Xəta baş verdi. Zəhmət olmasa bir daha cəhd edin.");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Müraciətiniz göndərildi!",
        description: "Tezliklə sizinlə əlaqə saxlanılacaq.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Xəta",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
