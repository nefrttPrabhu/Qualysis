"use client" 
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function Loading() {
    const { pending } = useFormStatus();

    return (
            <Button className="mt-4 w-full" disabled={pending}>
                {pending ? "Submitting..." : "Submit"}
            </Button>
    )
}
