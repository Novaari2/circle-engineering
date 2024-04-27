import Form from "../../components/Form";
import {MailIcon, HomeIcon, PhoneCall} from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div clasname="container mx-auto">
        {/* text & ilustration */}
        <div clasname="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div clasname="flex flex-col justify-center">
            <div clasname="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span clasname="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 clasname="h1 max-w-md mb-8">Let&apos;s Work Together</h1>
            <p clasname="subtitle max-w-[400px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis delectus modi rem debitis.</p>
          </div>
          {/* ilustration */}
          <div clasname="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div clasname="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div clasname="flex flex-col gap-y-4 xl:gap-y-14 xl:mb-24 text-base xl:text-lg ">
            {/* mail */}
            <div clasname="flex items-center gap-x-8">
              <MailIcon size={18} clasname="text-primary" />
              <div>youremail@gmail.com</div>
            </div>
            {/* address */}
            <div clasname="flex items-center gap-x-8">
              <HomeIcon size={18} clasname="text-primary" />
              <div>Pisang 1 no 39</div>
            </div>
            {/* phone */}
            <div clasname="flex items-center gap-x-8">
              <PhoneCall size={18} clasname="text-primary" />
              <div>+62 085346787954</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact;