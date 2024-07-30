import React from "react";
import GitHubIcon from "/public/social-icons/logo-github-svgrepo-com.svg";
import LinkedinIcon from "/public/social-icons/linkedin-logo-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";

const EmailForm = () => {
	return (
		<section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
			<div>
				<h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					I'm currently looking for new opportunities to contribute my skills,
					learn new skills and grow. Whether you have a question or just want to
					say hi, my inbox is always open. I'll definitely respond to you!
				</p>
				<div className="socials lg:mt-8 flex flex-row mb-10 mt-5">
					<Link href="https://github.com/ZakariAdamu" target="_blank">
						<Image
							className="rounded-full bg-gray-300 mr-7 hover:bg-gray-500"
							width={40}
							height={40}
							src={GitHubIcon}
							alt="Github Icon"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/zakari-adamu-84b4781b9"
						target="_blank"
					>
						<Image
							className="rounded bg-gray-300 p-2 hover:bg-gray-500"
							width={40}
							height={40}
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
			</div>
			<form action="" className="flex flex-col ">
				<div className="mb-6">
					<label
						htmlFor="email"
						className="text-white mb-2 block text-sm font-medium"
					>
						Your email
					</label>
					<input
						type="email"
						id="email"
						required
						placeholder="youremail@email.com"
						className="bg-[#18191E] border border-[#33353F] placeholder-[#606366] text-gray-100 text-sm rounded-lg block w-full p-2.5"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="subject"
						className="text-white mb-2 block text-sm font-medium"
					>
						Subject
					</label>
					<input
						type="text"
						id="subject"
						required
						placeholder="Email Subject"
						className="bg-[#18191E] border border-[#33353F] placeholder-[#606366] text-gray-100 text-sm rounded-lg block w-full p-2.5"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="message"
						className="text-white block text-sm mb-2 font-medium"
					>
						Message
					</label>
					<textarea
						name="message"
						id="message"
						className="bg-[#18191E] border border-[#33353F] placeholder-[#606366] text-gray-100 text-sm rounded-lg block w-full p-2"
						placeholder="Type your message here..."
					/>
				</div>
				<button
					type="submit"
					className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default EmailForm;
