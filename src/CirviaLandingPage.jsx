import { CheckCircle, ShieldCheck, MessageSquare, Eye } from "lucide-react";

export default function CirviaLandingPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white">
        <header className="p-6 flex justify-between items-center shadow-md bg-[#0D1B2A] border-b border-slate-800">
            <div className="flex items-center space-x-2">
                <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-10 w-auto" />
            </div>
            <nav className="space-x-4">
                <a href="#about" className="hover:underline text-slate-200">About</a>
                <a href="#product" className="hover:underline text-slate-200">Parental AI</a>
                <a href="#contact" className="hover:underline text-slate-200">Contact</a>
            </nav>
        </header>

      <section className="py-20 text-center px-4 md:px-20">
        <div className="flex justify-center mb-6">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-48 w-auto" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Building Technology That Protects</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-slate-300">
          Cirvia is a technology company focused on solving real-world safety challenges through secure and intelligent solutions. Our flagship product, Parental AI, ensures children stay protected while interacting with digital platforms.
        </p>
        <button className="bg-slate-100 hover:bg-white text-[#0D1B2A] px-6 py-3 rounded-lg text-lg shadow-md">
          Learn More
        </button>
      </section>

      <section id="product" className="bg-white text-[#0D1B2A] py-16 px-4 md:px-20">
        <h3 className="text-3xl font-semibold text-center text-[#0D1B2A] mb-6">Introducing Parental AI</h3>
<p className="text-center max-w-2xl mx-auto text-lg text-[#0D1B2A] mb-12">
  Parental AI is a real-time AI defense layer for your children online — instantly detecting threats, blocking predatory messages, and giving you full visibility, all integrated seamlessly into the apps your kids already use.
</p>
          <div className="flex justify-center mb-12">
            <img src="/parental-ai-logo.png" alt="Parental AI Logo" className="h-48 w-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl shadow-lg border p-6 bg-white">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <ShieldCheck className="mr-3" />
              <h4 className="text-xl font-bold">AI-Powered Protection</h4>
            </div>
            <p className="text-gray-700">
              Parental AI monitors content in real time, detecting threats and harmful messages using cutting-edge sentiment analysis to keep children safe.
            </p>
          </div>

          <div className="rounded-xl shadow-lg border p-6 bg-white">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <MessageSquare className="mr-3" />
              <h4 className="text-xl font-bold">Creepy Message Detection</h4>
            </div>
            <p className="text-gray-700">
              Blocks strangers, predators, and suspicious messages instantly before they reach your child on gaming or social media platforms.
            </p>
          </div>

          <div className="rounded-xl shadow-lg border p-6 bg-white">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <Eye className="mr-3" />
              <h4 className="text-xl font-bold">Full Visibility</h4>
            </div>
            <p className="text-gray-700">
              Gives parents a complete dashboard to monitor activity, view flagged content, and receive real-time alerts.
            </p>
          </div>

          <div className="rounded-xl shadow-lg border p-6 bg-white">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <CheckCircle className="mr-3" />
              <h4 className="text-xl font-bold">Easy Integration</h4>
            </div>
            <p className="text-gray-700">
              Offered as an SDK for seamless integration into existing platforms like Roblox, Snapchat, and mobile games.
            </p>
          </div>
        </div>
      </section>

<section className="bg-white text-[#0D1B2A] py-16 px-4 md:px-20">
  <h3 className="text-3xl font-semibold text-center mb-6">See How Parental AI Works</h3>
  <div className="flex justify-center">
    <div className="w-full max-w-4xl aspect-video">
      <iframe
        className="w-full h-full rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/Rb-7tPUuGn8"
        title="Parental AI Official Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

<footer id="contact" className="bg-[#0D1B2A] text-white text-center py-8 px-4">
        <h5 className="text-xl font-semibold mb-2">Contact Us</h5>
        <p className="text-sm">Email: info.parentalai@gmail.com</p>
        <p className="mt-4 text-xs">© 2025 Cirvia. All rights reserved.</p>
      </footer>
    </div>
  );
}
