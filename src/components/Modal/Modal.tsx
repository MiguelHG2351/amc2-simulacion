import * as React from "react"
import { Dialog } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"

type ModalProps = {
	title: string
	description: string
	iconName: string
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
}

export const Modal = ({ isOpen, setIsOpen, title, description, iconName, children }: ModalProps) => {

	return (
		<AnimatePresence>
			{isOpen && (
				<Dialog
					open={isOpen}
					onClose={setIsOpen}
					as="div"
					className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
				>
					<div className="flex flex-col py-8 px-4 text-center">
						<Dialog.Overlay />
						<div
							className="fixed inset-0 transition-opacity"
							aria-hidden="true"
						>
							<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>

						<motion.div
							className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
							initial={{
								opacity: 0,
								scale: 0.75,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									ease: "easeOut",
									duration: 0.15,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.75,
								transition: {
									ease: "easeIn",
									duration: 0.15,
								},
							}}
						>
							<span
								className="hidden sm:inline-block sm:align-middle sm:h-screen"
								aria-hidden="true"
							>
								&#8203;
							</span>

							<div
								className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
											<span className="material-symbols-outlined text-green-600">
												{ iconName }
											</span>
										</div>
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-lg leading-6 font-medium text-gray-900"
												id="modal-headline"
											>
												{ title }
											</Dialog.Title>
											<div className="mt-2">
												<Dialog.Description
													as="p"
													className="text-sm text-gray-500"
												>
													{description}
												</Dialog.Description>
											</div>
										</div>
									</div>
								</div>
									{children}
							</div>
						</motion.div>
					</div>
				</Dialog>
			)}
		</AnimatePresence>
	)
}
