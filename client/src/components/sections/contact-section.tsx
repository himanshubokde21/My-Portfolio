import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, title: "Email", value: "bokdehimanshu802@gmail.com", accent: "#7c3aed" },
  { icon: Phone, title: "Phone", value: "+91 9284310243", accent: "#2563eb" },
  { icon: MapPin, title: "Location", value: "Nagpur, Maharashtra, India", accent: "#0891b2" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#2563eb" },
  { icon: Github, href: "#", label: "GitHub", color: "#a78bfa" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#38bdf8" },
];

function ContactCodeBlock() {
  return (
    <div className="mac-window w-full">
      <div className="mac-titlebar">
        <div className="mac-dot mac-dot-red" />
        <div className="mac-dot mac-dot-yellow" />
        <div className="mac-dot mac-dot-green" />
        <span className="ml-3 text-xs text-slate-500 font-mono">contact.ts</span>
      </div>
      <div className="mac-body">
        <div className="syn-comment mb-2">// Let's build something great together</div>
        <div className="mb-1">
          <span className="syn-keyword">const </span>
          <span className="syn-var">contact</span>
          <span className="syn-operator"> = </span>
          <span className="syn-bracket">{"{"}</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">role</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Full Stack Developer"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">focus</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"Backend Engineering"</span>
          <span className="syn-bracket">,</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">openTo</span>
          <span className="syn-operator">: </span>
          <span className="syn-bracket">[</span>
          <span className="syn-string">"freelance"</span>
          <span className="syn-bracket">, </span>
          <span className="syn-string">"fulltime"</span>
          <span className="syn-bracket">],</span>
        </div>
        <div className="ml-4 mb-1">
          <span className="syn-type">response</span>
          <span className="syn-operator">: </span>
          <span className="syn-string">"within 24h"</span>
        </div>
        <div><span className="syn-bracket">{"}"}</span><span className="syn-bracket">;</span></div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact-submissions"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 midnight-bg relative overflow-hidden">
      <div className="particle w-96 h-96 bottom-[-8rem] right-[-6rem] bg-violet-600/10 blur-3xl" />
      <div className="particle w-64 h-64 top-20 left-[-4rem] bg-blue-500/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">04. contact</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Let's Work Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Looking for a backend developer or full-stack engineer? Let's talk about your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-slate-200 font-mono">
              <span className="syn-keyword">async function </span>
              <span className="syn-function">reachOut</span>
              <span className="syn-bracket">() {"{"}</span>
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="glass-card glass-card-hover flex items-center gap-4 p-4 rounded-xl"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.accent}20` }}
                    >
                      <Icon size={18} style={{ color: info.accent }} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono mb-0.5">{info.title}</div>
                      <div className="text-slate-200 text-sm">{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="syn-bracket font-mono text-slate-500">{"}"}</div>

            <div>
              <p className="text-slate-500 text-sm font-mono mb-3">
                <span className="syn-comment">// find me online</span>
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-100 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <ContactCodeBlock />
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="glass-card rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 text-xs font-mono">first_name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/8 transition-all"
                            placeholder="John"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 text-xs font-mono">last_name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/8 transition-all"
                            placeholder="Doe"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 text-xs font-mono">email_address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/8 transition-all"
                          placeholder="you@company.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 text-xs font-mono">subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/8 transition-all"
                          placeholder="Backend API project"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 text-xs font-mono">message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/8 transition-all resize-none"
                          placeholder="Tell me about your project or role..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="btn-midnight w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
