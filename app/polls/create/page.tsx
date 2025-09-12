import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreatePollPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create a new poll</CardTitle>
          <CardDescription>
            Fill out the form below to create a new poll.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="question">Question</Label>
            <Input id="question" placeholder="What is your favorite color?" />
          </div>
          <div className="grid gap-2">
            <Label>Options</Label>
            <Input id="option1" placeholder="Option 1" />
            <Input id="option2" placeholder="Option 2" />
            <Button variant="outline" className="mt-2">Add option</Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Poll</Button>
        </CardFooter>
      </Card>
    </div>
  );
}