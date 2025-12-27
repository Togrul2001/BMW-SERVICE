// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
// import { useCreateInquiry } from "@/hooks/use-inquiries";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Loader2, Send, CheckCircle2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export function ContactForm() {
//   const mutation = useCreateInquiry();
  
//   const form = useForm<InsertInquiry>({
//     resolver: zodResolver(insertInquirySchema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       message: "",
//     },
//   });

//   function onSubmit(data: InsertInquiry) {
//     mutation.mutate(data, {
//       onSuccess: () => {
//         form.reset();
//       },
//     });
//   }

//   return (
//     <motion.div 
//       className="glass-card p-8 rounded-2xl w-full"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.h3 
//         className="text-2xl font-bold mb-6 text-white"
//         initial={{ x: -20, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 }}
//       >
//         Müraciət göndər
//       </motion.h3>
      
//       <AnimatePresence mode="wait">
//         {mutation.isSuccess && (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
//           >
//             <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
//             <div>
//               <p className="text-green-500 font-medium">Təşəkkür!</p>
//               <p className="text-green-400 text-sm">Müraciətiniz uğurla göndərildi. Tezliklə sizə əlaqə saxlayacağız.</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-gray-400">Adınız</FormLabel>
//                 <FormControl>
//                   <Input 
//                     placeholder="Anar Əliyev" 
//                     {...field} 
//                     className="bg-secondary/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all h-12"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-gray-400">Əlaqə nömrəsi</FormLabel>
//                 <FormControl>
//                   <Input 
//                     placeholder="+994 50 000 00 00" 
//                     {...field} 
//                     className="bg-secondary/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all h-12"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-gray-400">Mesajınız (istəyə bağlı)</FormLabel>
//                 <FormControl>
//                   <Textarea 
//                     placeholder="BMW E46 325i üçün diaqnostika lazımdır..." 
//                     {...field} 
//                     className="bg-secondary/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all min-h-[120px] resize-none"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Button 
//               type="submit" 
//               disabled={mutation.isPending}
//               className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
//             >
//               {mutation.isPending ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Göndərilir...
//                 </>
//               ) : (
//                 <>
//                   <Send className="mr-2 h-4 w-4" />
//                   Müraciəti göndər
//                 </>
//               )}
//             </Button>
//           </motion.div>
//         </form>
//       </Form>
//     </motion.div>
//   );
// }
