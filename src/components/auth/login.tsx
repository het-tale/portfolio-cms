import useLogin from "@/api/hooks/useLogin";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	username: z.string().email({
		message: "Enter a valid email address"
	}),
	password: z.string().min(8).max(16, {
		message: "password must be atleast 8 characters and max 16"
	})
});

const Login = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	});
	const { data, mutate } = useLogin();

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate(values);
	}
	return (
		<div className="bg-gray-100 min-h-screen h-full flex justify-center">
			<div className="bg-white shadow-md max-w-md self-center rounded-md p-8">
				<h1 className="text-3xl font-bold">Portfolio CMS</h1>
				<p className="text-gray-500">
					Sign in to manage your portfolio content
				</p>

				<Form {...form}>
					<form
						className="space-y-4 my-8"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-gray-600">Email address</FormLabel>
									<FormControl>
										<Input
											placeholder="email@example.com"
											{...field}
											type="email"
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-gray-600">Password</FormLabel>
									<FormControl>
										<Input placeholder="password" {...field} type="password" />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="w-full bg-blue-500 cursor-pointer hover:bg-blue-500 hover:opacity-50 hover:text-white"
						>
							Sign in
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default Login;
