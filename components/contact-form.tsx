// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Send, User, Mail, MessageSquare, Building } from "lucide-react"
// import { useState } from "react"

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission
//     console.log("Form submitted:", formData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   return (
//     <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//       <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
//             <MessageSquare className="w-6 h-6 text-emerald-400" />
//             Send us a Message
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
//                 <User className="w-4 h-4 text-emerald-400" />
//                 Full Name
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-emerald-400" />
//                 Email Address
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email address"
//                 className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="company" className="text-gray-300 flex items-center gap-2">
//                 <Building className="w-4 h-4 text-emerald-400" />
//                 Company (Optional)
//               </Label>
//               <Input
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Enter your company name"
//                 className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="message" className="text-gray-300">
//                 Message
//               </Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Tell us about your project or inquiry..."
//                 rows={6}
//                 className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400 resize-none"
//                 required
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 group"
//             >
//               <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
//               Send Message
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
// }


"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, User, Mail, MessageSquare, Building } from "lucide-react";
import { sendContactEmail } from "@/lib/email";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      // 1) send via EmailJS
      await sendContactEmail(formData);

      // 2) OPTIONAL: also persist to your DB (uncomment after step 4)
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      setStatus("success");
      setMsg("Message sent! We’ll get back to you shortly.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
      setMsg("Failed to send. Please try again in a moment.");
      console.error(err);
    }
  };

  const isLoading = status === "loading";

  return (
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-emerald-400" />
            Send us a Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-300 flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-400" />
                Company (Optional)
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                rows={6}
                className="bg-gray-800/50 border-gray-600 focus:border-emerald-500 text-white placeholder:text-gray-400 resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 group disabled:opacity-60"
            >
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>

            {msg && (
              <p className={`text-sm ${status === "success" ? "text-emerald-400" : status === "error" ? "text-red-400" : "text-gray-300"}`}>
                {msg}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

