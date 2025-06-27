import { UserNav } from "@/components/common/user.nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ImageUploadPlaceHolder } from "@/components/user-app/img-upload-placeholder";
import { UserAppHeader } from "@/components/user-app/user-app-header";
import { Sidebar } from "@/components/user-app/user-app-sidebar";
import { PlusCircle } from "lucide-react";

export default function Page() {
  return (
     <>
      <div className="md:block">
        {/* <Menu /> */}
        <UserAppHeader/>
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
                <Sidebar className="hidden lg:block"/>
              {/* <Sidebar playlists={playlists} className="hidden lg:block" /> */}
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="photos" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="photos" className="relative">
                          Photos
                        </TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Other
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircle />
                          Add Collection
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="photos"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                              Photo Collection
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            The photos you already enhanced
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Photo Collection
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                      <ImageUploadPlaceHolder/>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="documents"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
