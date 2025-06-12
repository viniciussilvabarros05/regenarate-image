"use client"
import { CreateAccountForm } from "@/components/auth/create-account-form";
import { LoginAccountForm } from "@/components/auth/login-account-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Page() {
  return (
    <div className="flex w-screen h-screen justify-center max-w-sm flex-col gap-6 m-auto">
      <Tabs defaultValue="account" className="w-[380px]">
        <TabsList className="py-6 px-2 h-14 w-full">
          <TabsTrigger value="account" className="py-4 transition-all delay-150">Account</TabsTrigger>
          <TabsTrigger value="Login" className="py-4 transition-all delay-150">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="shadow-md w-full p-4">
        <CreateAccountForm/>
        </TabsContent>
        <TabsContent value="Login" className="shadow-md w-full p-4">
         <LoginAccountForm/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
