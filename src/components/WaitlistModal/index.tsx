"use client";
import * as React from "react";
import { useState } from "react";
import { IoClose, IoCheckmark } from "react-icons/io5";
import Input from "@/components/ui/Input";
import { Dialog } from "radix-ui";
import { ChevronDownIcon } from "lucide-react";
import SelectDropdown from "../ui/Select";

import CustomSelect from "@/components/ui/CustomSelect";
import { useMutation } from "@tanstack/react-query";
import Button from "../Button";
import { joinWaitlist } from "@/api/auth";
import { MdMarkunreadMailbox } from "react-icons/md";
import IconTransition from "../IconAnimation";
import { Loader } from "@mantine/core";
import toast from "react-hot-toast";

export default function WaitlistModal() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const {
    mutate: mutateWaitlist,
    isSuccess,
    isPending,
    reset,
  } = useMutation({
    mutationFn: () => joinWaitlist({ email, profession: role }),
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (error) => {
      console.log(error);
      // @ts-ignore
      toast.error(error?.response?.data?.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutateWaitlist();
  };

  const onClose = () => {
    setEmail("");
    setRole("");
    reset();
  };

  const professions = [
    { value: "consultant", label: "Consultant" },
    { value: "researcher", label: "Researcher" },
    { value: "recruiter", label: "Recruiter" },
    { value: "designer", label: "Designer" },
    { value: "project-manager", label: "Project Manager" },
    { value: "founder", label: "Founder" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "software-engineer", label: "Software Engineer" },
    { value: "marketing-specialist", label: "Marketing Specialist" },
    { value: "sales-representative", label: "Sales Representative" },
    { value: "customer-support", label: "Customer Support" },
    { value: "business-analyst", label: "Business Analyst" },
    { value: "hr-manager", label: "HR Manager" },
    { value: "finance-analyst", label: "Finance Analyst" },
    { value: "operations-manager", label: "Operations Manager" },
    { value: "qa-engineer", label: "QA Engineer" },
    { value: "content-creator", label: "Content Creator" },
    { value: "legal-advisor", label: "Legal Advisor" },
    { value: "data-analyst", label: "Data Analyst" },
    { value: "teacher", label: "Teacher" },
    { value: "student", label: "Student" },
    { value: "accountant", label: "Accountant" },
    { value: "banker", label: "Banker" },
    { value: "medical-doctor", label: "Medical Doctor" },
    { value: "nurse", label: "Nurse" },
    { value: "lawyer", label: "Lawyer" },
    { value: "freelancer", label: "Freelancer" },
    { value: "other", label: "Other" },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Join Waitlist</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm data-[state=open]:animate-overlayShow z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] bg-white w-[90vw] max-w-[500px]  rounded-2xl  shadow-xl -translate-x-1/2 -translate-y-1/2  bg-gray1 p-[25px] focus:outline-none data-[state=open]:animate-contentShow z-50">
          <Dialog.Title className=" hidden">Waitlist</Dialog.Title>

          <div className=" p-4 md:p-8 w-full relative">
            <Dialog.Close asChild onClick={onClose}>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <IoClose size={24} />
              </button>
            </Dialog.Close>

            {/* Success icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#3ABEAD] rounded-full flex items-center justify-center">
                    <IconTransition loadingComplete={isSuccess} />
                  </div>
                </div>
                {/* Concentric circles */}
                <div className="absolute inset-0 w-20 h-20 border-2 border-green-200 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-2 w-16 h-16 border border-green-300 rounded-full animate-ping opacity-30 animation-delay-75"></div>
              </div>
            </div>

            <div className="text-center mb-6 md:w-4/5 mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {isSuccess ? <>Nice!</> : " Join the Waitlist"}
              </h2>
              <p className="text-[#767676] text-sm md:text-base">
                {isSuccess ? (
                  <>
                    You&apos;ll be the first to know
                    <br />
                    when we release new update!
                  </>
                ) : (
                  "Be the first to access exclusive features, product and launch updates."
                )}
              </p>
            </div>

            {/* Form */}

            {!isSuccess && (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 mb-6 md:w-4/5 mx-auto"
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[36px]"
                />

                <CustomSelect
                  value={role}
                  onChange={setRole}
                  options={professions}
                />

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <Loader color="white" size={14} /> : "Join now"}
                </Button>
              </form>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
