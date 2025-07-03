import type { Skill } from "@/types/skill";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Save, X } from "lucide-react";
import NewSkillForm from "./new-skill-form";
import Layout from "../layout/layout";

export type NewSkillProps = {
	skill?: Skill;
};

export default function NewSkill({ skill }: NewSkillProps) {
	const navigate = useNavigate();
	const action = (
		<div className="flex gap-4">
			<Button
				className="flex bg-transparent text-black border hover:bg-transparent cursor-pointer"
				onClick={() => {
					navigate({ to: "/app/skills" });
				}}
			>
				<X />
				<span>Cancel</span>
			</Button>
			<Button
				className="flex bg-blue-700 hover:bg-blue-500 cursor-pointer"
				type="submit"
				form="skill"
			>
				<Save />
				<span>Save Skill</span>
			</Button>
		</div>
	);
	return (
		<Layout
			children={<NewSkillForm skill={skill} />}
			title={skill ? "Edit Skill" : "New Skill"}
			action={action}
		/>
	);
}
