"use client";
import { createJobOpeningAction } from "@/actions/company/createJobOpeningAction"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { skillOptions } from "@/lib/data/skills";
import { Badge } from "@/components/ui/badge";
import { FormEvent, useState } from "react";

export const CreateJobForm = ({ company_id }: { company_id: string }) => {
  const [skillOpt, setskillOpt] = useState<string[]>([]);
  const handleTags = (tag: string) => {
    var usedSkills = [...skillOpt];
    console.log(usedSkills);
    if (skillOpt.includes(tag)) {
      usedSkills.splice(usedSkills.indexOf(tag), 1);
    } else {
      usedSkills.push(tag);
    }
    setskillOpt(usedSkills);
  };
  const [role, setRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [expRequired, setExpRequired] = useState("");
  const [mode, setMode] = useState("");
  const [openings, setOpenings] = useState("");
  const [registrationDeadline, setRegistrationDeadline] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append("skills", JSON.stringify(skillOpt));
    formData.append("role", role);
    formData.append("job_description", jobDescription);
    formData.append("location", location);
    formData.append("exp_required", expRequired);
    formData.append("mode", mode);
    formData.append("company_id", company_id);
    formData.append("openings", openings);
    formData.append("registration_deadline", registrationDeadline);

    await createJobOpeningAction(formData)
  }
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Create Job Opening</CardTitle>
        <CardDescription>Create a new job opening for your company</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => { handleFormSubmit(e) }}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="role">Role</Label>
              <Input name="role" onChange={e => { setRole(e.target.value) }} placeholder="Frontend developer" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="job_description">Job Description</Label>
              <Textarea name="job_description" onChange={e => { setJobDescription(e.target.value) }} placeholder="We are looking for..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input name="location" onChange={e => { setLocation(e.target.value) }} placeholder="123, ABC Street" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="exp_required">Experience Required</Label>
              <Select name="exp_required" onValueChange={(value) => { setExpRequired(value) }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">0-1</SelectItem>
                  <SelectItem value="2">{"2+"}</SelectItem>
                  <SelectItem value="3">{"3+"}</SelectItem>
                  <SelectItem value="5">{"5+"}</SelectItem>
                  <SelectItem value="10">{"10+"}</SelectItem>
                  <SelectItem value="15">{"15+"}</SelectItem>
                  <SelectItem value="20">{"20+"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mode">Mode</Label>
              <Select name="mode" onValueChange={(value) => { setMode(value) }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="ONSITE">On-site</SelectItem>
                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                  <SelectItem value="REMOTE">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="openings">Number of Openings</Label>
              <Input name="openings" onChange={e => { setOpenings(e.target.value) }} placeholder="2" type="number" />
            </div>
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skills">Skills required</Label>
              <Textarea name="skills" placeholder="We are looking for..." />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg">Product skillegory</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" variant="outline">
                    Select Skills
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-56">
                  <DropdownMenuLabel>
                    Skills
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {skillOptions.map((skill, id) => (
                    <DropdownMenuCheckboxItem
                      onClick={() => {
                        handleTags(skill.value);
                      }}
                      checked={skillOpt.includes(skill.value)}
                      key={id}
                    >
                      {skill.value}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex flex-wrap gap-2 pt-2">
                {skillOpt[0] != "" &&
                  skillOpt.map((skill, id) => (
                    <>
                      {/* <p>{JSON.stringify(skill)}</p> */}
                      <Badge key={id} className="w-fit">
                        {skill}
                      </Badge>
                    </>
                  ))}
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="registration_deadline">Application deadline</Label>
              <Input name="registration_deadline" onChange={e => setRegistrationDeadline(e.target.value)} className="w-full" type="datetime-local" />
            </div>
          </div>
          <input className="hidden" name="company_id" defaultValue={company_id} />
          <Button className="w-full mt-4">Publish</Button>
        </form>
      </CardContent>
    </Card>
  )
}