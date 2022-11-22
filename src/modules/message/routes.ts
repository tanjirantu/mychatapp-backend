import { deleteMessage, getMessages } from "./repository";
import validator from "./validator";

export default [
	{
		method: "GET",
		path: "/messages/{roomUid}",
		options: {
			auth: {
				strategy: "jwt",
			},
			tags: ["Api", "Message"],
			description: "Get messages",
			validate: validator.getMessages,
		},
		handler: getMessages,
	},
	{
		method: "DELETE",
		path: "/messages/{uid}",
		options: {
			auth: {
				strategy: "jwt",
			},
			tags: ["Api", "Message"],
			description: "Delete messages",
			validate: validator.deleteMessage,
		},
		handler: deleteMessage,
	},
];
