import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import type { NewSkillProps } from "./new-skill";
import useCreateSkill from "@/api/hooks/skills/useCreateSkill";
import type { Category } from "@/types/skill";
import useUpdateSkill from "@/api/hooks/skills/useUpdateSkill";

const formSchema = z.object({
	name: z.string().min(1),
	category: z.string(),
	years_of_experience: z.coerce.number()
});

export default function NewSkillForm({ skill }: NewSkillProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	});
	const { createSkill } = useCreateSkill();
	const { updateSkill } = useUpdateSkill();
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("create skill", values);
		createSkill({
			...values,
			category: values.category as Category
		});
	}
	function onUpdate(values: z.infer<typeof formSchema>) {
		console.log("Edit skill", values);
		updateSkill({
			skill_id: skill?.skill_id || "",
			skill: {
				...values,
				category: values.category as Category
			}
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(skill ? onUpdate : onSubmit)}
				className="space-y-8 max-w-3xl mx-6 py-4"
				id="skill"
			>
				<FormField
					control={form.control}
					name="name"
					defaultValue={skill?.name}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Provide skill name"
									type="text"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="category"
					defaultValue={skill?.category as Category}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl className="w-full">
									<SelectTrigger>
										<SelectValue placeholder="Select a Skill Category" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="programming_languages">
										Programming Languages
									</SelectItem>
									<SelectItem value="frontend">Frontend</SelectItem>
									<SelectItem value="backend">Backend</SelectItem>
									<SelectItem value="database">Database</SelectItem>
									<SelectItem value="devops">Devops</SelectItem>
									<SelectItem value="tools">Tools</SelectItem>
								</SelectContent>
							</Select>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="years_of_experience"
					defaultValue={skill?.years_of_experience}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Years Of Experience</FormLabel>
							<FormControl>
								<Input
									placeholder="How many years you spent learning this skill"
									type="number"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
